const cards = document.querySelectorAll(".card");
let currentVideo = null;

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Cerrar otros abiertos
    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove("flipped");
        const v = c.querySelector("video");
        if (v) v.pause();
      }
    });

    card.classList.toggle("flipped");

    const back = card.querySelector(".card-back");

    if (!back.hasChildNodes()) {
      const type = card.dataset.type;
      const src = card.dataset.src;

      if (type === "image") {
        const img = document.createElement("img");
        img.src = src;
        back.appendChild(img);
      } else if (type === "video") {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        back.appendChild(video);
        video.play();
        currentVideo = video;
      }
    } else {
      // Si ya tiene un video dentro
      const v = back.querySelector("video");
      if (v) {
        if (card.classList.contains("flipped")) {
          v.play();
        } else {
          v.pause();
        }
      }
    }
  });
});
