
//попапы//

const popupBuy = document.querySelector("#popup");

      var buttonsBuy = document.querySelectorAll('#btn-buy');
      buttonsBuy.forEach(function(buttonBuy) {   
        buttonBuy.addEventListener('click', function(event) {
          
            popup.classList.add("_open");
            document.body.classList.add("_lock");

          const popupCancel = popupBuy.querySelector(".popup__cancel");
          
          if (popupCancel) {
            popupCancel.addEventListener("click", function () {
              popup.classList.remove("_open");
              document.body.classList.remove("_lock");
            });
          }
        });
      });
      if (popup) {
        popup.addEventListener("click", function (e) {
          if (!e.target.closest(".popup__content")) {
            popup.classList.remove("_open");
            document.body.classList.remove("_lock");
          }
        });
      }
const popupApply = document.querySelector("#popup-ok");
if (popupApply) {
  popupApply.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupApply.classList.remove("_open");
      document.body.classList.remove("_lock");
    }
  });
  const popupCancel = popupApply.querySelector(".popup__cancel");
          
  if (popupCancel) {
    popupCancel.addEventListener("click", function () {
      popupApply.classList.remove("_open");
      document.body.classList.remove("_lock");
    });
  }
}
const popupError = document.querySelector("#popup-error");
if (popupError) {
  popupError.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupError.classList.remove("_open");
      document.body.classList.remove("_lock");
    }
  });
  const popupCancel = popupError.querySelector(".popup__cancel");
          
  if (popupCancel) {
    popupCancel.addEventListener("click", function () {
      popupError.classList.remove("_open");
      document.body.classList.remove("_lock");
    });
  }
}

const popupGift = document.querySelector("#popup-gift");

var buttonsGift = document.querySelectorAll('#btn-gift');
buttonsGift.forEach(function(buttonGift) {   
  buttonGift.addEventListener('click', function(event) {
    
      popupGift.classList.add("_open");
      document.body.classList.add("_lock");

    const popupCancel = popupGift.querySelector(".popup__cancel");
    
    if (popupCancel) {
      popupCancel.addEventListener("click", function () {
        popupGift.classList.remove("_open");
        document.body.classList.remove("_lock");
      });
    }
  });
});
if (popupGift) {
  popupGift.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupGift.classList.remove("_open");
      document.body.classList.remove("_lock");
    }
  });
}



