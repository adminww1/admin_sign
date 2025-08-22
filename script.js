document.addEventListener('DOMContentLoaded', function() {
    let gamesButton = document.querySelector('.tablinks.games-icon');
    openTab(new Event('click'), 'Games', gamesButton);
    showSlides(slideIndex);
    
    // Улучшенная функция создания звезд
    createEnhancedStars();
    
    // Добавление эффекта нажатия на все кнопки
    addButtonClickEffects();
});


const translations = {
    en: {
        gamePickerTitle: "GAME PICKER",
        detectButton: "Detect device",
        startButton: "Start",
        game1Title: "Mines",
        game1Button: "Open",
        game2Title: "Mines Spribe",
        game2Button: "Open",
        game3Title: "Rocket Queen",
        game3Button: "Open",
        game4Button: "Open",

        game5Button: "Open",

        game6Button: "Open",

        game7Button: "Open",

        game8Button: "Open",

        game9Button: "Open",
        game10Button: "Open",
        game11Button: "Open",
        game12Button: "Open",
        game13Button: "Open",
        telegramButton: "Go to telegram (RU)",
        telegramButton2: "Go to telegram (EN)"
    },
    ru: {
        gamePickerTitle: "ВЫБОР ИГР",
        detectButton: "Определить устройство",
        startButton: "Начать",
        game1Title: "Mines",
        game1Button: "Открыть",
        game2Title: "Mines Spibe",
        game2Button: "Открыть",
        game3Title: "Rocket Queen",
        game3Button: "Открыть",
        game4Button: "Открыть",

        game5Button: "Открыть",

        game6Button: "Открыть",

        game7Button: "Открыть",

        game8Button: "Открыть",

        game9Button: "Открыть",
        game10Button: "Открыть",
        game11Button: "Открыть",
        game12Button: "Открыть",
        game13Button: "Открыть",
        telegramButton: "Перейти в телеграм (RU)",
        telegramButton2: "Перейти в телеграм (EN)"
    },
    hi: {
        gamePickerTitle: "गेम पिकर",
        detectButton: "डिवाइस का पता लगाएं",
        startButton: "शुरू करें",
        game1Title: "Mines",
        game1Button: "खोलें",
        game2Title: "Mines Spibe",
        game2Button: "खोलें",
        game3Title: "Rocket Queen",
        game3Button: "खोलें",

        game4Button: "खोलें",

        game5Button: "खोलें",

        game6Button: "खोलें",

        game7Button: "खोलें",

        game8Button: "खोलें",

        game9Button: "खोलें",
        game10Button: "खोलें",
        game11Button: "खोलें",
        game12Button: "खोलें",
        game13Button: "खोलें",
        telegramButton: "टेलीग्राम पर जाएं (RU)",
        telegramButton2: "टेलीग्राम पर जाएं (EN)"
    },
    br: {
        gamePickerTitle: "SELETOR DE JOGOS",
        detectButton: "Detectar dispositivo",
        startButton: "Iniciar",
        game1Title: "Mines",
        game1Button: "Abrir",
        game2Title: "Mines Spibe",
        game2Button: "Abrir",
        game3Title: "Rocket Queen",
        game3Button: "Abrir",

        game4Button: "Abrir",
 
        game5Button: "Abrir",
 
        game6Button: "Abrir",
 
        game7Button: "Abrir",

        game8Button: "Abrir",

        game9Button: "Abrir",
        game10Button: "Abrir",
        game11Button: "Abrir",
        game12Button: "Abrir",
        game13Button: "Abrir",
        telegramButton: "Ir para o Telegram (RU)",
        telegramButton2: "Ir para o Telegram (EN)"
    },
    es: {
        gamePickerTitle: "SELECCIONADOR DE JUEGOS",
        detectButton: "Detectar dispositivo",
        startButton: "Iniciar",
        game1Title: "Mines",
        game1Button: "Abrir",
        game2Title: "Mines Spibe",
        game2Button: "Abrir",
        game3Title: "Rocket Queen",
        game3Button: "Abrir",

        game4Button: "Abrir",

        game5Button: "Abrir",

        game6Button: "Abrir",

        game7Button: "Abrir",

        game8Button: "Abrir",

        game9Button: "Abrir",
        game10Button: "Abrir",
        game11Button: "Abrir",
        game12Button: "Abrir",
        game13Button: "Abrir",
        telegramButton: "Ir a Telegram (RU)",
        telegramButton2: "Ir a Telegram (EN)"
    },
    uz: {
        gamePickerTitle: "O'YIN TANLOVCHI",
        detectButton: "Qurilmani aniqlash",
        startButton: "Boshlash",
        game1Title: "Mines",
        game1Button: "Ochish",
        game2Title: "Mines Spibe",
        game2Button: "Ochish",
        game3Title: "Rocket Queen",
        game3Button: "Ochish",

        game4Button: "Ochish",

        game5Button: "Ochish",

        game6Button: "Ochish",

        game7Button: "Ochish",

        game8Button: "Ochish",
 
        game9Button: "Ochish",
        game10Button: "Ochish",
        game11Button: "Ochish",
        game12Button: "Ochish",
        game13Button: "Ochish",
        telegramButton: "Telegramga o'tish (RU)",
        telegramButton2: "Telegramga o'tish (EN)"
    },
    az: {
        gamePickerTitle: "OYUN SEÇİCİ",
        detectButton: "Cihazı aşkar et",
        startButton: "Başla",
        game1Title: "Mines",
        game1Button: "Aç",
        game2Title: "Mines Spibe",
        game2Button: "Aç",
        game3Title: "Rocket Queen",
        game3Button: "Aç",

        game4Button: "Aç",

        game5Button: "Aç",

        game6Button: "Aç",

        game7Button: "Aç",

        game8Button: "Aç",

        game9Button: "Aç",
        game10Button: "Aç",
        game11Button: "Aç",
        game12Button: "Aç",
        game13Button: "Aç",
        telegramButton: "Teleqrama keç (RU)",
        telegramButton2: "Teleqrama keç (EN)"
    },
    tr: {
        gamePickerTitle: "OYUN SEÇİCİ",
        detectButton: "Cihazı tespit et",
        startButton: "Başlat",
        game1Title: "Mines",
        game1Button: "Aç",
        game2Title: "Mines Spibe",
        game2Button: "Aç",
        game3Title: "Rocket Queen",
        game3Button: "Aç",

        game4Button: "Aç",

        game5Button: "Aç",

        game6Button: "Aç",

        game7Button: "Aç",

        game8Button: "Aç",

        game9Button: "Aç",
        game10Button: "Aç",
        game11Button: "Aç",
        game12Button: "Aç",
        game13Button: "Aç",
        telegramButton: "Telegrame git (RU)",
        telegramButton2: "Telegrame git (EN)"
    },
    pt: {
        gamePickerTitle: "ESCOLHEDOR DE JOGOS",
        detectButton: "Detectar dispositivo",
        startButton: "Iniciar",
        game1Title: "Mines",
        game1Button: "Abrir",
        game2Title: "Mines Spibe",
        game2Button: "Abrir",
        game3Title: "Rocket Queen",
        game3Button: "Abrir",

        game4Button: "Abrir",

        game5Button: "Abrir",

        game6Button: "Abrir",

        game7Button: "Abrir",

        game8Button: "Abrir",

        game9Button: "Abrir",
        game10Button: "Abrir",
        game11Button: "Abrir",
        game12Button: "Abrir",
        game13Button: "Abrir",
        telegramButton: "Ir para o Telegram (RU)",
        telegramButton2: "Ir para o Telegram (EN)"
    },
    ar: {
        gamePickerTitle: "مُختار الألعاب",
        detectButton: "اكتشاف الجهاز",
        startButton: "ابدأ",
        game1Title: "Mines",
        game1Button: "فتح",
        game2Title: "Mines Spibe",
        game2Button: "فتح",
        game3Title: "Rocket Queen",
        game3Button: "فتح",

        game4Button: "فتح",

        game5Button: "فتح",

        game6Button: "فتح",

        game7Button: "فتح",

        game8Button: "فتح",

        game9Button: "فتح",
        game10Button: "فتح",
        game11Button: "فتح",
        game12Button: "فتح",
        game13Button: "فتح",
        telegramButton: "اذهب إلى Telegram (RU)",
        telegramButton2: "اذهب إلى Telegram (EN)"
    }
};


