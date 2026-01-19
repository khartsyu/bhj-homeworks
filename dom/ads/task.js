
        const rotators = document.querySelectorAll('.rotator');
        
        rotators.forEach(rotator => {
            const cases = rotator.querySelectorAll('.rotator__case');
            let currentIndex = 0;
            
            function rotateText() {
                cases[currentIndex].classList.remove('rotator__case_active');
                
                currentIndex++;
                
                if (currentIndex >= cases.length) {
                    currentIndex = 0;
                }
                

                const nextCase = cases[currentIndex];
                nextCase.classList.add('rotator__case_active');
                
                nextCase.style.color = nextCase.dataset.color;
                
                const speed = parseInt(nextCase.dataset.speed) || 1000;
                
                setTimeout(rotateText, speed);
            }
            
            const initialSpeed = parseInt(cases[0].dataset.speed) || 1000;
            setTimeout(rotateText, initialSpeed);
        });