//форма//

  var forms = document.querySelectorAll('.myForm');

  if(forms){
    forms.forEach(function(form) {
      Inputmask("+7 (999) 999-99-99").mask("#tel");
  
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем обычную отправку формы

        var telInput = form.querySelector('#tel');
        var telInputInner = form.querySelector('.popup__content-tab-content-form-row-input-inner-tel');
        var telInputErr = telInputInner.querySelector('.popup__content-tab-content-form-row-input-error');
        var telInputErrMob = telInputInner.querySelector('.popup__content-tab-content-form-row-input-error-mobile');
        
        // var numericValue = telInput.value.replace(/\D/g, ''); // Удаляем все нецифровые символы

        
        // Проверяем, пустое ли поле для телефона
        if (telInput.value.trim() === '') {
            telInput.classList.add('popup__content-tab-content-form-row-input-border-red');
            if(telInputErr){
              telInputErr.classList.add('popup__content-tab-content-form-row-input-error-active');
            }
            if(telInputErrMob){
              telInputErrMob.classList.add('popup__content-tab-content-form-row-input-error-active');
            }
     
        } else {
          telInput.classList.remove('popup__content-tab-content-form-row-input-border-red');
          if(telInputErr){
            telInputErr.classList.remove('popup__content-tab-content-form-row-input-error-active');
          }
          if(telInputErrMob){
            telInputErrMob.classList.remove('popup__content-tab-content-form-row-input-error-active');
          }
        }

      //   if (numericValue.length > 0 && numericValue.length < 11) {
      //     telInput.classList.add('popup__content-tab-content-form-row-input-border-red');
      //     if(telInputErr){
      //       telInputErr.classList.add('popup__content-tab-content-form-row-input-error-active');
      //     }
      //     if(telInputErrMob){
      //       telInputErrMob.classList.add('popup__content-tab-content-form-row-input-error-active');
      //     }

      //  } else {
      //   telInput.classList.remove('popup__content-tab-content-form-row-input-border-red');
      //   if(telInputErr){
      //     telInputErr.classList.remove('popup__content-tab-content-form-row-input-error-active');
      //   }
      //   if(telInputErrMob){
      //     telInputErrMob.classList.remove('popup__content-tab-content-form-row-input-error-active');
      //   }
      //  }


 
  
        telInput.addEventListener("input", function() {
          telInput.classList.remove('popup__content-tab-content-form-row-input-border-red');
          if(telInputErr){
            telInputErr.classList.remove('popup__content-tab-content-form-row-input-error-active');
          }
          if(telInputErrMob){
            telInputErrMob.classList.remove('popup__content-tab-content-form-row-input-error-active');
          }
         });
         const popupApply = document.querySelector("#popup-ok");
         var errors = form.querySelectorAll('.popup__content-tab-content-form-row-input-error-active');
         if (errors.length === 0) {
             if(popup){
              popup.classList.remove("_open");
              popupApply.classList.add("_open")
             }
             if(popupGift){
              popupGift.classList.remove("_open");
              popupApply.classList.add("_open")

            
             }
     
             
         }
         


        /*var formData = new FormData(form);
        
        // Выполняем AJAX-запрос
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'send.php'); // Укажите здесь URL обработчика на сервере
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        
        xhr.onload = function() {
          if (xhr.status === 200) {
            // Обработка успешного ответа
            alert('Форма успешно отправлена!');
            form.reset(); // Очистка формы
          } else {
            // Обработка ошибки
            alert('Ошибка при отправке формы.');
          }
        };
        

        xhr.send(formData); */
        // else{
        //   if(popup){
        //     popup.classList.remove("_open");
        //     popupError.classList.add("_open")
        //    }
        //    if(popupGift){
        //     popupGift.classList.remove("_open");
        //     popupError.classList.add("_open")

        //    }

        // }
      });
    });
  }


//карты






const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
  const tabs = popup.querySelectorAll('.popup__content-tab');
  const tabContents = popup.querySelectorAll('.popup__content-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('popup__content-tab-active'));
      tabContents.forEach(content => content.classList.remove('popup__content-tab-content-active'));

      tab.classList.add('popup__content-tab-active');
      const tabId = tab.getAttribute('data-tab');
      const tabContent = popup.querySelector(`#${tabId}`);
      tabContent.classList.add('popup__content-tab-content-active');
    });
  });
});



//мобильное меню//
const menuIcon = document.querySelector(".menu__icon");
const headMenu = document.querySelector(".header__nav");
const menuItems = document.querySelectorAll(".header__nav ul li a");
if(menuIcon){
  menuIcon.addEventListener("click", function (e){
    menuIcon.classList.toggle("_active");
    headMenu.classList.toggle("_actived");
    document.body.classList.toggle("_lock");
 });
 menuItems.forEach(function (item) {
 item.addEventListener("click", function (e){
    menuIcon.classList.remove("_active");
   headMenu.classList.remove("_actived");
    document.body.classList.remove("_lock");
 });
  });
    // Добавляем обработчик клика на весь документ
    document.addEventListener("click", function (e) {
      // Проверяем, был ли клик вне меню и иконки
      if (!menuIcon.contains(e.target) && !headMenu.contains(e.target)) {
        menuIcon.classList.remove("_active");
        headMenu.classList.remove("_actived");
      }
    });
 
}



