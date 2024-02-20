function calcular(event) {
  event.preventDefault(); // Evita que se envíen los formularios por defect
  let alcoolInput = document.getElementById("alcool").value;
  let gasolinaInput = document.getElementById("gasolina").value;
  let contentResult = document.getElementById("content__result");
  let textResult = document.getElementById("text__result");
  let gasolinaSpan = document.getElementById("gasolina__result");
  let alcoolSpan = document.getElementById("alcool__result");

  alcoolInput = parseFloat(alcoolInput);
  gasolinaInput = parseFloat(gasolinaInput);

  if (isNaN(alcoolInput) || isNaN(gasolinaInput)) {
    textResult.innerHTML = "Por favor, insira valores válidos.";
    return;
  }

  let calculo = alcoolInput / gasolinaInput;

  if (calculo < 0.7) {
    textResult.innerHTML = "Compensa usar Álcool";
  } else {
    textResult.innerHTML = "Compensa usar Gasolina";
  }

  gasolinaSpan.innerHTML = "Gasolina R$" + gasolinaInput.toFixed(2);
  alcoolSpan.innerHTML = "Álcool R$" + alcoolInput.toFixed(2);

  contentResult.classList.remove("hide");
}
