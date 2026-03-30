
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

        function alignSecondText() {
            const firstText = document.getElementById('firstTaskText');
            const secondText = document.getElementById('secondTaskText');
            if (firstText && secondText && window.innerWidth > 1024) {
                const firstTextTop = firstText.getBoundingClientRect().top;
                const secondTextParent = secondText.parentElement;
                const secondTextParentTop = secondTextParent.getBoundingClientRect().top;
                const marginTop = firstTextTop - secondTextParentTop;
                if (marginTop >= 0) secondText.style.marginTop = marginTop + 'px';
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
            alignSecondText();
            alignConceptTexts();
            handleScrollZoom();
        });
        
        window.addEventListener('resize', () => {
            alignSecondText();
            alignConceptTexts();
            handleScrollZoom();
        });
        
        window.addEventListener('scroll', () => {
            handleScrollZoom();
        });
    