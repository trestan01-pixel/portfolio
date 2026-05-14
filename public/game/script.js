/**
 * --- RPG GAME CORE LOGIC ---
 * Integrated and improved version.
 */

// --- INITIALIZATION & DATA PERSISTENCE ---

// Load data from localStorage or use defaults
const savedGameStarted = localStorage.getItem('gameStarted');
if (!savedGameStarted) {
    // If game not started, redirect to main menu
    window.location.href = 'mainMenu.html';
}

const savedPlayerName = localStorage.getItem('gamePlayerName') || 'Герой';
const savedCharacterClass = localStorage.getItem('gameCharacterClass') || 'Крестьянин';
const savedDifficulty = localStorage.getItem('gameDifficulty') || 'normal';
const savedDream = localStorage.getItem('gameDream') || 'Стать кем-то значимым';

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
    // Elements
    fire: 0,
    water: 0,
    wind: 0,
    air: 0,
    earth: 0,
    darkness: 0,
    light: 0,
    // Energy and Progress
    mentalPower: 100,
    maxMentalPower: 100,
    artifactMastery: 0,
    age: 16,
    level: 1,
    xp: 70,
    xpToNextLevel: 100,
    inventory: [],
    library: [],
    school: null
};

// Sync with saved progress if exists
const savedData = localStorage.getItem('playerData');
if (savedData) {
    try {
        const parsed = JSON.parse(savedData);
        playerData = { ...playerData, ...parsed };
    } catch (e) {
        console.error("Failed to load saved player data", e);
    }
}

function saveGame() {
    localStorage.setItem('playerData', JSON.stringify(playerData));
}

// --- CORE MECHANICS ---

/**
 * Calculates advanced elemental combinations based on base stats.
 */
function getAdvancedElements() {
    let advanced = [];
    if (playerData.earth > 0 && playerData.water > 0) {
        advanced.push({ name: 'Грязь', power: playerData.earth + playerData.water });
    }
    if (playerData.wind > 0 && playerData.fire > 0) {
        advanced.push({ name: 'Молния', power: playerData.wind + playerData.fire });
    }
    if (playerData.fire > 5 && playerData.wind > 5) {
        advanced.push({ name: 'Синее Пламя', power: playerData.fire * 1.5 + playerData.wind });
    }
    if (playerData.darkness > 10 && playerData.fire > 5) {
        advanced.push({ name: 'Черное Пламя', power: playerData.darkness * 2 + playerData.fire });
    }
    return advanced;
}

/**
 * Enrolls the character into a specialized academy.
 */
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
    saveGame();
}

/**
 * Perform training in the enrolled academy.
 */
function train() {
    if (!playerData.school) {
        addNotification('warning', 'Сначала нужно записаться в академию!');
        return;
    }

    if (playerData.mentalPower < 10) {
        addNotification('warning', 'Недостаточно ментальной энергии!');
        return;
    }

    playerData.mentalPower -= 10;
    playerData.school.progress += 10;

    addNotification('info', 'Тренировка прошла успешно! +10 к прогрессу.');

    if (playerData.school.progress >= playerData.school.maxProgress) {
        playerData.school.progress = 0;
        playerData.school.stage += 1;

        // Rewards for completing a stage
        playerData.intellect += 2;
        playerData.xp += 50;

        addNotification('info', `Ступень завершена! Теперь вы на ${playerData.school.stage} ступени.`);

        if (playerData.school.stage > 5) {
            addNotification('info', `Поздравляем! Вы завершили обучение в ${playerData.school.name}!`);
            playerData.school = null;
        }
    }

    updatePlayerStats();
    saveGame();
}

/**
 * Randomly finds an artifact.
 */
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

    playerData.inventory.push(newItem);
    addNotification('info', `Вы нашли артефакт: ${name}!`);
    renderInventory();
    saveGame();
}

// --- LIBRARY LOGIC ---

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

function determineBonuses(description, type) {
    let bonuses = { xp: 10 };
    const descLower = description.toLowerCase();

    for (let stat in statsKeywords) {
        statsKeywords[stat].forEach(keyword => {
            if (descLower.includes(keyword)) {
                bonuses[stat] = (bonuses[stat] || 0) + 1;
            }
        });
    }
    if (type === 'book') bonuses.xp += 5;
    if (type === 'game') bonuses.xp += 8;
    return bonuses;
}

