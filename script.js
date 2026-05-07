function toggleHobby(hobbyId) {
  const content = document.getElementById(`${hobbyId}-content`);
  const icon = document.getElementById(`${hobbyId}-icon`);

  if (content.classList.contains('active')) {
    content.classList.remove('active');
    icon.style.transform = 'rotate(0deg)';
  } else {
    // Close all other hobby contents
    document.querySelectorAll('.hobby-content').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelectorAll('.toggle-icon').forEach(item => {
      item.style.transform = 'rotate(0deg)';
    });

    // Open clicked hobby content
    content.classList.add('active');
    icon.style.transform = 'rotate(180deg)';
  }
}

// Folder Toggle Function
function toggleFolder(folderElement) {

  const isActive = folderElement.classList.contains('active');

  // Close everything
  document.querySelectorAll('.folder').forEach(item => {
    item.classList.remove('active');
  });

  document.querySelectorAll('.content-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // If active, STOP (toggle off behavior)
  if (isActive) return;

  // Activate clicked folder
  folderElement.classList.add('active');

  // Get matching content key
  const targetValue = folderElement.getAttribute('data-target');

  // Activate matching content panel
  const targetPanel = document.querySelector(`.content-panel[data-content="${targetValue}"]`);

  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // if (folderElement.classList.contains('active')) {
  //   folderElement.classList.remove('active')
  // } else {
  //   document.querySelectorAll('.folder').forEach(item => {
  //     item.classList.remove('active');
  //   })
  //   folderElement.classList.add('active');

  // }
}

// Photo Slider Functionality
let currentIndex = 0;
const slide = document.querySelector('.slide');
const items = document.querySelectorAll('.item');
const totalItems = items.length;
const indicatorsContainer = document.getElementById('photo-indicators');
let isTransitioning = false;


// Create Indicators
for (let i = 0; i < totalItems; i++) {
  const dot = document.createElement('div');
  dot.classList.add('indicator-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  indicatorsContainer.appendChild(dot);
}

const indicators = document.querySelectorAll('.indicator-dot');


// Left Arrow Click
document.getElementById('left-arrow').addEventListener('click', () => {
  if (isTransitioning) return;
  navigateSlide(-1);
});

// Right Arrow Click
document.getElementById('right-arrow').addEventListener('click', () => {
  if (isTransitioning) return;
  navigateSlide(1);
});

// Navigate To Specific Slide
function goToSlide(index) {
  if (isTransitioning || index === currentIndex) return;
  currentIndex = index;
  updateSlide();
}

// Navigate Slide with Direction
function navigateSlide(direction) {
  isTransitioning = true;
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  updateSlide();

  // Reset auto-slide timer
  setTimeout(() => {
    isTransitioning = false;
  }, 600);
}

// Update Slide Position & Indicators
function updateSlide() {
  const translateX = -currentIndex * 100;
  slide.style.transform = `translateX(${translateX}%)`;

  // Update indicator dots
  indicators.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
