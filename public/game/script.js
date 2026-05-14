// --- ЛОГИКА ЗАПУСКА ИГРЫ И ЗАГРУЗКИ ДАННЫХ ИЗ МЕНЮ ---
// Эта часть должна быть в самом начале script.js
// Она проверяет, была ли игра начата, и при необходимости перенаправляет на меню.
if (!localStorage.getItem('gameStarted')) {
    // Если игра не начата, перенаправляем на главное меню
    window.location.href = 'mainMenu.html';
}

// Устанавливаем флаг, что игра начата (чтобы не перенаправляло на меню при следующей загрузке)
// Это будет установлено только после успешного запуска из mainMenu.html
localStorage.setItem('gameStarted', 'true');

// Проверяем, есть ли сохраненные данные из главного меню
let savedPlayerName = localStorage.getItem('gamePlayerName') || 'Герой';
let savedCharacterClass = localStorage.getItem('gameCharacterClass') || 'Крестьянин';
let savedDifficulty = localStorage.getItem('gameDifficulty') || 'normal';
let savedDream = localStorage.getItem('gameDream') || 'Стать кем-то значимым';

// --- БАЗОВЫЕ ДАННЫЕ ИГРОКА ---
let playerData = {
    name: savedPlayerName,
    class: savedCharacterClass,
    difficulty: savedDifficulty,
    dream: savedDream,
    intellect: 13,
    combat: 9,
    luck: 0,
    charisma: 0,
    endurance: 0,
    strength: 0,
    agility: 0,
    wisdom: 0,
    perception: 0,
    magic: 0,
    architecture: 0,
    archery: 0,
    crafting: 0,
    stealth: 0,
    finance: 0,
    sport: 0,
    // Элементальные характеристики
    fire: 0,
    water: 0,
    wind: 0,
    air: 0,
    earth: 0,
    darkness: 0,
    light: 0,
    // Ментальная сила и Артефакты
    mentalPower: 100,
    maxMentalPower: 100,
    artifactMastery: 0,
    // Прогресс и возраст
    age: 16,
    level: 1,
    xp: 70,
    xpToNextLevel: 100
};

// --- ФУНКЦИИ ИГРОВОЙ ЛОГИКИ И UI ---

function getAdvancedElements() {
    let advanced = [];
    if (playerData.earth > 0 && playerData.water > 0) advanced.push({ name: 'Грязь', power: playerData.earth + playerData.water });
    if (playerData.water > 0 && playerData.earth > 0) { /* Дубликат логики пользователя для примера */ }

    if (playerData.wind > 0 && playerData.fire > 0) advanced.push({ name: 'Молния', power: playerData.wind + playerData.fire });
    if (playerData.fire > 0 && playerData.wind > 0) advanced.push({ name: 'Синее Пламя', power: playerData.fire * 1.5 + playerData.wind });

    if (playerData.darkness > 0 && playerData.fire > 0) advanced.push({ name: 'Черное Пламя', power: playerData.darkness * 2 + playerData.fire });

    return advanced;
}

function enroll(schoolName, type) {
    if (playerData.school) {
        addNotification('warning', `Вы уже учитесь в ${playerData.school.name}!`);
        return;
    }

    playerData.school = {
        name: schoolName,
        type: type,
        stage: 1,
        progress: 0,
        maxProgress: type === 'Elite' ? 100 : 50
    };

    addNotification('info', `Вы зачислены в ${schoolName} (${type})!`);
    updatePlayerStats();
}

// --- ДАННЫЕ БИБЛИОТЕКИ ---
let library = []; // Массив для хранения всех добавленных медиа-ресурсов

// Функция для определения бонусов на основе описания
function determineBonuses(description, type) {
    let bonuses = {};
    bonuses.xp = 10; // Базовый опыт

    // Авто-проверка всех слов из словаря
    for (let stat in statsKeywords) {
        statsKeywords[stat].forEach(keyword => {
            if (description.includes(keyword)) {
                bonuses[stat] = (bonuses[stat] || 0) + 1;
            }
        });
    }

    // Бонусы от типа медиа
    if (type === 'book') bonuses.xp += 5;
    if (type === 'game') bonuses.xp += 8;

    return bonuses;
}

