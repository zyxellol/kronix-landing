// Очікуємо повного завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    
    // Знаходимо кнопку бургера та саме меню в документі
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav-menu');
    // Знаходимо всі посилання всередині меню
    const menuLinks = document.querySelectorAll('.nav-menu a');

    // Функція, яка відкриває або закриває меню
    function toggleMenu() {
        menu.classList.toggle('active');  // Виїжджає/ховається меню
        burger.classList.toggle('open'); // Анімується бургер у хрестик
    }

    // Слухаємо клік по бургеру
    burger.addEventListener('click', toggleMenu);

    // Закриваємо меню, якщо користувач клікнув на будь-яке посилання (щоб перейти до секції)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            burger.classList.remove('open');
        });
    });
});