function addMediaToLibrary() {
    const titleInput = document.getElementById('mediaTitle');
    const typeInput = document.getElementById('mediaType');
    const coverInput = document.getElementById('mediaCoverUrl');
    const descInput = document.getElementById('mediaBonusDescription');

    const title = titleInput.value.trim();
    const type = typeInput.value;
    const coverUrl = coverInput.value.trim();
    const description = descInput.value.trim();

    if (!title) {
        addNotification('warning', 'Название медиа-ресурса не может быть пустым!');
        return;
    }

    const bonuses = determineBonuses(description, type);
    const newItem = {
        id: Date.now(),
        title, type, coverUrl, description, bonuses
    };

    playerData.library.push(newItem);

    // Apply bonuses
    for (const stat in bonuses) {
        if (playerData.hasOwnProperty(stat)) {
            playerData[stat] += bonuses[stat];
        } else {
            // Temporary stats
            playerData[stat] = (playerData[stat] || 0) + bonuses[stat];
        }
    }

    // Level up check
    while (playerData.xp >= playerData.xpToNextLevel) {
        playerData.xp -= playerData.xpToNextLevel;
        playerData.level += 1;
        playerData.xpToNextLevel = Math.floor(playerData.xpToNextLevel * 1.2);
        addNotification('info', `Повышение уровня (${playerData.level})! Ваши знания расширились.`);
    }

    updatePlayerStats();
    renderLibraryList();
    addNotification('info', `${title} добавлен в библиотеку!`);

    if (Math.random() < 0.2) {
        findArtifact();
    }

    // Clear form
    titleInput.value = '';
    descInput.value = '';
    coverInput.value = '';
    saveGame();
}

function removeMediaFromLibrary(id) {
    const index = playerData.library.findIndex(item => item.id === id);
    if (index > -1) {
        const item = playerData.library[index];
        for (const stat in item.bonuses) {
            if (playerData.hasOwnProperty(stat)) {
                playerData[stat] = Math.max(0, playerData[stat] - item.bonuses[stat]);
            }
        }
        playerData.library.splice(index, 1);
        updatePlayerStats();
        renderLibraryList();
        addNotification('info', `"${item.title}" удален из библиотеки.`);
        saveGame();
    }
}

// --- UI RENDERING ---

