document.addEventListener('DOMContentLoaded', function() {
    const videoPlaylist = [
        { 
            mp4: "./videos/IMG_5071.MP4", 
            webm: "./videos/IMG_5071.webm" 
        },
        { 
            mp4: "./videos/IMG_5277.MP4", 
            webm: "./videos/IMG_5277.webm" 
        },
        // TODO: Добавить другие видео
    ];
    
    const videoElement = document.getElementById('bokehPlaylist');
    let currentVideoIndex = 0;
    let isFirstPlay = true;
    let timeUpdateHandlerAdded = false; // Флаг для отслеживания добавления обработчика

    function setupTimeUpdateListener() {
        if (timeUpdateHandlerAdded) return;
        
        const secondsBeforeEnd = 1.5; // секунды до конца
        let eventFired = false;

        videoElement.addEventListener('timeupdate', function timeUpdateHandler() {
            if (videoElement.duration > 0 && !eventFired) {
                const timeRemaining = videoElement.duration - videoElement.currentTime;
                
                if (timeRemaining <= secondsBeforeEnd) {
                    // Удаляем этот обработчик, чтобы избежать повторного срабатывания
                    videoElement.removeEventListener('timeupdate', timeUpdateHandler);
                    timeUpdateHandlerAdded = false;
                    eventFired = true;
                    
                    // Запускаем подготовку следующего видео
                    prepareNextVideo();
                }
            }
        });
        
        timeUpdateHandlerAdded = true;
    }

    function prepareNextVideo() {
        if (!isFirstPlay) {
            // Добавляем класс для fade-out анимации
            videoElement.classList.add('fade-out');
            
            // Ждем завершения анимации перед сменой видео
            videoElement.addEventListener('transitionend', function transitionEnd() {
                videoElement.removeEventListener('transitionend', transitionEnd);
                actuallyChangeVideo();
            });
        } else {
            actuallyChangeVideo();
            isFirstPlay = false;
        }
    }

    function actuallyChangeVideo() {
        // Очистка предыдущих источников
        while (videoElement.firstChild) {
            videoElement.removeChild(videoElement.firstChild);
        }
        
        // Добавление источников в разных форматах
        const videoSources = videoPlaylist[currentVideoIndex];
        
        if (videoSources.webm) {
            const sourceWebm = document.createElement('source');
            sourceWebm.src = videoSources.webm;
            sourceWebm.type = 'video/webm';
            videoElement.appendChild(sourceWebm);
        }
        
        if (videoSources.mp4) {
            const sourceMp4 = document.createElement('source');
            sourceMp4.src = videoSources.mp4;
            sourceMp4.type = 'video/mp4';
            videoElement.appendChild(sourceMp4);
        }
        
        videoElement.onloadedmetadata = function() {
            // Убираем класс fade-out для fade-in эффекта
            videoElement.classList.remove('fade-out');
            
            // Добавляем обработчик для отслеживания времени
            setupTimeUpdateListener();
            
            videoElement.play().catch(error => {
                console.error("Ошибка воспроизведения:", error);
                currentVideoIndex++;
                prepareNextVideo();
            });
        };
        
        videoElement.onerror = function() {
            console.error("Ошибка загрузки видео:", currentVideoIndex);
            currentVideoIndex++;
            prepareNextVideo();
        };
        
        videoElement.load();
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
    }
    
    // Оставляем обработчик ended как fallback
    videoElement.addEventListener('ended', function() {
        console.log("Видео завершилось, запускаем следующее...");
        prepareNextVideo();
    });
    
    // Начинаем воспроизведение
    prepareNextVideo();
});