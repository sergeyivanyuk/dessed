class Carousel {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 3;
                this.autoPlayInterval = null;
                this.autoPlayDelay = 5000;
                this.isAutoPlay = false;
                this.isUserInteracting = false;

                this.elements = {
                    container: document.querySelector('.carousel-container'),
                    slides: document.querySelectorAll('.carousel-slide'),
                    dots: document.querySelectorAll('.nav-dot'),
                    prevBtn: document.querySelector('.nav-arrow.prev'),
                    nextBtn: document.querySelector('.nav-arrow.next'),
                    counterCurrent: document.querySelector('.current-slide'),
                    counterTotal: document.querySelector('.total-slides'),
                    loading: document.querySelector('.loading-progress'),
                    carousel: document.querySelector('.about-carousel')
                };

                this.init();
            }

            init() {
                this.elements.counterTotal.textContent = this.totalSlides;
                this.updateCounter();

                // События для кнопок
                this.elements.prevBtn.addEventListener('click', () => {
                    this.isUserInteracting = true;
                    this.prev();
                    this.resetAutoPlay();
                });

                this.elements.nextBtn.addEventListener('click', () => {
                    this.isUserInteracting = true;
                    this.next();
                    this.resetAutoPlay();
                });

                // События для точек
                this.elements.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.isUserInteracting = true;
                        this.goToSlide(index);
                        this.resetAutoPlay();
                    });
                });

                // Свайп для мобильных устройств
                this.setupSwipe();

                // Автовоспроизведение
                this.startAutoPlay();

                // Пауза при наведении
                this.elements.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
                this.elements.carousel.addEventListener('mouseleave', () => {
                    if (!this.isUserInteracting) {
                        this.startAutoPlay();
                    }
                });

                // Сброс флага взаимодействия через некоторое время
                setInterval(() => {
                    this.isUserInteracting = false;
                }, 10000);
            }

            goToSlide(index) {
                if (index < 0) index = this.totalSlides - 1;
                if (index >= this.totalSlides) index = 0;

                // Обновляем активный слайд
                this.elements.slides[this.currentSlide].classList.remove('slide-active');
                this.elements.slides[index].classList.add('slide-active');

                // Обновляем точки навигации
                this.elements.dots[this.currentSlide].classList.remove('active');
                this.elements.dots[index].classList.add('active');

                // Перемещаем карусель
                this.elements.container.style.transform = `translateX(-${index * 12.5}%)`;

                this.currentSlide = index;
                this.updateCounter();
            }

            next() {
                this.goToSlide(this.currentSlide + 1);
            }

            prev() {
                this.goToSlide(this.currentSlide - 1);
            }

            updateCounter() {
                this.elements.counterCurrent.textContent = this.currentSlide + 1;
            }

            setupSwipe() {
                let startX = 0;
                let endX = 0;

                this.elements.carousel.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    this.isUserInteracting = true;
                });

                this.elements.carousel.addEventListener('touchmove', (e) => {
                    endX = e.touches[0].clientX;
                });

                this.elements.carousel.addEventListener('touchend', () => {
                    const diff = startX - endX;
                    const swipeThreshold = 50;

                    if (Math.abs(diff) > swipeThreshold) {
                        if (diff > 0) {
                            this.next();
                        } else {
                            this.prev();
                        }
                        this.resetAutoPlay();
                    }
                    this.isUserInteracting = true;
                });
            }

            startAutoPlay() {
                if (!this.isAutoPlay || this.isUserInteracting) return;

                this.elements.carousel.classList.add('auto-play-active');
                this.elements.loading.style.width = '0%';
                
                setTimeout(() => {
                    this.elements.loading.style.width = '100%';
                }, 10);

                this.autoPlayInterval = setInterval(() => {
                    if (!this.isUserInteracting) {
                        this.next();
                    }
                }, this.autoPlayDelay);
            }

            pauseAutoPlay() {
                this.isAutoPlay = false;
                this.elements.carousel.classList.remove('auto-play-active');
                clearInterval(this.autoPlayInterval);
            }

            resetAutoPlay() {
                this.pauseAutoPlay();
                this.elements.loading.style.width = '0%';
                
                setTimeout(() => {
                    this.isAutoPlay = true;
                    if (!this.isUserInteracting) {
                        this.startAutoPlay();
                    }
                }, 1000);
            }
        }

        // Инициализация карусели после загрузки DOM
        document.addEventListener('DOMContentLoaded', () => {
            new Carousel();
        });