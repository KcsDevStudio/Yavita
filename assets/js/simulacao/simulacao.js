document.getElementById("simuladorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById("idade").value);
  const dependentes = parseInt(document.getElementById("dependentes").value);
  const cobertura = document.getElementById("cobertura").value;

  let precoBase = 100;

  if (idade < 18) precoBase += 50;
  else if (idade <= 40) precoBase += 100;
  else precoBase += 150;

  precoBase += dependentes * 50;

  if (cobertura === "intermediario") precoBase *= 1.2;
  else if (cobertura === "completo") precoBase *= 1.5;

  document.getElementById("resultado").innerText =
    `Valor estimado do plano: R$ ${precoBase.toFixed(2)}`;
});