function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error("Translations not found for language: ", lang);
        return;
    }

    const t = translations[lang];
    
    // Обновляем общие элементы
    const updateIfExists = (id, value) => {
        const elem = document.getElementById(id);
        if (elem && value) elem.innerText = value;
    };

    updateIfExists('game-picker-title', t.gamePickerTitle);
    updateIfExists('detect-button', t.detectButton);
    updateIfExists('start-button', t.startButton);

    // Обновляем игры
    for (let i = 1; i <= 13; i++) {
        updateIfExists(`game${i}-title`, t[`game${i}Title`]);
        updateIfExists(`game${i}-button`, t[`game${i}Button`]);
    }

    // Обновляем Telegram кнопки
    updateIfExists('telegram-button', t.telegramButton);
    updateIfExists('telegram-button2', t.telegramButton2);
}

// Инициализация языка по умолчанию
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('en');
});



// Создаем звезды с улучшенным эффектом
function createEnhancedStars() {
  const stars = document.getElementById('stars');
  const count = 320; // количество звезд
  
  // Очистим контейнер звезд для обновления
  stars.innerHTML = '';

  for(let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Рандомное положение
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Рандомный размер и прозрачность
    const size = Math.random() * 3 + 0.5;
    const opacity = Math.random() * 0.8 + 0.2;
    
    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.opacity = opacity;
    
    // Рандомная задержка мерцания и длительность
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    // Небольшая вариация цвета для некоторых звезд
    if (Math.random() > 0.8) {
      const hue = Math.floor(Math.random() * 60);
      star.style.backgroundColor = `hsl(${hue}, 100%, 90%)`;
      star.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 80%)`;
    } else {
      star.style.boxShadow = `0 0 ${size}px rgba(255, 255, 255, 0.8)`;
    }
    
    stars.appendChild(star);
  }
}

// Добавление эффектов при нажатии на кнопки
function addButtonClickEffects() {
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Создаем эффект волны от нажатия
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      
      // Позиционируем эффект на месте клика
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      // Удаляем элемент после анимации
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var slidesContainer = document.querySelector(".slides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slidesContainer.style.transform = `translateX(${-(slideIndex - 1) * 100 / slides.length}%)`;
    dots[slideIndex - 1].className += " active";
}

function openTab(evt, tabName, button) {
    var i, tabcontent, tablinks;
    var miniModal = document.getElementById('miniModal');
    var aboutGif = document.getElementById('aboutGif');

    // Скрываем все вкладки и удаляем класс 'active'
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('active');
    }

    // Удаляем класс 'active' у всех кнопок
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Показываем текущую вкладку и добавляем класс 'active'
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName).classList.add('active');
    button.classList.add("active");

    // Скроллим страницу
    if (tabName === 'Games') {
        window.scrollTo({ top: 45, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Обрабатываем вкладку 'About'
    if (tabName === 'About') {
        if (aboutGif) {
            var newAboutGif = aboutGif.cloneNode(true);
            aboutGif.parentNode.replaceChild(newAboutGif, aboutGif);
            aboutGif = newAboutGif; // обновляем ссылку на новый элемент
            aboutAudio.play();
        }
    } else {
        aboutAudio.pause();
        aboutAudio.currentTime = 0;
    }

    // Обрабатываем вкладку 'Contact'
    if (tabName === 'Contact') {
        miniModal.style.display = 'none';
    }
}

function animate() {
    if (typeof ctx !== 'undefined' && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].size <= 0.3) {
                particlesArray.splice(i, 1);
                i--;
                particlesArray.push(new Particle());
            }
        }
        requestAnimationFrame(animate);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }
            draw() {
                ctx.fillStyle = 'rgba(255,255,255,0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        function init() {
            for (let i = 0; i < 100; i++) {
                particlesArray.push(new Particle());
            }
        }

        init();
        animate();
    }
    
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const phrases = [];
        let phraseIndex = 0;
        let letterIndex = 0;
        let currentPhrase = [];
        let isDeleting = false;
        let delay = 60;
        
        function type() {
            if (isDeleting && currentPhrase.length === 0) {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                letterIndex = 0;
                isDeleting = false;
                if (phraseIndex === 0) {
                    setTimeout(type, 2000);
                    return;
                }
            } else if (!isDeleting && currentPhrase.length === phrases[phraseIndex].length) {
                isDeleting = true;
                delay = 2500;
            }

            if (isDeleting) {
                currentPhrase.pop();
                delay = 30;
            } else {
                currentPhrase.push(phrases[phraseIndex][letterIndex++]);
                delay = 120;
            }

            typingText.textContent = currentPhrase.join('');
            typingText.style.opacity = isDeleting ? 0.5 : 1;
            setTimeout(type, delay);
        }
        
        setTimeout(type, 2000);
    }
});

if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        for (i = 0; i < 5; i++) {
            $(".list li").clone().appendTo(".list");
        }
        $('.button').click(function () {
            $('.window').css({
                right: "0"
            });
            $('.list li').css({
                border: '4px solid transparent'
            });
            function selfRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var x = selfRandom(50, 100);
            $('.list li:eq('+x+')').css({
                border: '4px solid #00ba00'
            });

            var itemWidth = 100;
            var itemMargin = 8;
            $('.window').animate({
                right: ((x * itemWidth) + (x * itemMargin) - 119)
            }, 10000);
        });
    });
}

function detectDevice() {
    var ua = navigator.userAgent;
    var deviceType;
    var deviceModel = "";

    if (/android/i.test(ua)) {
        deviceType = "Android";
        var match = ua.match(/Android.*?; (\w+)\s(\w+)\s/);
        deviceModel = match ? match[1] + " " + match[2] : "";
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
        deviceType = "iOS";
        if (/iPhone/i.test(ua)) {
            deviceModel = "iPhone";
        } else if (/iPad/i.test(ua)) {
            deviceModel = "iPad";
        } else if (/iPod/i.test(ua)) {
            deviceModel = "iPod";
        }
    } else {
        deviceType = "Desktop";
    }

    var output = deviceModel ? deviceType + " (" + deviceModel + ")" : deviceType;
    var deviceOutput = document.getElementById("device-output");
    deviceOutput.classList.remove("visible");
    setTimeout(function() {
        deviceOutput.textContent = output;
        deviceOutput.classList.add("visible");
    }, 10);
}

function triggerHapticFeedback() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

function startGame() {
    console.log(document.getElementById("device-output").textContent);
    if (document.getElementById("device-output").textContent.trim() === "Device not detected") {
        showModal();
    } else {
        const now = new Date().getTime();
        const lastGameTime = localStorage.getItem('lastGameTime');
        if (lastGameTime && now - lastGameTime < 60000) {
            showMiniModal();
            return;
        }
        var randomNumber = Math.floor(Math.random() * 5) + 1;
        var probability = Math.floor(Math.random() * 12) + 85;
        localStorage.setItem('lastGameTime', now);
        localStorage.setItem('lastGameImage', randomNumber);
        localStorage.setItem('lastProbability', probability);

        var imgContainer = document.querySelector('.image-container');
        var oldImage = imgContainer.querySelector('img');
        oldImage.style.display = 'none';

        var loaderDiv = document.createElement('div');
        loaderDiv.className = 'loader';
        imgContainer.appendChild(loaderDiv);

        setTimeout(function() {
            loaderDiv.remove();
            oldImage.style.display = 'block';
            oldImage.src = randomNumber + '.png';
            oldImage.style.marginLeft = "25px";
        }, 3000);
    }
}



function getGameName(imageNumber) {
    switch (imageNumber) {
        case '1':
            return 'Mines';
        case '2':
            return 'Royal Mines';
        case '3':
            return 'Brawl Pirates';
        case '4':
            return 'Bombucks';
        case '5':
            return 'LuckyJet';
        case '6':
            return 'Aviator';
        default:
            return '';
    }
}

function closeMiniModal() {
    var miniModal = document.getElementById('miniModal');
    miniModal.style.display = 'none';
}


function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = 'block';
    requestAnimationFrame(() => {
        modal.classList.add("show");
    });
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // 500ms - время вашей CSS transition
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function openGame(game) {
    triggerHapticFeedback();
    var ua = navigator.userAgent;
    var isIOS = /iPhone|iPad|iPod/i.test(ua);

    var links = {
        mines: {
            ios: 'mines/index.html',
            other: 'mines/index.html'
        },
        spribe: {
            ios: 'minesind/index.html',
            other: 'minesind/index.html'
        },
        royalMines: {
            ios: 'royal/index.html',
            other: 'royal/index.html'
        },
        brawlPirates: {
            ios: 'brawlpir/index.html',
            other: 'brawlpir/index.html'
        },
        penalty: {
            ios: 'penalty/index.html',
            other: 'penalty/index.html'
        },
        bomBucks: {
            ios: 'bombucks/index.html',
            other: 'bombucks/index.html'
        },
        lucky: {
            ios: 'jet/index.html',
            other: 'jet/index.html'
        },
        aviator: {
            ios: 'avi/index.html',
            other: 'avi/index.html'
        },
        footballX: {
            ios: 'footx/index.html',
            other: 'footx/index.html'
        },
        coin: {
            ios: 'monetka/index.html',
            other: 'monetka/index.html'
        },
        minesnew: {
            ios: 'minesnew/Mines.html',
            other: 'minesnew/Mines.html'
        },
        queen: {
            ios: 'queen/index.html',
            other: 'queen/index.html'
        },
        kingth: {
            ios: 'king/index.html',
            other: 'king/index.html'
        },
        chickr: {
            ios: 'road/index.html',
            other: 'road/index.html'
        },
        diceg: {
            ios: 'dice/index.html',
            other: 'dice/index.html'
        },
        aviam: {
            ios: 'aviamast/index.html',
            other: 'aviamast/index.html'
        }
    };
    var url = isIOS ? links[game].ios : links[game].other;
    window.location.href = url;
} 
