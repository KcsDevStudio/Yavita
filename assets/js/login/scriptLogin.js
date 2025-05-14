const cadastreBtn = document.getElementById("cadastre");
    const voltarBtn = document.getElementById("voltar");
    const wrapper = document.getElementById("formWrapper");
    const formLogin = document.getElementById("loginForm");

    cadastreBtn.addEventListener("click", () => {
      wrapper.classList.add("flipped");
    });

    voltarBtn.addEventListener("click", () => {
      wrapper.classList.remove("flipped");
    });

    function mostrarOpcoes() {
      document.getElementById("opcoesGenero").style.display = "block";
    }
