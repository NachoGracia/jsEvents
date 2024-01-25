/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const button = document.getElementById("btnToClick");

button.addEventListener("click", (escuchador) => {
  console.log("🚀 ~ button.addEventListener ~ escuchador:", escuchador);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector(".focus");

focus.addEventListener("focus", (evento) => {
  console.log("🚀 ~ evento:", evento);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const input = document.querySelector(".value");

input.addEventListener("input", (evento) => {
  console.log("🚀 ~ evento:", evento.target.value);
});
