 // --- МОДАЛЬНЕ ВІКНО ТА ВАЛІДАЦІЯ ---
    const modal = document.getElementById('booking-modal');
    const openModalBtn = document.querySelector('.btn-primary'); // Наша кнопка Book A Meeting
    const closeModalBtn = document.querySelector('.close-modal');
    const form = document.getElementById('meeting-form');

    // Відкрити вікно
    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Скасовуємо стандартний перехід по посиланню-якорю
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    });

    // Закрити вікно при кліку на хрестик
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    // Закрити вікно, якщо клікнули на темний фон навколо форми
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    // Валідація форми при відправці
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Зупиняємо перезавантаження сторінки
        
        const nameInput = document.getElementById('user-name');
        const emailInput = document.getElementById('user-email');
        let isFormValid = true;

        // Перевірка імені (мінімум 2 символи)
        if (nameInput.value.trim().length < 2) {
            nameInput.parentElement.classList.add('invalid');
            isFormValid = false;
        } else {
            nameInput.parentElement.classList.remove('invalid');
        }

        // Перевірка Email за допомогою регулярного виразу
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.parentElement.classList.add('invalid');
            isFormValid = false;
        } else {
            emailInput.parentElement.classList.remove('invalid');
        }

        // Якщо все правильно — імітуємо успішну відправку
        if (isFormValid) {
            alert(`Дякуємо, ${nameInput.value}! Заявку успішно створено (імітація бенкенду).`);
            form.reset(); // Очищаємо поля
            modal.style.display = 'none'; // Ховаємо вікно
        }
    });