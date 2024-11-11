function openTab(tabId) {
    // Ховаємо весь вміст вкладок
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Знімаємо активний клас із усіх кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Відображаємо обрану вкладку і додаємо активний клас до відповідної кнопки
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Показуємо першу вкладку за замовчуванням
document.addEventListener("DOMContentLoaded", () => {
    openTab('realistic');
});
