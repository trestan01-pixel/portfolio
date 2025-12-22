import logging
import os
from dotenv import load_dotenv

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    ConversationHandler,
    MessageHandler,
    filters,
    CallbackQueryHandler,
    PicklePersistence,
)

# Загружаем переменные из .env файла
load_dotenv()

# --- НАСТРОЙКИ ---
BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
ADMIN_CHAT_ID = os.getenv("ADMIN_CHAT_ID")
AUDIT_URL = "https://trestan01-pixel.github.io/portfolio/#/audit"

if not BOT_TOKEN or not ADMIN_CHAT_ID:
    raise ValueError("ОШИБКА: Убедитесь, что TELEGRAM_BOT_TOKEN и ADMIN_CHAT_ID заданы в .env файле!")

# --- 🟢 ОБНОВЛЕННЫЙ КОНТЕНТ-ПЛАН (СТИЛЬ "ПРАГМАТИЧНЫЙ ХИРУРГ") ---
DRIP_SCHEDULE = [
    # Неделя 1: Калибровка (ежедневно)
    {'delay': 60, 'content': "<b>День 1: Что такое бизнес-хаос на самом деле</b>\n\nБольшинство думают, что хаос — это беспорядок. На практике хаос — это отсутствие причинно-следственных связей.\n\nВы что-то делаете, но:\n– не можете точно сказать, почему выросли\n– и почему в следующем месяце просели\n\nЭто не проблема мотивации. Это проблема архитектуры.\n\n<b>Вопрос:</b> Вы сейчас управляете системой — или реагируете на события?"},
    {'delay': 24 * 3600, 'content': "<b>День 2: Три признака утечки денег</b>\n\nЗа последние годы я видел десятки бизнесов. Независимо от ниши, повторяются одни и те же симптомы:\n\n1. Всё завязано на собственнике\n2. Лучшие клиенты приходят “случайно”\n3. Любой рост = больше пожаров\n\nПока это не зафиксировано в системе, бизнес не масштабируется, а растягивается.\n\n<b>Вопрос:</b> Какой из пунктов бьёт именно по вам?"},
    {'delay': 24 * 3600, 'content': "<b>День 3: Почему рост почти всегда усиливает проблемы</b>\n\nПочти все хотят роста. Но рост без архитектуры делает проблемы дороже.\n\nБыло 10 сделок — потеряли 2.\nСтало 100 сделок — потеряли 20.\n\nИменно поэтому точка роста почти всегда лежит не в маркетинге, а в слабом звене процесса.\n\n<b>Вопрос:</b> Вы знаете своё самое слабое звено — или догадываетесь?"},
    {'delay': 24 * 3600, 'content': "<b>День 4: CRM — это не про программу</b>\n\nCRM — это не софт. Это привычка фиксировать реальность.\n\nНеважно, где вы начинаете: таблица, блокнот, система — вторично.\n\nВажно одно: каждое обращение должно оставлять след. Если следа нет — управлять нечем.\n\n<b>Вопрос:</b> Вы видите все входящие или только те, что “дожили”?"},
    {'delay': 24 * 3600, 'content': "<b>День 5: Почему делегирование не работает</b>\n\nДелегирование ломается не из-за людей. Оно ломается из-за отсутствия формы.\n\nЕсли задача не описана — результат всегда случайный.\n\nБизнес — это не героизм. Это повторяемость.\n\n<b>Вопрос:</b> Какая задача сейчас выполняется “на ощущениях”?"},
    {'delay': 24 * 3600, 'content': "<b>День 6: Цифры, которые реально важны</b>\n\nВ бизнесе не десятки метрик. Обычно их 3–5.\n\nПроблема в том, что большинство знает их постфактум. А управлять можно только тем, что видно в моменте.\n\n<b>Вопрос:</b> Вы знаете свои ключевые цифры сегодня — не за прошлый месяц?"},
    {'delay': 24 * 3600, 'content': "<b>День 7: Системность — это не проект, а режим</b>\n\nСистемность — это не внедрение. Это способ думать.\n\nПока собственник не меняет фокус, никакая CRM не спасёт.\n\n<b>Вопрос:</b> Вы больше реагируете — или проектируете?"},
    
    # Неделя 2: Сдвиг фокуса
    {'delay': 2 * 24 * 3600, 'content': "<b>Процессы важнее людей</b>\n\nСильные люди без процессов = нестабильность.\nСредние люди с процессами = предсказуемость.\n\nМасштабируется всегда второе.\n\n<b>Вопрос:</b> У вас бизнес держится на людях или на конструкции?"},
    {'delay': 3 * 24 * 3600, 'content': "<b>Кейс без брендов</b>\n\nВ одном бизнесе просто начали фиксировать все заявки. Без автоматизации. Без “большой системы”.\n\nЧерез месяц выяснилось: почти треть “нецелевых” лидов — это потерянные сделки.\n\nДеньги были в бизнесе. Они просто не доходили.\n\n<b>Вопрос:</b> Где у вас теряется ценность?"},
    {'delay': 2 * 24 * 3600, 'content': "<b>Почему собственник — самое узкое место</b>\n\nСамый дорогой ресурс бизнеса — внимание собственника.\n\nЕсли вы постоянно внутри операционки, стратегия просто не происходит.\n\n<b>Вопрос:</b> Чем вы заняты большую часть недели?"},

    # Неделя 3: Формирование запроса
    {'delay': 4 * 24 * 3600, 'content': "<b>Ваш главный актив</b>\n\nНе продукт. Не офис. Не реклама.\n\nГлавный актив — структурированная клиентская база. Без неё нет повторных продаж, прогноза и роста.\n\n<b>Вопрос:</b> Вы работаете с базой — или она просто лежит?"},
    {'delay': 3 * 24 * 3600, 'content': "<b>Типичная ошибка умных предпринимателей</b>\n\nСамая частая ошибка — пытаться “разобраться самому”.\n\nЗнаний обычно достаточно. Не хватает внешнего взгляда на систему.\n\n<b>Вопрос:</b> Когда на ваш бизнес последний раз смотрели как на объект проектирования?"},

    # Неделя 4: Развилка
    {'delay': 4 * 24 * 3600, 'content': "<b>Цена бездействия</b>\n\nХаос не стоит ноль. Он стоит денег, времени и выгорания.\n\nКаждый месяц без системы — это отложенные решения и упущенные возможности.\n\n<b>Вопрос:</b> Вы готовы ещё год жить в этом режиме?"},
]


