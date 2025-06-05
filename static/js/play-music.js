// /static/js/play-music.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("birthdayAudio");
  let started = false;

  document.addEventListener("click", () => {
    if (!started) {
      audio.play().catch((e) =>
        console.warn("Không thể phát âm thanh:", e)
      );
      started = true;
    }
  });
});
