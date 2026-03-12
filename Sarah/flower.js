onload = () => {
  document.body.classList.remove("container");

  // Créer l'élément audio
  const audio = new Audio("Flowers.mp3");
  audio.loop = true;
  audio.volume = 0.7;

  // Essayer de lancer automatiquement
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Le navigateur bloque l'autoplay → afficher un bouton de lecture
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 50px;
        padding: 10px 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        color: white;
        font-family: sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: background 0.3s;
      `;
      overlay.innerHTML = `<span style="font-size:20px">🎵</span> Lancer la musique`;

      overlay.addEventListener("mouseenter", () => {
        overlay.style.background = "rgba(255,255,255,0.25)";
      });
      overlay.addEventListener("mouseleave", () => {
        overlay.style.background = "rgba(255,255,255,0.15)";
      });

      overlay.addEventListener("click", () => {
        audio.play();
        overlay.innerHTML = `<span style="font-size:20px">🎵</span> ♪ En cours...`;
        setTimeout(() => overlay.remove(), 1500);
      });

      document.body.appendChild(overlay);
    });
  }
};
