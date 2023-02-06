var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");
var cor="black";
var largura=3;
var ultX;
var ultY;

canvas.addEventListener("touchstart", toque_comeca);
function toque_comeca(evento){
    cor=document.getElementById("cor").value;
    largura=document.getElementById("largura").value;
    ultX=evento.touches[0].clientX - canvas.offsetLeft;
    ultY=evento.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", touchMove);
function touchMove(evento){
    var posicaoX=evento.touches[0].clientX - canvas.offsetLeft;
    var posicaoY=evento.touches[0].clientY - canvas.offsetTop;
        contexto.beginPath();
        contexto.strokeStyle=cor;
        contexto.lineWidth=largura;
        contexto.moveTo(ultX, ultY);
        contexto.lineTo(posicaoX, posicaoY);
        contexto.stroke();
    ultX=posicaoX;
    ultY=posicaoY;
}