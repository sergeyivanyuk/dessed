// Данные для модальных окон
const modalData = {

    'Фрезерные работы': {
        title: 'Фрезерные работы',
        image: './images/milling.jpg',
        description: 'Фрезерные работы – это высокоточный и универсальный метод обработки материалов, предлагающий широкий спектр преимуществ, которые делают его незаменимым в различных отраслях промышленности. У нас вы можете заказать высокоточную фрезерную обработку на станках с ЧПУ для решения задач любой сложности',
        features: [
            'Современное оборудование с ЧПУ, обеспечивающее высокую производительность',
            'Высокая точность обработки',
            'Возможность обработки сложных поверхностей',
            'Работа с черным и цветным металлом, а так же МДФ',
        ]
    },
    'Шлифовальные работы': {
        title: 'Шлифовальные работы',
        image: './images/services/Шлифовальне работы.jpg',
        description: 'Шлифование — это процесс, позволяющий добиться минимальной шероховатости поверхности и высочайшей точности размеров. Мы выполняем шлифовку металла для достижения идеальной геометрии и требуемой шероховатости',
        features: [
            'Обработка различных видов шлифовки: плоская, круглая и оптическая.',
            'Высокая точность и качество поверхности',
            'Обеспечение допуска формы и положения',
        ]
    },
    'Токарные работы': {
        title: 'Токарные работы',
        image: './images/3-2-min.jpg',
        description: 'От самых простых деталей до сложных компонентов. Токарная обработка предлагает уникальное сочетание преимуществ, делающих ее незаменимой во многих отраслях промышленности.',
        features: [
            'Изготовление деталей сложной формы',
            'Высокая точность и качество',
            'Возможность обработки внутренних и внешних поверхностей, нарезки резьбы.',
        ]
    },
    'Электроэрозионная обработка': {
        title: 'Электроэрозионная обработка',
        image: './images/services/электроэрозионная обработка.jpg',
        description: 'Электроэрозионная обработка — это уникальная технология, позволяющая работать с любыми токопроводящими материалами, независимо от их твердости.',
        features: [
            'Использование современного оборудования с ЧПУ',
            'Высокая точность обработки',
            'Практически любая конфигурация вырезов',
        ]
    },
    'Сверлильные работы': {
        title: 'Сверлильные работы',
        image: './images/services/сверлильные работы.JPG',
        description: 'Мы выполняем сверлильные работы любой сложности с применением технологии глубокого сверления, а так же зенкование и нарезание резьбы на станочном оборудовании.',
        features: [
            'Идеально ровные и чистые отверстия',
            'Высокая точность размеров',
            'Отсутствие деформаций и сколов',
        ]
    },
     'Полировка металла': {
        title: 'Полировка металла',
        image: './images/projects/Полировка.jpg',
        description: 'Мы готовы выполнить для вас полировку металлических поверхностей до зеркального блеска с сохранением защитных свойств.',
        features: [
            'Идеальный зеркальный блеск',
            'Защита от коррозии и загрязнений',
            'Обработка любых форм и контуров',
        ]
    },

   'Слесарные работы': {
        title: 'Слесарные работы',
        image: './images/present.jpg',
        description: 'Слесарные работы позволяют выполнять разнообразные задачи, начиная от ремонта и сборки мелких деталей до создания сложных конструкций. Это делает их незаменимыми в различных отраслях',
        features: [
            'Обеспечение точной подгонки деталей, сборки, ремонта, монтажа или демонтажа различных конструкций и механизмов',
            'Соблюдение размеров и технических требований',
            'Современное оборудование',
        ]
    },
       'Сварочные работы': {
        title: 'Сварочные работы',
        image: './images/services/Сварочные работы.jpg',
        description: 'Сварка представляет собой процесс получения неразъемного соединения металлов путем их местного сплавления. Она позволяет соединять детали самых разнообразных форм и размеров, создавая прочные и надежные конструкции',
        features: [
            'Высокое качество и контроль',
            'Работаем с разными материалами и видами сварки',
            'Создаем надежные неразъемные соединения',
        ]
    },


    'Изготовление деревянной тары': {
        title: 'Изготовление деревянной тары',
        image: './images/services/сборка щитов-ящики.jpg',
        description: 'Мы производим надежную деревянную тару любого размера - от компактных ящиков до крупногабаритной упаковочной тары. Каждое изделие создается с учетом особенностей вашего груза и требований к транспортировке',
        features: [
            'Полный цикл производства - от распила до сборки',
            'Использование качественной древесины',
            'Выполним любые объемы - от единичных ящиков до крупных партий',
        ]
    },

    'Услуги по изготовлению изделий из МДФ': {
        title: 'Услуги по изготовлению изделий из МДФ',
        image: './images/projects/МДФ3.jpg',
        description: 'Мы готовы предложить вам услуги по изготовлению технологической оснастки из МДФ для различных отраслей. Используем современные станки с ЧПУ для гарантии качества каждого изделия',
        features: [
            'Высокое качество материала',
            'Современное оборудование',
            'Обеспечиваем точность геометрии',
        ]
    },

    'Услуги по разработке конструкторской документации': {
        title: 'Услуги по разработке конструкторской документации',
        image: './images/services/photo_2026-02-13_11-52-37.jpg',
        description: 'От технического задания до готовых чертежей. Создадим полный пакет конструкторской документации для ваших проектов',
        features: [
            'Работаем с любыми отраслями промышленности',
            'Учитываем все ваши требования и пожелания, создавая конструкторскую документацию',
        ]
    },








    'Панели': {
        title: 'Панели из МДФ',
        image: './images/photo_2025-03-03_16-03-48.jpg',
        description: 'Производство декоративных и функциональных панелей из МДФ для мебели и интерьера. Качественные материалы и точное исполнение.',
        features: [
            'Различная толщина материала',
            'Фрезерованные узоры и орнаменты',
            'Ламинирование и покраска в любой цвет',
            'Точная резка по заданным размерам',
            'Декоративные элементы любой сложности',
            'Быстрые сроки изготовления'
        ]
    },
    'Мебельные фасады': {
        title: 'Мебельные фасады',
        image: './images/frez-fasad-title.jpg',
        description: 'Изготовление мебельных фасадов из МДФ по индивидуальным проектам. Современное оборудование и качественные материалы.',
        features: [
            'Индивидуальный дизайн под ваш проект',
            'Фрезеровка 3D-узоров высокой сложности',
            'Различные виды покрытий и отделок',
            'Установка ручек, петель и другой фурнитуры',
            'Современные технологии производства',
            'Конкурентные цены при высоком качестве'
        ]
    },

    // Деревянная тара
    'Ящики': {
        title: 'Деревянные ящики',
        image: './images/frez-fasad-title.jpg',
        description: 'Производство деревянной тары различных размеров и конфигураций для промышленных и коммерческих нужд. Надежность и функциональность.',
        features: [
            'Любые размеры под ваши требования',
            'Прочная и долговечная конструкция',
            'Натуральная экологичная древесина',
            'Сборка согласно техническому заданию',
            'Доставка и сборка на месте',
            'Экологически чистые материалы'
        ]
    },
    'Паллеты': {
        title: 'Паллеты деревянные',
        image: './images/IMG_8914.JPG',
        description: 'Изготовление качественных деревянных паллетов для складской и транспортной логистики. Соответствие всем стандартам.',
        features: [
            'Стандартные и нестандартные размеры',
            'Высокая грузоподъемность до 2000 кг',
            'Качественная просушенная древесина',
            'Полное соответствие ГОСТ и ТУ',
            'Большие объемы производства',
            'Доставка по всему региону'
        ]
    },
    'Упаковка': {
        title: 'Деревянная упаковка',
        image: './images/IMG_8914.JPG',
        description: 'Специализированная деревянная упаковка для оборудования и ценных грузов. Максимальная защита при транспортировке.',
        features: [
            'Индивидуальное проектирование под груз',
            'Надежная защита от повреждений',
            'Удобство погрузки и транспортировки',
            'Различные виды качественной древесины',
            'Амортизирующие элементы при необходимости',
            'Маркировка и пломбирование'
        ]
    },
    'Детали для авиации': {
        title: 'Детали для авиации',
        image: './images/IMG_8914.JPG',
        description: 'Высокоточное производство деталей для авиационной промышленности. Соответствие самым строгим стандартам качества и безопасности.',
        features: [
            'Сертифицированное производство',
            'Высокая точность до 0.001 мм',
            'Контроль качества на каждом этапе',
            'Использование авиационных материалов',
            'Полное соответствие ГОСТ РВ и ГОСТ Р',
            'Сопроводительная документация'
        ]
    }
};