// Словарь: какие слова за какие характеристики отвечают
const statsKeywords = {
    'intellect':['интеллект', 'логика', 'аналитика', 'знания', 'ум'],
    'strength':['сила', 'мощь', 'атлетизм', 'физика'],
    'endurance':['упорство', 'вера', 'стойкость', 'выносливость'],
    'charisma':['лидерство', 'харизма', 'общение', 'речь', 'торговля'],
    'luck':['удача', 'везение', 'шанс', 'аномалия'],
    'wisdom': ['мудрость', 'опыт', 'глубина'],
    'magic': ['магия', 'заклинание', 'аркана', 'энергия'],
    'architecture': ['архитектура', 'строительство', 'план', 'инженерия'],
    'archery': ['меткость', 'стрельба', 'прицел', 'лук'],
    'crafting':['крафт', 'создание', 'ремесло', 'кузница', 'инструменты'],
    'stealth': ['скрытность', 'стелс', 'тень', 'тишина'],
    'finance': ['финансы', 'деньги', 'экономика', 'монета'],
    'sport':['спорт', 'бег', 'тренировка', 'выносливость'],
    'fire': ['огонь', 'пламя', 'жар', 'костер'],
    'water': ['вода', 'влага', 'океан', 'река', 'дождь'],
    'wind': ['ветер', 'поток', 'буря', 'ураган'],
    'air': ['воздух', 'небо', 'атмосфера'],
    'earth': ['земля', 'почва', 'камень', 'скала'],
    'darkness': ['тьма', 'тень', 'мрак', 'ночь'],
    'light': ['свет', 'сияние', 'солнце', 'день']
};

// Функция для добавления медиа-ресурса в библиотеку
function addMediaToLibrary() {
    const title = document.getElementById('mediaTitle').value.trim();
    const type = document.getElementById('mediaType').value;
    const mediaCoverUrl = document.getElementById('mediaCoverUrl').value.trim(); // НОВАЯ СТРОКА
    const description = document.getElementById('mediaBonusDescription').value.trim().toLowerCase(); // Приводим к нижнему регистру для поиска

    if (!title) {
        addNotification('warning', 'Название медиа-ресурса не может быть пустым!');
        return;
    }

        const bonuses = determineBonuses(description, type);

    const newItem = {
        id: Date.now(), // Уникальный ID
        title: title,
        type: type,
        coverUrl: mediaCoverUrl, // НОВАЯ СТРОКА
        description: description,
        bonuses: bonuses
    };

    library.push(newItem); // Добавляем в массив библиотеки

    // Применяем бонусы к характеристикам игрока
    for (const stat in bonuses) {
        if (playerData.hasOwnProperty(stat)) {
            playerData[stat] += bonuses[stat];
        } else if (stat === 'xp') {
            playerData.xp += bonuses[stat];
        } else {
            // Если характеристики нет в playerData, добавляем её (временно)
            playerData[stat] = (playerData[stat] || 0) + bonuses[stat];
        }
    }

    // Обновляем опыт и уровень
    while (playerData.xp >= playerData.xpToNextLevel) {
        playerData.xp -= playerData.xpToNextLevel;
        playerData.xpToNextLevel = Math.floor(playerData.xpToNextLevel * 1.2); // Увеличиваем требование
        addNotification('info', 'Повышение уровня! Ваши знания расширились.');
    }

    updatePlayerStats(); // Обновляем отображение характеристик
    renderLibraryList();
    addNotification('info', `${title} (${type}) добавлен в библиотеку! Получены бонусы.`);

    // Шанс найти артефакт
    if (Math.random() < 0.2) {
        findArtifact();
    }

    // Очищаем форму
    document.getElementById('mediaTitle').value = '';
    document.getElementById('mediaBonusDescription').value = '';
}