function updatePlayerStats() {
    const elements = {
        '#player-info-top .player-name': playerData.name,
        '#int': playerData.intellect,
        '#combat': playerData.combat,
        '#int-bottom': playerData.intellect,
        '#combat-bottom': playerData.combat,
        '#academy-rank': playerData.school ? `${playerData.school.name} (${playerData.school.stage} ступень)` : 'Нет',
        '#mental': Math.floor(playerData.mentalPower),
        '#mental-max': playerData.maxMentalPower,
        '#mental-bottom': Math.floor(playerData.mentalPower),
        '#mental-max-bottom': playerData.maxMentalPower
    };

    for (let selector in elements) {
        const el = document.querySelector(selector);
        if (el) el.textContent = elements[selector];
    }

    // Update Academy UI visibility and progress
    const trainingBlock = document.getElementById('academy-training-block');
    const academyGrid = document.querySelector('.academy-grid');

    if (playerData.school) {
        if (trainingBlock) trainingBlock.style.display = 'block';
        if (academyGrid) academyGrid.style.display = 'none';

        const progressBar = document.getElementById('academy-progress-bar');
        const progressText = document.getElementById('academy-progress-text');

        if (progressBar) {
            const percentage = (playerData.school.progress / playerData.school.maxProgress) * 100;
            progressBar.style.width = `${percentage}%`;
        }
        if (progressText) {
            progressText.textContent = `${playerData.school.progress}/${playerData.school.maxProgress}`;
        }
    } else {
        if (trainingBlock) trainingBlock.style.display = 'none';
        if (academyGrid) academyGrid.style.display = 'grid';
    }

    const xpBar = document.querySelector('.xp-bar');
    const xpText = document.querySelector('.xp-text');
    if (xpBar && xpText) {
        const xpPercentage = (playerData.xp / playerData.xpToNextLevel) * 100;
        xpBar.style.width = `${xpPercentage}%`;
        xpText.textContent = `${playerData.xp}/${playerData.xpToNextLevel} Опыта`;
    }

    // Update elemental stats
    ['fire', 'water', 'wind', 'earth', 'darkness', 'light'].forEach(el => {
        const span = document.getElementById(`stat-${el}`);
        if (span) span.textContent = playerData[el];
    });

    const advancedDiv = document.getElementById('advanced-elements');
    if (advancedDiv) {
        const advanced = getAdvancedElements();
        advancedDiv.textContent = advanced.length > 0
            ? 'Комбинации: ' + advanced.map(a => `${a.name}(${a.power})`).join(', ')
            : '';
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    const target = document.getElementById(sectionId);
    if (target) target.style.display = 'block';

    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    const activeBtn = document.querySelector(`.menu-item[onclick*="${sectionId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function renderLibraryList() {
    const list = document.getElementById('library-list');
    if (!list) return;
    list.innerHTML = '';

    if (playerData.library.length === 0) {
        list.innerHTML = '<p>Пока ничего не добавлено.</p>';
        return;
    }

    playerData.library.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('library-item');

        const translations = {
            'intellect': 'Интеллект', 'combat': 'Бой', 'strength': 'Сила',
            'wisdom': 'Мудрость', 'luck': 'Удача', 'fire': 'Огонь', 'water': 'Вода'
        };

        const bonusesText = Object.entries(item.bonuses)
            .filter(([s, v]) => s !== 'xp')
            .map(([s, v]) => `${translations[s] || s}: +${v}`)
            .join(', ');

        const img = document.createElement('img');
        img.src = item.coverUrl || 'https://via.placeholder.com/50';
        img.alt = 'Cover';
        img.style.width = '50px'; img.style.height = '50px'; img.style.marginRight = '10px';

        const info = document.createElement('div');
        info.classList.add('item-info');

        const title = document.createElement('div');
        title.classList.add('item-title');
        title.textContent = item.title;

        const type = document.createElement('div');
        type.classList.add('item-type');
        type.textContent = `Тип: ${item.type}`;

        const bonus = document.createElement('div');
        bonus.classList.add('item-bonus');
        bonus.textContent = `Бонусы: ${bonusesText}`;

        info.appendChild(title);
        info.appendChild(type);
        info.appendChild(bonus);

        const btn = document.createElement('button');
        btn.classList.add('remove-btn');
        btn.textContent = 'Удалить';
        btn.onclick = () => removeMediaFromLibrary(item.id);

        itemEl.appendChild(img);
        itemEl.appendChild(info);
        itemEl.appendChild(btn);
        list.appendChild(itemEl);
    });
}

function renderInventory() {
    const inv = document.getElementById('inventory-list');
    if (!inv) return;
    inv.innerHTML = '';

    playerData.inventory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'inventory-slot-item';
        div.style.border = '1px solid #555';
        div.style.padding = '5px';
        div.style.fontSize = '8px';
        div.textContent = item.name;
        inv.appendChild(div);
    });
}

function addNotification(type, message) {
    const area = document.getElementById('notifications-area');
    if (!area) return;

    const item = document.createElement('div');
    item.classList.add('notification-item');

    const icon = document.createElement('span');
    icon.className = `icon ${type}`;
    icon.textContent = type === 'warning' ? '⚠' : 'ℹ';

    const text = document.createTextNode(` ${message}`);

    item.appendChild(icon);
    item.appendChild(text);
    item.style.animation = 'fadeIn 0.3s ease-out';
    area.prepend(item);

    if (area.children.length > 5) area.removeChild(area.lastChild);
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    updatePlayerStats();
    showSection('settlement');
    renderLibraryList();
    renderInventory();
});

// Mental Power regeneration
if (!window.mentalRegenInterval) {
    window.mentalRegenInterval = setInterval(() => {
        if (playerData.mentalPower < playerData.maxMentalPower) {
            playerData.mentalPower = Math.min(playerData.maxMentalPower, playerData.mentalPower + 1);
            updatePlayerStats();
        }
    }, 5000); // Regenerate 1 point every 5 seconds
}

// Helper for UI buttons
window.train = train;
window.addIntellect = function() {
    playerData.intellect += 1;
    playerData.xp += 10;
    if (playerData.xp >= playerData.xpToNextLevel) {
        playerData.xp -= playerData.xpToNextLevel;
        playerData.level += 1;
        playerData.xpToNextLevel = Math.floor(playerData.xpToNextLevel * 1.2);
    }
    updatePlayerStats();
    addNotification('info', 'Интеллект увеличен! Получен опыт.');
    saveGame();
};

window.addMediaToLibrary = addMediaToLibrary;
window.showSection = showSection;
