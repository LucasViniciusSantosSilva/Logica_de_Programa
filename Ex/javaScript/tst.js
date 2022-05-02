var n1 = parseFloat(window.prompt("Primeira nota:"));
var n2 = parseFloat(window.prompt("Segunda nota:"));
var n3 = parseFloat(window.prompt("Terceira nota:"));  
        

media = (n1+n2+n3)/3

if(media >= 7){
    alert("Aprovado - Sua média é "+ media +"");
}else{
    alert("Reprovado - Sua média é "+ media +"");        
}