// Функция для удаления медиа-ресурса из библиотеки
function removeMediaFromLibrary(id) {
    const itemIndex = library.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        const removedItem = library[itemIndex];

        // Отменяем бонусы (просто вычитаем)
        for (const stat in removedItem.bonuses) {
            if (playerData.hasOwnProperty(stat)) {
                playerData[stat] -= removedItem.bonuses[stat];
            } else if (stat === 'xp') {
                playerData.xp -= removedItem.bonuses[stat];
            } else if (playerData[stat]) { // Если бонус был добавлен временно
                playerData[stat] -= removedItem.bonuses[stat];
            }
        }

        library.splice(itemIndex, 1); // Удаляем из массива
        updatePlayerStats();
        renderLibraryList();
        addNotification('info', `"${removedItem.title}" удален из библиотеки. Бонусы отменены.`);
    }
}

// Функция для отрисовки списка библиотеки
function renderLibraryList() {
    const libraryListElement = document.getElementById('library-list');
    libraryListElement.innerHTML = ''; // Очищаем список перед перерисовкой

    if (library.length === 0) {
        libraryListElement.innerHTML = '<p>Пока ничего не добавлено.</p>';
        return;
    }

    library.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('library-item');

        let bonusesText = Object.entries(item.bonuses)
            .filter(([stat, value]) => stat !== 'xp')
            .map(([stat, value]) => {
                const translations = {
                    'intellect': 'Интеллект', 'combat': 'Бой', 'strength': 'Сила',
                    'agility': 'Ловкость', 'wisdom': 'Мудрость', 'perception': 'Восприятие',
                    'luck': 'Удача', 'charisma': 'Харизма', 'endurance': 'Упорство',
                    'stamina': 'Выносливость', 'willpower': 'Воля', 'crafting': 'Крафт',
                    'stealth': 'Скрытность', 'magic': 'Магия', 'archery': 'Меткость',
                    'architecture': 'Архитектура', 'finance': 'Финансы', 'sport': 'Спорт'
                };
                let translatedStat = translations[stat] || stat.charAt(0).toUpperCase() + stat.slice(1);
                return `${translatedStat}: +${value}`;
            })
            .join(', ');

        const img = document.createElement('img');
        img.src = item.coverUrl || 'https://via.placeholder.com/50';
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.marginRight = '10px';

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('item-info');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('item-title');
        titleDiv.textContent = item.title;

        const typeDiv = document.createElement('div');
        typeDiv.classList.add('item-type');
        typeDiv.textContent = `Тип: ${item.type === 'book' ? 'Книга' : item.type === 'game' ? 'Игра' : item.type === 'movie' ? 'Фильм' : 'Другое'}`;

        const bonusDiv = document.createElement('div');
        bonusDiv.classList.add('item-bonus');
        bonusDiv.textContent = `Бонусы: ${bonusesText}`;

        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(typeDiv);
        infoDiv.appendChild(bonusDiv);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Удалить';
        removeBtn.onclick = () => removeMediaFromLibrary(item.id);

        itemElement.appendChild(img);
        itemElement.appendChild(infoDiv);
        itemElement.appendChild(removeBtn);

        libraryListElement.appendChild(itemElement);
    });
}

// --- ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ---
document.addEventListener('DOMContentLoaded', () => {
    updatePlayerStats();
    // Показываем секцию "Поселение" по умолчанию при загрузке
    showSection('settlement');
    renderLibraryList(); // Отрисовываем список библиотеки при загрузке
    renderInventory();
});