const SwipersServices = document.querySelectorAll(".section__services-swiper");
  if (SwipersServices){
    SwipersServices.forEach(function (SwiperServices) {
      const swiper = new Swiper(SwiperServices, {
          slidesPerView: 'auto',
          spaceBetween: 0,
          navigation: {
            nextEl: ".section__services-swiper-nav-next",
            prevEl: ".section__services-swiper-nav-prev",
          },

          speed: 1800, // Укажите желаемую скорость в миллисекундах
          mousewheel: false,
          grabCursor: false,
          autoplay:{
            delay:3500,
          }, 

        loop:false,
        on: {
          init() {
            this.el.addEventListener('mouseenter', () => {
              this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
              this.autoplay.start();
            });
          }
        },
      });
  });
}

// const sectionHow = document.querySelector('.section__how');
// if(sectionHow){
//   let hasClassSwapped = false; // Флаг для отслеживания изменения классов

//   // Функция для проверки и изменения классов в зависимости от ширины экрана
//   function adjustSectionHowClasses() {
//     const sectionHow = document.querySelector('.section__how');
//     const sectionBlack = sectionHow.querySelector('.section__black');
//     const sectionWhite = sectionHow.querySelector('.section__white');
  
//     // Получаем текущую ширину экрана
//     const screenWidth = window.innerWidth;
  
//     // Условие для изменения классов при достижении 1024px
//     if (screenWidth <= 1024 && !hasClassSwapped) {
//       if(sectionBlack){
//         sectionBlack.classList.remove('section__black');
//         sectionBlack.classList.add('section__white');
//       }

//       if(sectionWhite){
//       sectionWhite.classList.remove('section__white');
//       sectionWhite.classList.add('section__black');
//     }

//       hasClassSwapped = true; // Устанавливаем флаг в true, чтобы предотвратить повторное изменение классов
//     } else if (screenWidth > 1024 && hasClassSwapped) {
//       // Если ширина больше 1024px и классы были изменены, вернуть классы к начальному состоянию
//       sectionBlack.classList.remove('section__white');
//       sectionBlack.classList.add('section__black');
  
//       sectionWhite.classList.remove('section__black');
//       sectionWhite.classList.add('section__white');
  
//       hasClassSwapped = false; // Устанавливаем флаг в false, чтобы разрешить изменение классов при увеличении экрана
//     }
//   }
  
//   // Вызываем функцию при загрузке страницы и при изменении размера окна
//   window.addEventListener('load', adjustSectionHowClasses);
//   window.addEventListener('resize', adjustSectionHowClasses);
  
//   // Дополнительно вызываем функцию после загрузки страницы, чтобы настроить классы в начальном состоянии
//   adjustSectionHowClasses();
  
// }



window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");

  // Проверяем, прокрутилась ли страница более чем на 50px
  if (window.scrollY > 50) {
      header.classList.add("header__active");
  } else {
      header.classList.remove("header__active");
  }
});



const SwipersSlider = document.querySelectorAll(".section__slider");
  if (SwipersSlider){
    SwipersSlider.forEach(function (SwiperSlider) {
      const swiper = new Swiper(SwiperSlider, {
          slidesPerView: 1,
          spaceBetween: 0,

          speed: 1200, // Укажите желаемую скорость в миллисекундах
          mousewheel: false,
          grabCursor: false,
          autoplay:{
            delay:3500,
          }, 
          pagination: {
            el: SwiperSlider.querySelector(".swiper-pagination"),
            clickable: true,
          },
        loop:false,
        on: {
          init() {
            this.el.addEventListener('mouseenter', () => {
              this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
              this.autoplay.start();
            });
          }
        },
      });
  });
}

const formChoose = document.querySelector('.section__bron-row');
if(formChoose){
  $( function() {
    $( "#dateinputstart" ).datepicker();
  } );
  $( function() {
    $( "#dateinputend" ).datepicker();
  } );
  
  $(document).ready(function() {
    $('#dateinputstart').inputmask('99/99/9999', { placeholder: 'мм/дд/гггг' });
  });
  $(document).ready(function() {
    $('#dateinputend').inputmask('99/99/9999', { placeholder: 'мм/дд/гггг' });
  });
  
}



