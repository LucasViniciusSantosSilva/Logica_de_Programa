
var participantes = ['Tânia','Julio','Aurelio',];
var dataAtual = new Date('2022-05-01');
var nome = (window.prompt("Informe seu nome:"));
var dia = parseInt(window.prompt("Informe a data do evento(Ano-Mês-Dia):"));
var cont = 0;
alert(dataAtual)
if(dia > dataAtual){
    alert("Etapa 'OK' - Data -  "+ dia +"");
    cont++
}else{
    alert("- Cadastro não realizado \n - Data não atende aos requesitos  \n - "+ dia +" \n ");  
} 

var idade = parseFloat(window.prompt("Qual a sua idade"));

if(idade >= 18){
    alert("Etapa 'OK' - Sua idade é "+ idade +"");
    cont++
}else{
    alert("- Cadastro não realizado \n - Membro menor de idade \n - Menor de idade, sua idade é "+ idade +" \n ");  
} 

if(cont == 2){   
    var adicionar = participantes.push("'"+nome+"',")

    alert(""+ participantes +"")
            
    alert(""+participantes.length+"/100")     

    var dia = dataAtual.getDate();
    var mes = (dataAtual.getMonth() + 1);
    var ano = dataAtual.getFullYear();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();

    if(parseInt(participantes.length) <= 100){
        alert("Evento cadastrada com sucesso!!! \n No dia " + dia + "/" + mes + "/" + ano + ". Agora são " + horas + ":" + minutos + "h. \n Data do evento: "+dia+"\n");
    }else{
        alert("- Cadastro não realizado \n - Não permitido por ter excedido o limite de cadastro ");  
    }
}else{
    alert("- Cadastro não realizado \n - Data não atende aos requesitos ou membro menor de idade ");  
}