# --- Константы и состояния ---
(ASK_CONTACT,) = range(1)
CALLBACK_MATERIALS = "show_materials"
CALLBACK_CONSULTATION = "request_consultation"
CALLBACK_MAIN_MENU = "main_menu"

logging.basicConfig(format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO)
logger = logging.getLogger(__name__)


# --- Функции бота ---

def get_main_menu_keyboard():
    return InlineKeyboardMarkup([[InlineKeyboardButton("📚 Полезные материалы", callback_data=CALLBACK_MATERIALS)], [InlineKeyboardButton("🚀 Получить персональный разбор", callback_data=CALLBACK_CONSULTATION)]])

async def send_drip_message(context: ContextTypes.DEFAULT_TYPE) -> None:
    job = context.job
    drip_index = job.data['drip_index']
    chat_id = job.chat_id
    await context.bot.send_message(chat_id, text=DRIP_SCHEDULE[drip_index]['content'], parse_mode='HTML')

    next_drip_index = drip_index + 1
    if next_drip_index < len(DRIP_SCHEDULE):
        next_delay = DRIP_SCHEDULE[next_drip_index]['delay']
        context.job_queue.run_once(
            send_drip_message, next_delay,
            data={'drip_index': next_drip_index}, chat_id=chat_id, name=f"drip_{chat_id}_{next_drip_index}"
        )
    else:
        # --- 🟢 ОБНОВЛЕННЫЙ ФИНАЛЬНЫЙ БЛОК ("РАЗВИЛКА") ---
        final_text = (
            "<b>От наблюдений к действиям</b>\n\n"
            "Если вы дошли до этого сообщения, значит, проблема вам знакома.\n\n"
            "Обычно дальше два пути:\n"
            "1. Продолжать латать симптомы\n"
            "2. Разобрать систему целиком\n\n"
            "Я периодически делаю ограниченное число разборов, где за 60–90 минут вскрывается структура бизнеса, находятся ключевые узкие места и становится понятно, что делать дальше.\n\n"
            "Если хотите — следующий шаг можно сделать здесь:"
        )
        final_keyboard = InlineKeyboardMarkup([[InlineKeyboardButton("✅ Сделать следующий шаг (записаться на разбор)", callback_data=CALLBACK_CONSULTATION)]])
        await context.bot.send_message(chat_id, final_text, reply_markup=final_keyboard, parse_mode='HTML')
        context.user_data['drip_completed'] = True

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user = update.effective_user
    welcome_text = (f"Здравствуйте, {user.first_name}!\n\n"
                    "Я — цифровой ассистент Руслана Юмагулова. Я помогаю собственникам превращать операционный хаос в управляемую систему и возвращать контроль над бизнесом.\n\n "
                    "Ниже — два возможных шага. Выберите тот, который подходит вам сейчас.")
    await update.message.reply_text(welcome_text, reply_markup=get_main_menu_keyboard())

    if 'drip_started' not in context.user_data:
        context.user_data['drip_started'] = True
        first_message = DRIP_SCHEDULE[0]
        context.job_queue.run_once(
            send_drip_message, first_message['delay'],
            data={'drip_index': 0}, chat_id=update.effective_chat.id, name=f"drip_{update.effective_chat.id}_0"
        )

