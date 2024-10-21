onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

// Phát nhạc nền khi trang tải xong
window.onload = () => {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play().catch(() => {
      // Nếu người dùng chặn tự động phát nhạc, có thể xử lý ở đây
      console.log("Không thể phát nhạc tự động");
  });
  document.body.classList.remove("not-loaded");
};

// Hiển thị thông điệp với hiệu ứng typewriter
function displayMessage() {
  const button = document.querySelector(".personal-message");
  const message = "Chúc chị em ngày 20/10 trần đầy sức khỏe, gia đình luôn luôn bình an. Công việc tài lộc đồng hành, thần tài dẫn lối, 8386 các chị em nhá! Các chị em mãi đỉnh mãi đỉnh luôn ạ!";
  const typedMessage = document.getElementById("typedMessage");
  typedMessage.innerHTML = "";
  button.style.display = "none";
  let i = 0;

  function typeWriter() {
      if (i < message.length) {
          typedMessage.innerHTML += message.charAt(i);
          i++;
          setTimeout(typeWriter, 30);
      }
  }

  typeWriter();
}
