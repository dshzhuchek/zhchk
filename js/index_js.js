       function alignTexts() {
            const nameImg = document.querySelector('.name-image');
            const firstImg = document.querySelector('.hero-image');
            const leftText = document.querySelector('.hero-text-left');
            const rightText = document.querySelector('.hero-text-right');
            const rightCol = document.querySelector('.col-3:last-child');
            
            if (nameImg && firstImg && leftText && rightText && window.innerWidth > 1024) {
                const nameHeight = nameImg.offsetHeight;
                leftText.style.marginTop = (nameHeight + 20) + 'px';
                
                const firstImgBottom = firstImg.getBoundingClientRect().bottom;
                const rightColTop = rightCol.getBoundingClientRect().top;
                const rightTextHeight = rightText.offsetHeight;
                let marginTop = (firstImgBottom - rightColTop) - rightTextHeight;
                if (marginTop < 0) marginTop = 0;
                rightText.style.marginTop = marginTop + 'px';
            } else if (window.innerWidth <= 1024) {
                leftText.style.marginTop = '0px';
                rightText.style.marginTop = '0px';
            }
        }

        function initSmoothScroll() {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-scroll');
                    let targetElement = null;
                    if (targetId === 'about') targetElement = document.getElementById('about');
                    else if (targetId === 'projects') targetElement = document.getElementById('projects');
                    else if (targetId === 'contacts') targetElement = document.getElementById('contacts');
                    
                    if (targetElement) {
                        const offset = 100;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                });
            });
        }
        
        window.addEventListener('load', () => {
            alignTexts();
            initSmoothScroll();
        });
        window.addEventListener('resize', alignTexts);
    