'use strict'; // строгий стиль

const modalAdd = document.querySelector('.modal__add'),                      //окно для подачи объявления
      addAd = document.querySelector('.add__ad'),                            //кнопка "подать объявление"
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),         //кнопка "отправить"
      modalSubmit = document.querySelector('.modal__submit'),                //форма отправки
      catalog = document.querySelector ('.catalog'),                         //список карточек товара
      modalItem = document.querySelector ('.modal__item');                   //модальное окно для карточки товара

      const closeModal =  event => {                         // Переменная-функция event                    
        const target = event.target;                      //создание константы target = элемент, на котором произошло событие
        
        if (target.closest('.modal__close') ||              //если событие произошло на элементе с кл. modal__close
           target === modalAdd ||                           //или событие произошло в modalAdd
           target === modalItem) {                          //или событие произошло в modalItem
           modalAdd.classList.add('hide');                  //добавляем класс hide modalAdd (оно закрывается)
           modalItem.classList.add('hide');                 //добавляем класс hide modalItem (оно закрывается) 
           modalSubmit.reset();                             //перезапускаем форму modal__submit
        } 
        
      };


addAd.addEventListener('click', ()=> {                 //метод отслеживает событие "нажатие на кнопку" addAd,
  modalAdd.classList.remove('hide');              // убираем клас hide у modalAdd, модальное окно отправки открывается
  modalBtnSubmit.disabled = true;                         //блокируем кнопку отправки
  
}); //открываем модальное окно с отправкой

modalAdd.addEventListener('click', closeModal);  
modalItem.addEventListener('click', closeModal);
 
catalog.addEventListener('click', event => {
const target = event.target; //клик в переменной catalog записывается в переменную target

if(target.closest('li.card')) {
  modalItem.classList.remove('hide');

};

});
