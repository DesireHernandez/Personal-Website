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