// Инициализация модальных окон
document.addEventListener('DOMContentLoaded', function() {
    initModals();
});

function initModals() {
    // Создаем HTML для модального окна
    const modalHTML = `
        <div id="serviceModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modalTitle">Заголовок</h3>
                    <button class="close-modal" aria-label="Закрыть окно"><span>&times;</span></button>
                </div>
                <div class="modal-body">
                    <img id="modalImage" src="" alt="" class="modal-image">
                    <p id="modalDescription" class="modal-description"></p>
                    <div class="modal-features">
                        <h4>Ключевые преимущества</h4>
                        <ul id="modalFeatures"></ul>
                    </div>
                    <div class="modal-contact modal-features">
                        <h4>Готовы обсудить проект?</h4>
                        <ul id="modalFeatures">
                            <li>+7 (927) 818-55-35</li>
                            <li>dessed.d@yandex.ru</li>
                            <li>Пн-Пт: 9:00 - 18:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Добавляем модальное окно в body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Назначаем обработчики событий для карточек
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Проверяем, не был ли клик по кнопке прокрутки
            if (!e.target.closest('.scroll-btn')) {
                const title = this.querySelector('h3').textContent;
                openModal(title);
            }
        });

        // Добавляем эффект при наведении
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 89, 164, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // Обработчики для модального окна
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalContent = modal.querySelector('.modal-content');

    // Закрытие по крестику
    closeBtn.addEventListener('click', closeModal);

    // Закрытие по клику вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Предотвращение закрытия при клике на контент
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function openModal(serviceName) {
    const modal = document.getElementById('serviceModal');
    const data = modalData[serviceName];

    if (!data) {
        console.warn(`No data found for service: ${serviceName}`);
        return;
    }

    // Заполняем модальное окно данными
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.title;
    
    // Специальная обработка для изображения глубокого сверления
    if (data.title === "Глубокое сверление") {
        document.getElementById('modalImage').style.objectFit = 'cover';
        document.getElementById('modalImage').style.objectPosition = 'top';
    } else {
        document.getElementById('modalImage').style.objectFit = '';
        document.getElementById('modalImage').style.objectPosition = '';
    }
    
    document.getElementById('modalDescription').textContent = data.description;

    // Заполняем список преимуществ
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Показываем модальное окно
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
    
    // Сбрасываем скролл на верх
    modal.querySelector('.modal-body').scrollTop = 0;

    // Добавляем класс для анимации
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    
    // Убираем класс для анимации
    modal.classList.remove('show');
    
    // Ждем завершения анимации и скрываем модальное окно
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }, 300);
}

// Функция для обновления данных
function updateModalData(newData) {
    Object.assign(modalData, newData);
}

// Автоматическая подгонка высоты изображения для мобильных
function optimizeModalForMobile() {
    const modalImage = document.getElementById('modalImage');
    if (window.innerWidth <= 768 && modalImage) {
        modalImage.style.maxHeight = '200px';
        modalImage.style.objectPosition = 'center center';
    }
}

// Слушаем изменения размера окна
window.addEventListener('resize', optimizeModalForMobile);

// Экспорт функций для использования в других скриптах
window.ModalManager = {
    openModal,
    closeModal,
    updateModalData
};