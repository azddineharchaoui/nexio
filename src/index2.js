

  /*el asri crusel */
  


  
  const buttons = document.querySelectorAll("[data-carousel-button]");
  const intervalTime = 2000; // Time in milliseconds for auto-slide (3 seconds in this case)
  let autoSlideInterval;
  
  function moveToNextSlide(offset) {
      const slides = document.querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  
      // Wrap around the slide index
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
  
      // Update active slide
      slides.children[newIndex].setAttribute('data-active', 'true');
      activeSlide.removeAttribute('data-active');
  
      // Update transform for sliding effect
      slides.style.transform = `translateX(-${newIndex * 100}%)`;
  }
  
  // Set up automatic sliding
  function startAutoSlide() {
      autoSlideInterval = setInterval(() => moveToNextSlide(1), intervalTime);
  }
  
  // Start automatic sliding on page load
  startAutoSlide();
  
  // Button click functionality
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1;
          clearInterval(autoSlideInterval); // Stop auto-slide on manual navigation
          moveToNextSlide(offset);
          startAutoSlide(); // Restart auto-slide after manual navigation
      });
  });
  const carousel = document.getElementById('carousel');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const totalItems = carousel.children.length;
  let index = 0;
  
  // Function to update the carousel position
  function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
  
  // Move to the next slide
  function nextSlide() {
    index++;
    if (index >= totalItems) {
      index = 0; // Loop back to the first image
    }
    updateCarousel();
  }
  
  // Move to the previous slide
  function prevSlide() {
    index--;
    if (index < 0) {
      index = totalItems - 1; // Loop back to the last image
    }
    updateCarousel();
  }
  
  // Event listeners for buttons
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);
  
  // Initial setup
  updateCarousel();
  
  
  const slider = document.getElementById('auto-slider');
  let currentIndex = 0;
  
  function showNextCard() {
      const totalSlides = slider.children.length;
  
      // Hide all cards
      for (let i = 0; i < totalSlides; i++) {
          slider.children[i].classList.add('hidden');
      }
  
      // Show the current card
      slider.children[currentIndex].classList.remove('hidden');
  
      // Move to the next card
      currentIndex = (currentIndex + 1) % totalSlides;
  }
  
  // Initially hide all cards except the first one
  for (let i = 1; i < slider.children.length; i++) {
      slider.children[i].classList.add('hidden');
  }
  
  // Change the card every 3 seconds
  setInterval(showNextCard, 3000);
  