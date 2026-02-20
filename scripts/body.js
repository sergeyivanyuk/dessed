// Скрипт для адаптивного меню
document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.querySelector('.menu-toggle')
	const body = document.body
	const menuOverlay = document.querySelector('.menu-overlay')
	const menuLinks = document.querySelectorAll('.menu-link')
	const header = document.querySelector('header')
	const mobileNavButtons = document.querySelectorAll('.mobile-nav-button')

	// Функция для изменения хеддера при скролле
	function handleScroll() {
		if (window.innerWidth <= 768) {
			if (window.scrollY > 50) {
				header.classList.add('scrolled')
			} else {
				header.classList.remove('scrolled')
			}
		}
	}

	// Открытие/закрытие меню
	function toggleMenu() {
		body.classList.toggle('menu-open')

		// Блокировка скролла
		if (body.classList.contains('menu-open')) {
			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
			document.body.style.overflow = ''
		}
	}

	menuToggle.addEventListener('click', toggleMenu)

	// Закрытие меню при клике на overlay
	menuOverlay.addEventListener('click', function () {
		if (body.classList.contains('menu-open')) {
			toggleMenu()
		}
	})

	// Закрытие меню при клике на ссылку (для мобильного меню)
	mobileNavButtons.forEach(link => {
		link.addEventListener('click', function () {
			if (body.classList.contains('menu-open')) {
				toggleMenu()
			}
		})
	})

	// Закрытие меню при изменении ориентации или размера экрана
	window.addEventListener('resize', function () {
		if (window.innerWidth > 768 && body.classList.contains('menu-open')) {
			toggleMenu()
		}

		// Сбрасываем стили скролла при изменении размера
		if (window.innerWidth > 768) {
			header.classList.remove('scrolled')
			document.querySelector('main').style.marginTop = '0'
		} else {
			document.querySelector('main').style.marginTop = '80px'
		}
	})

	// Обработчик скролла для фиксированного хеддера
	window.addEventListener('scroll', handleScroll)

	// Инициализация отступа для мобильных
	if (window.innerWidth <= 768) {
		document.querySelector('main').style.marginTop = '80px'
	}

	// Предотвращение скролла при открытом меню на мобильных
	document.addEventListener(
		'touchmove',
		function (e) {
			if (body.classList.contains('menu-open')) {
				e.preventDefault()
			}
		},
		{ passive: false }
	)

	// Плавная прокрутка к якорям
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const targetId = this.getAttribute('href')
			if (targetId === '#') return

			const targetElement = document.querySelector(targetId)
			if (targetElement) {
				const headerHeight = document.querySelector('header').offsetHeight
				const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				})
			}
		})
	})

	// Скрипт для прокрутки сервисных карточек
	document.querySelectorAll('.services-container').forEach(container => {
		const scrollElement = container.querySelector('.services-scroll')
		const leftBtn = container.querySelector('.left-btn')
		const rightBtn = container.querySelector('.right-btn')

		if (leftBtn && rightBtn) {
			leftBtn.addEventListener('click', () => {
				scrollElement.scrollBy({ left: -320, behavior: 'smooth' })
			})

			rightBtn.addEventListener('click', () => {
				scrollElement.scrollBy({ left: 320, behavior: 'smooth' })
			})
		}
	})

	// Функция для проверки необходимости прокрутки
	function checkScrollNeeded() {
		document.querySelectorAll('.services-container').forEach(container => {
			const scrollElement = container.querySelector('.services-scroll')
			const controls = container.querySelector('.scroll-controls')

			if (scrollElement && controls) {
				const containerWidth = scrollElement.clientWidth
				const contentWidth = scrollElement.scrollWidth

				if (contentWidth > containerWidth) {
					controls.style.display = 'flex'
					container.classList.add('has-scroll')
				} else {
					controls.style.display = 'none'
					container.classList.remove('has-scroll')
				}
			}
		})
	}

	// Проверяем при загрузке
	checkScrollNeeded()

	// Проверяем при изменении размера окна (с debounce)
	let resizeTimeout
	window.addEventListener('resize', function () {
		clearTimeout(resizeTimeout)
		resizeTimeout = setTimeout(checkScrollNeeded, 250)
	})

	// ResizeObserver для более точного отслеживания
	const resizeObserver = new ResizeObserver(entries => {
		entries.forEach(entry => {
			checkScrollNeeded()
		})
	})

	// Наблюдаем за всеми контейнерами услуг
	document.querySelectorAll('.services-scroll').forEach(scrollElement => {
		resizeObserver.observe(scrollElement)
	})
})