// Функция для обновления характеристик на экране
function updatePlayerStats() {
    // Обновляем имя в верхней панели
    const playerNameElement = document.querySelector('#player-info-top .player-name');
    if (playerNameElement) {
        playerNameElement.innerText = playerData.name;
    }

    const intElement = document.getElementById('int');
    if (intElement) intElement.innerText = playerData.intellect;

    const combatElement = document.getElementById('combat');
    if (combatElement) combatElement.innerText = playerData.combat;

    const intBottomElement = document.getElementById('int-bottom');
    if (intBottomElement) intBottomElement.innerText = playerData.intellect;

    const combatBottomElement = document.getElementById('combat-bottom');
    if (combatBottomElement) combatBottomElement.innerText = playerData.combat;

    const xpBar = document.querySelector('.xp-bar');
    const xpText = document.querySelector('.xp-text');
    if (xpBar && xpText) {
        const xpPercentage = (playerData.xp / playerData.xpToNextLevel) * 100;
        xpBar.style.width = `${xpPercentage}%`;
        xpText.innerText = `${playerData.xp}/${playerData.xpToNextLevel} Опыта`;
    }

    // Обновляем элементальные статы
    const elements = ['fire', 'water', 'wind', 'earth', 'darkness', 'light'];
    elements.forEach(el => {
        const elSpan = document.getElementById(`stat-${el}`);
        if (elSpan) elSpan.innerText = playerData[el];
    });

    // Обновляем комбинации
    const advancedDiv = document.getElementById('advanced-elements');
    if (advancedDiv) {
        const advanced = getAdvancedElements();
        advancedDiv.innerHTML = advanced.length > 0 ? 'Комбинации: ' + advanced.map(a => `${a.name}(${a.power})`).join(', ') : '';
    }

    // Обновляем ранг академии
    const academyRank = document.getElementById('academy-rank');
    if (academyRank) {
        academyRank.innerText = playerData.school ? `${playerData.school.name} (Ступень ${playerData.school.stage})` : 'Нет';
    }
}

// Функция для переключения разделов меню
function showSection(sectionId) {
    // Скрываем все разделы контента
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    // Показываем выбранный раздел
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Убираем класс 'active' со всех пунктов меню
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    // Добавляем класс 'active' к выбранному пункту меню
    const activeMenuItem = document.querySelector(`.menu-item[onclick="showSection('${sectionId}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}

// Пример функции, которую мы вызываем кнопкой
function addIntellect() {
    playerData.intellect += 1;
    playerData.xp += 10; // Добавляем немного опыта для примера
    if (playerData.xp >= playerData.xpToNextLevel) {
        playerData.xp = playerData.xp - playerData.xpToNextLevel; // Пример простого повышения уровня
        playerData.xpToNextLevel = Math.floor(playerData.xpToNextLevel * 1.2); // Увеличиваем требование к XP
        // Здесь можно добавить логику повышения уровня
    }
    updatePlayerStats();
    // Добавим уведомление на русском
    addNotification('info', 'Интеллект увеличен на 1! Получен опыт.');
}

// Функция для добавления уведомлений
function findArtifact() {
    const artifactNames = ["Сфера Разума", "Древний Клинок", "Кольцо Стихий", "Ментальный Кристалл"];
    const name = artifactNames[Math.floor(Math.random() * artifactNames.length)];
    const newItem = {
        id: Date.now(),
        name: name,
        type: 'artifact',
        charges: 10,
        maxCharges: 10,
        durability: 100
    };

    if (!playerData.inventory) playerData.inventory = [];
    playerData.inventory.push(newItem);
    addNotification('info', `Вы нашли артефакт: ${name}!`);
    renderInventory();
}

function renderInventory() {
    const invList = document.getElementById('inventory-list');
    if (!invList) return;
    invList.innerHTML = '';

    if (playerData.inventory) {
        playerData.inventory.forEach(item => {
            const div = document.createElement('div');
            div.style.border = '1px solid #555';
            div.style.padding = '5px';
            div.style.fontSize = '8px';
            div.textContent = item.name;
            invList.appendChild(div);
        });
    }
}

function addNotification(type, message) {
    const notificationsArea = document.getElementById('notifications-area');
    if (!notificationsArea) return;

    const notificationItem = document.createElement('div');
    notificationItem.classList.add('notification-item');
    let icon = '';
    if (type === 'warning') {
        icon = '<span class="icon warning">⚠</span>';
    } else if (type === 'info') {
        icon = '<span class="icon info">ℹ</span>';
    }
    notificationItem.innerHTML = `${icon} ${message}`;
    notificationsArea.prepend(notificationItem); // Добавляем новые сверху

    // Удаляем старые, если их слишком много
    if (notificationsArea.children.length > 5) {
        notificationsArea.removeChild(notificationsArea.lastChild);
    }
}
