const botonesTema = document.querySelectorAll(".theme-buttons button");
const body = document.body;
const contador = document.getElementById("contador");
const demoArea = document.getElementById("demo-area");
const btnFrase = document.getElementById("btn_frase");

let cambiosTema = 0;

botonesTema.forEach(boton => {
    boton.addEventListener("click", () => {
        const tema = boton.getAttribute("data-tema");
        body.classList.remove("tema-claro", "tema-oscuro", "tema-naranja");
        body.classList.add(tema);

        cambiosTema++;
        contador.textContent = cambiosTema;
    });
});

// Frases 
const frases = [
    "El corazón humano late más de 100 mil veces al día.",
    "Las abejas pueden reconocer rostros humanos.",
    "El océano contiene más del 97% del agua de la Tierra.",
    "Un día en Venus dura más que un año en Venus.",
    "La memoria de los elefantes puede durar toda la vida."
];


btnFrase.addEventListener("click", () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    demoArea.innerHTML = `<span>${fraseAleatoria}</span>`;
});
