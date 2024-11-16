  const buttons = document.querySelectorAll("[data-carousel-button]");
  const intervalTime = 2000; 
  let autoSlideInterval;
  
  function moveToNextSlide(offset) {
      const slides = document.querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
  
      slides.children[newIndex].setAttribute('data-active', 'true');
      activeSlide.removeAttribute('data-active');
  
      slides.style.transform = `translateX(-${newIndex * 100}%)`;
  }
  
  function startAutoSlide() {
      autoSlideInterval = setInterval(() => moveToNextSlide(1), intervalTime);
  }
  
  startAutoSlide();
  
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1;
          clearInterval(autoSlideInterval); 
          moveToNextSlide(offset);
          startAutoSlide();
      });
  });
  const carousel = document.getElementById('carousel');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const totalItems = carousel.children.length;
  let index = 0;
  

  function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
  

  function nextSlide() {
    index++;
    if (index >= totalItems) {
      index = 0; 
    }
    updateCarousel();
  }
  
 
  function prevSlide() {
    index--;
    if (index < 0) {
      index = totalItems - 1; 
    }
    updateCarousel();
  }
  

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  

  setInterval(nextSlide, 3000);
  

  updateCarousel();
  
  
  const slider = document.getElementById('auto-slider');
  let currentIndex = 0;
  
  function showNextCard() {
      const totalSlides = slider.children.length;
  
      for (let i = 0; i < totalSlides; i++) {
          slider.children[i].classList.add('hidden');
      }

      slider.children[currentIndex].classList.remove('hidden');

      currentIndex = (currentIndex + 1) % totalSlides;
  }
  
  for (let i = 1; i < slider.children.length; i++) {
      slider.children[i].classList.add('hidden');
  }
  
  setInterval(showNextCard, 3000);
  