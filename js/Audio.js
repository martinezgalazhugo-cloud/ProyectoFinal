function leerTexto(texto){

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-MX";

    voz.rate = 1;

    speechSynthesis.speak(voz);
}