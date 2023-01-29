function codifica() {
    var codificamsg = document.getElementById("texto").value;
    var textoCrip = codificamsg.toLowerCase();
    textoCrip = textoCrip.replaceAll(/a/g,"ai");
    textoCrip = textoCrip.replaceAll(/e/g,"enter");
    textoCrip = textoCrip.replaceAll(/i/g,"imes");
    textoCrip = textoCrip.replaceAll(/o/g,"ober");
    textoCrip = textoCrip.replaceAll(/u/g,"ufat");
    console.log(textoCrip);
    document.getElementById("mensagem").innerHTML = textoCrip;
}

function descodifica() {
    var descodificamsg = document.getElementById("texto").value;
    var textoDesCrip = descodificamsg.toLowerCase();
    textoDesCrip = textoDesCrip.replaceAll(/ufat/g,"u");
    textoDesCrip = textoDesCrip.replaceAll(/ober/g,"o");
    textoDesCrip = textoDesCrip.replaceAll(/imes/g,"i");
    textoDesCrip = textoDesCrip.replaceAll(/enter/g,"e");
    textoDesCrip = textoDesCrip.replaceAll(/ai/g,"a");
    console.log(textoDesCrip);
    document.getElementById("mensagem").innerHTML = textoDesCrip;
}