// Получение всех кастомных выпадающих селектов на странице
const customSelects = document.querySelectorAll('.custom-select');
if(customSelects){
// Обработка каждого кастомного селекта
customSelects.forEach(function(customSelect) {
  const selectSelected = customSelect.querySelector('.select-selected');
  const selectItems = customSelect.querySelector('.select-items');
  const selectOptions = selectItems.querySelectorAll('.select-item');

  // При клике на выбранный элемент показать/скрыть опции
  selectSelected.addEventListener('click', function() {
    selectItems.classList.toggle('show');
    selectSelected.classList.add('select-selected-active');
    
  });

  // При клике на опцию обновить выбранный элемент и скрыть опции
  selectOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const value = option.dataset.value;
      selectSelected.textContent = option.textContent;
      selectItems.classList.remove('show');
      // Выполните нужные действия при выборе опции (например, отправка формы или обновление данных)
      console.log('Выбрана опция: ' + value);
    });
  });

  // Закрыть опции при клике вне выпадающего селекта
  document.addEventListener('click', function(event) {
    if (!customSelect.contains(event.target)) {
      selectItems.classList.remove('show');
    }
  });
});
}

// Получаем все элементы инструкторов
const instructors = document.querySelectorAll('.section__bron-instruktors-block-instruktor');
if(instructors){
// Добавляем обработчик события клика для каждого инструктора
instructors.forEach((instructor) => {
  instructor.addEventListener('click', () => {
      // Удаляем класс section__bron-instruktors-block-instruktor-active у всех инструкторов
      instructors.forEach((i) => {
          i.classList.remove('section__bron-instruktors-block-instruktor-active');
      });

      // Добавляем класс section__bron-instruktors-block-instruktor-active выбранному инструктору
      instructor.classList.add('section__bron-instruktors-block-instruktor-active');
  });
});
}


// Получаем все элементы временных слотов
const timeSlots = document.querySelectorAll('.section__bron-instruktors-block-time');
if(timeSlots){
// Добавляем обработчик события клика для каждого временного слота
timeSlots.forEach((timeSlot) => {
  timeSlot.addEventListener('click', () => {
      // Переключаем класс section__bron-instruktors-block-time-active для выбранного временного слота
      timeSlot.classList.toggle('section__bron-instruktors-block-time-active');
  });
});
}







const amounts = document.querySelectorAll('.popup__content-tab-content-form-choose-item');
if(amounts){

amounts.forEach((amount) => {
  amount.addEventListener('click', () => {

      amounts.forEach((i) => {
          i.classList.remove('popup__content-tab-content-form-choose-item-active');
      });


      amount.classList.add('popup__content-tab-content-form-choose-item-active');
  });
});
}


const wrapMap = document.querySelector('#wrapMap');
if(wrapMap){
    // создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
    var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
    // вписываем нужный нам текст внутрь элемента
    mapTitle.textContent = 'Для активации карты нажмите по ней';
    // добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
    wrapMap.appendChild(mapTitle);
    // по клику на карту
    wrapMap.onclick = function() {
        // убираем атрибут "style", в котором прописано свойство "pointer-events"
        this.children[0].removeAttribute('style');
        // удаляем элемент с интерактивной подсказкой
        mapTitle.parentElement.removeChild(mapTitle);
    }
    // по движению мыши в области карты
    wrapMap.onmousemove = function(event) {
        // показываем подсказку
        mapTitle.style.display = 'block';
        // двигаем подсказку по области карты вместе с мышкой пользователя
        if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
        if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
    }
    // при уходе указателя мыши с области карты
    wrapMap.onmouseleave = function() {
        // прячем подсказку
        mapTitle.style.display = 'none';
    }
}

