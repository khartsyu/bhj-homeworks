
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.reveal');
            
            elements.forEach(function(element) {
                const elementPosition = element.getBoundingClientRect();
                

                if (elementPosition.top < window.innerHeight && elementPosition.bottom > 0) {
                    element.classList.add('reveal_active');
                }
            });
        });
        
        window.dispatchEvent(new Event('scroll'));