async def main_menu_callback(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    query = update.callback_query
    await query.answer()
    await query.edit_message_text(text="С чего начнем?", reply_markup=get_main_menu_keyboard())

async def materials_callback(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    query = update.callback_query
    await query.answer()
    keyboard = [[InlineKeyboardButton("🔍 Диагностировать бизнес-хаос", url=AUDIT_URL)], [InlineKeyboardButton("⬅️ Назад в главное меню", callback_data=CALLBACK_MAIN_MENU)]]
    await query.edit_message_text(text="Выберите интересующий материал:", reply_markup=InlineKeyboardMarkup(keyboard))

async def consultation_request_callback(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query
    await query.answer()
    await query.edit_message_text(text="Отлично! Чтобы записаться, оставьте, пожалуйста, ваш контакт (Telegram @username или телефон), и я свяжусь с вами в ближайшее время.\n\nДля отмены введите /cancel")
    return ASK_CONTACT

# --- ✅ ЭТО ПРАВИЛЬНАЯ ВЕРСИЯ ФУНКЦИИ НА ПРАВИЛЬНОМ МЕСТЕ ---
async def get_contact(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    """Получает контакт пользователя и отправляет УДОБНОЕ уведомление администратору."""
    user_contact = update.message.text
    user = update.message.from_user
    
    user_info = user.full_name
    if user.username:
        user_info += f" ([@{user.username}](tg://user?id={user.id}))"

    reply_command = f"/reply {user.id} "
    admin_message = (
        f"🚨 Новая заявка на разбор!\n\n"
        f"👤 **От:** {user_info}\n"
        f"📞 **Контакт:** {user_contact}\n\n"
        f"🆔 **Для ответа скопируйте команду ниже (нажмите на нее):**\n"
        f"`{reply_command}`"
    )
    
    await context.bot.send_message(chat_id=ADMIN_CHAT_ID, text=admin_message, parse_mode='Markdown')
    await update.message.reply_text("Спасибо! Ваша заявка принята. Я скоро с вами свяжусь.")
    
    return ConversationHandler.END

async def cancel_conversation(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text("Действие отменено. Вы можете вернуться в главное меню командой /start")
    return ConversationHandler.END

async def reply_to_user(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if str(update.effective_chat.id) != ADMIN_CHAT_ID: return
    try:
        user_id = context.args[0]
        reply_text = " ".join(context.args[1:])
        if not reply_text: raise ValueError("Текст ответа пустой")
        await context.bot.send_message(chat_id=user_id, text=f"💬 Ответ от Руслана:\n\n{reply_text}")
        await update.message.reply_text(f"✅ Сообщение успешно отправлено пользователю {user_id}.")
    except (ValueError, IndexError):
        await update.message.reply_text("❌ **Ошибка!** Используйте правильный формат:\n`/reply <ID пользователя> <текст сообщения>`", parse_mode='Markdown')

async def unknown_text(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("Я бот-ассистент и лучше всего работаю с кнопками. Чтобы вернуться в главное меню, пожалуйста, используйте команду /start")


# --- ✅ ЭТА ФУНКЦИЯ БЫЛА ПОЛНОСТЬЮ ПОТЕРЯНА ---
def main() -> None:
    """Запуск бота и настройка всех обработчиков."""
    persistence = PicklePersistence(filepath="bot_persistence")
    application = Application.builder().token(BOT_TOKEN).persistence(persistence).build()

    conv_handler = ConversationHandler(
        entry_points=[CallbackQueryHandler(consultation_request_callback, pattern='^' + CALLBACK_CONSULTATION + '$')],
        states={
            ASK_CONTACT: [MessageHandler(filters.TEXT & ~filters.COMMAND, get_contact)],
        },
        fallbacks=[CommandHandler('cancel', cancel_conversation)],
    )

    application.add_handler(conv_handler)
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CallbackQueryHandler(materials_callback, pattern='^' + CALLBACK_MATERIALS + '$'))
    application.add_handler(CallbackQueryHandler(main_menu_callback, pattern='^' + CALLBACK_MAIN_MENU + '$'))
    application.add_handler(CommandHandler("reply", reply_to_user))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, unknown_text))

    print("Бот запущен. Финальная версия с автоворонкой на месяц.")
    application.run_polling()


if __name__ == "__main__":
    main()