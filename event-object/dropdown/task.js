let dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
  let valueElement = dropdown.querySelector('.dropdown__value');
  let listElement = dropdown.querySelector('.dropdown__list');
  let items = dropdown.querySelectorAll('.dropdown__item');

  // Клик по кнопке - открыть/закрыть список
  valueElement.addEventListener('click', function () {
    // Закрываем все остальные списки
    document.querySelectorAll('.dropdown__list_active').forEach(list => {
      list.classList.remove('dropdown__list_active');
    });

    // Открываем/закрываем текущий список
    listElement.classList.toggle('dropdown__list_active');
  });

  // Клик по пункту меню
  items.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Запрещаем переход по ссылке

      // Берем текст из ссылки
      const newValue = this.querySelector('.dropdown__link').textContent;

      // Меняем значение на кнопке
      valueElement.textContent = newValue;

      // Закрываем список
      listElement.classList.remove('dropdown__list_active');
    });
  });
});

// Закрываем все списки при клике вне
document.addEventListener('click', function (event) {
  // Проверяем, кликнули ли мы НЕ по dropdown
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown__list_active').forEach(list => {
      list.classList.remove('dropdown__list_active');
    });
  }
});