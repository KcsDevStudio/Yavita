const hamburger = document.getElementById("hamburger");
      const menuMoba = document.getElementById("menuMoba");
      const closeMenu = document.getElementById("closeMenu");
      const overlay = document.getElementById("overlay");

      hamburger.addEventListener("click", () => {
        menuMoba.classList.add("open");
        overlay.classList.add("show");
      });

      closeMenu.addEventListener("click", () => {
        menuMoba.classList.remove("open");
        overlay.classList.remove("show");
      });

      overlay.addEventListener("click", () => {
        menuMoba.classList.remove("open");
        overlay.classList.remove("show");
      });

      // Toggle login links
      function toggleLoginLink() {
        const loginLink = document.getElementById("loginLink");
        if (loginLink.style.display === "flex") {
          loginLink.style.display = "none";
        } else {
          loginLink.style.display = "flex";
        }
      }