
        function handleScrollZoom() {
            const image = document.getElementById('zoomImage');
            if (!image) return;
            
            const wrapper = image.parentElement;
            const imageRect = wrapper.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const centerY = windowHeight / 2;
            
            const imageCenter = imageRect.top + imageRect.height / 2;
            const distanceToCenter = Math.abs(imageCenter - centerY);
            const maxDistance = windowHeight / 2;
            
            let progress = 1 - Math.min(1, distanceToCenter / maxDistance);
            progress = Math.max(0, Math.min(1, progress));
            const scale = 1 + (progress * 0.1);
            image.style.transform = `scale(${scale})`;
        }
        
        function alignRightText() {
            const heroImage = document.querySelector('.hero-image');
            const rightText = document.getElementById('rightText');
            const rightCol = rightText?.parentElement;
            
            if (heroImage && rightText && rightCol && window.innerWidth > 1024) {
                const imageBottom = heroImage.getBoundingClientRect().bottom;
                const rightColTop = rightCol.getBoundingClientRect().top;
                const rightTextHeight = rightText.offsetHeight;
                let marginTop = (imageBottom - rightColTop) - rightTextHeight;
                if (marginTop < 0) marginTop = 0;
                rightText.style.marginTop = marginTop + 'px';
            } else if (rightText) {
                rightText.style.marginTop = '0';
            }
        }

        function alignSecondText() {
            const firstText = document.getElementById('firstTaskText');
            const secondText = document.getElementById('secondTaskText');
            
            if (firstText && secondText && window.innerWidth > 1024) {
                const firstTextTop = firstText.getBoundingClientRect().top;
                const secondTextParent = secondText.parentElement;
                const secondTextParentTop = secondTextParent.getBoundingClientRect().top;
                const marginTop = firstTextTop - secondTextParentTop;
                if (marginTop >= 0) {
                    secondText.style.marginTop = marginTop + 'px';
                }
            } else if (secondText) {
                secondText.style.marginTop = '0';
            }
        }

        function alignConceptTexts() {
            const text1 = document.getElementById('conceptText1');
            const text2 = document.getElementById('conceptText2');
            const text3 = document.getElementById('conceptText3');
            
            if (text1 && text2 && text3 && window.innerWidth > 1024) {
                const text1Top = text1.getBoundingClientRect().top;
                const text2Parent = text2.parentElement;
                const text3Parent = text3.parentElement;
                const text2ParentTop = text2Parent.getBoundingClientRect().top;
                const text3ParentTop = text3Parent.getBoundingClientRect().top;
                const marginTop2 = text1Top - text2ParentTop;
                const marginTop3 = text1Top - text3ParentTop;
                if (marginTop2 >= 0) text2.style.marginTop = marginTop2 + 'px';
                if (marginTop3 >= 0) text3.style.marginTop = marginTop3 + 'px';
            } else {
                if (text2) text2.style.marginTop = '0';
                if (text3) text3.style.marginTop = '0';
            }
        }

        function alignResultTexts() {
            const text1 = document.getElementById('resultText1');
            const text2 = document.getElementById('resultText2');
            
            if (text1 && text2 && window.innerWidth > 1024) {
                const text1Top = text1.getBoundingClientRect().top;
                const text2Parent = text2.parentElement;
                const text2ParentTop = text2Parent.getBoundingClientRect().top;
                const marginTop = text1Top - text2ParentTop;
                if (marginTop >= 0) text2.style.marginTop = marginTop + 'px';
            } else if (text2) {
                text2.style.marginTop = '0';
            }
        }

        function alignAudienceTexts() {
            const vasilyImage = document.querySelector('.vasily-image');
            const vasilyMainText = document.querySelector('.vasily-main-text');
            const vasilyRedText = document.querySelector('.vasily-red-text');
            const vasilyContainer = vasilyMainText?.parentElement;
            
            if (vasilyImage && vasilyMainText && vasilyRedText && vasilyContainer && window.innerWidth > 1024) {
                const imageTop = vasilyImage.getBoundingClientRect().top;
                const containerTop = vasilyContainer.getBoundingClientRect().top;
                const imageHeight = vasilyImage.offsetHeight;
                const topMargin = imageTop - containerTop;
                if (topMargin >= 0) vasilyMainText.style.marginTop = topMargin + 'px';
                vasilyContainer.style.height = imageHeight + 'px';
                vasilyMainText.style.marginBottom = '0';
            } else if (vasilyMainText && vasilyRedText) {
                vasilyMainText.style.marginTop = '0';
                if (vasilyContainer) vasilyContainer.style.height = 'auto';
            }
            
            const alexeyImage = document.querySelector('.alexey-image');
            const alexeyMainText = document.querySelector('.alexey-main-text');
            const alexeyRedText = document.querySelector('.alexey-red-text');
            const alexeyContainer = alexeyMainText?.parentElement;
            
            if (alexeyImage && alexeyMainText && alexeyRedText && alexeyContainer && window.innerWidth > 1024) {
                const imageTop = alexeyImage.getBoundingClientRect().top;
                const containerTop = alexeyContainer.getBoundingClientRect().top;
                const imageHeight = alexeyImage.offsetHeight;
                const topMargin = imageTop - containerTop;
                if (topMargin >= 0) alexeyMainText.style.marginTop = topMargin + 'px';
                alexeyContainer.style.height = imageHeight + 'px';
                alexeyMainText.style.marginBottom = '0';
            } else if (alexeyMainText && alexeyRedText) {
                alexeyMainText.style.marginTop = '0';
                if (alexeyContainer) alexeyContainer.style.height = 'auto';
            }
        }

        function navigateToHomeWithScroll(targetId) {
            sessionStorage.setItem('scrollTo', targetId);
            window.location.href = 'index.html';
        }

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-scroll');
                navigateToHomeWithScroll(targetId);
            });
        });

        window.addEventListener('load', () => {
            alignRightText();
            alignSecondText();
            alignConceptTexts();
            alignResultTexts();
            alignAudienceTexts();
            handleScrollZoom();
        });
        
        window.addEventListener('resize', () => {
            alignRightText();
            alignSecondText();
            alignConceptTexts();
            alignResultTexts();
            alignAudienceTexts();
            handleScrollZoom();
        });
        
        window.addEventListener('scroll', () => {
            handleScrollZoom();
        });
   