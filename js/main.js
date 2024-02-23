document.addEventListener("DOMContentLoaded", () => {
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();

  let clicked = false;

  document.querySelector("canvas").addEventListener("click", () => {
    if (clicked) {
      Telegram.WebApp.HapticFeedback.notificationOccurred("error");
    } else {
      Telegram.WebApp.HapticFeedback.notificationOccurred("success");
    }

    clicked = !clicked;
  });
});
