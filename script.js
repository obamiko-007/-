const objectPositions = [
    { x: 50, y: 50 },
    { x: 200, y: 100 },
    { x: 300, y: 200 },
    { x: 100, y: 300 },
    { x: 400, y: 50 },
    { x: 50, y: 350 },
    { x: 250, y: 250 },
    { x: 350, y: 150 },
    { x: 150, y: 250 },
    { x: 450, y: 300 }
];

let foundObjects = 0;

// Создание скрытых объектов
function createHiddenObjects() {
    const gameArea = document.getElementById('game-area');
    objectPositions.forEach(pos => {
        const obj = document.createElement('div');
        obj.classList.add('hidden-object');
        obj.style.left = pos.x + 'px';
        obj.style.top = pos.y + 'px';

        // Добавление случайного изображения
        const images = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jIa0xsVdCJ81IQ414wbU5B-D73uuQ20Etg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BEs1bzJZPPdNXNWFcJtF5oPXdToQUpNvYw&s'
        ];
        const img = document.createElement('img');
        img.src = images[Math.floor(Math.random() * images.length)];
        obj.appendChild(img);

        // Обработка клика
        obj.addEventListener('click', () => {
            obj.style.display = 'none';
            foundObjects++;
            document.getElementById('score').textContent = `Найдено: ${foundObjects} из 10`;
            if (foundObjects === 10) {
                completeGame();
            }
        });

        gameArea.appendChild(obj);
    });
}

// Завершение игры
function completeGame() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('tasks-section').style.display = 'block';
}

// Выполнение заданий
let completedTasks = 0;

function completeTask(taskId) {
    completedTasks++;
    document.getElementById('task-progress').textContent = `Заданий выполнено: ${completedTasks} из 2`;
    if (completedTasks === 2) {
        showFinalGreeting();
    }
}

// Показ финального поздравления
function showFinalGreeting() {
    document.getElementById('tasks-section').style.display = 'none';
    document.getElementById('final-greeting').style.display = 'block';
}

// Инициализация игры
createHiddenObjects();
