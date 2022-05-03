var participantes = [];
var cont1 = 0;
  
while (cont1<=100) {   
    /*Nome*/ 
    var nome = (window.prompt("Informe seu nome:"));

    /*Data do evento*/
    var dataAtual = new Date();
    var dia2 = Date.parse(dataAtual) 
    var dia = new String(window.prompt("Informe a data do evento(Ano-Mês-Dia):"));
    var dia1 = Date.parse(dia)
    var cont = 0;
    if(dia1 > dia2){
        alert("Etapa 'OK' - Data -  "+ dia +"");
        cont++
    }else{
        alert("- Cadastro não realizado \n - Data não atende aos requesitos  \n - "+ dia +" \n ");  
    } 

    /*Idade do membro*/ 
    if(cont == 1){
        var idade = parseFloat(window.prompt("Qual a sua idade"));    
        if(idade >= 18){
            alert("Etapa 'OK' - Sua idade é "+ idade +"");
            cont++
        }else{
            alert("- Cadastro não realizado \n - Membro menor de idade \n - Menor de idade, sua idade é "+ idade +" \n ");  
        } 
    }

    /* Atrende todos os requesitos*/
    if(cont == 2){        
        var adicionar = participantes.push("'"+nome+"'")   
        alert(""+ participantes +"")
                
        alert(""+participantes.length+"/100 - Participantes")     

        var di = dataAtual.getDate();
        var mes = (dataAtual.getMonth() + 1);
        var ano = dataAtual.getFullYear();
        var horas = dataAtual.getHours();
        var minutos = dataAtual.getMinutes();

        if(parseInt(participantes.length) <= 100){
            alert("Evento cadastrada com sucesso!!! \n No dia " + di + "/" + mes + "/" + ano + ". as " + horas + ":" + minutos + "h. \n Data do evento: "+ dia +"");
            cont1++
        }else{
            alert("- Cadastro não realizado \n - Não permitido por ter excedido o limite de cadastro ");  
        }
    } else {
        alert("- Cadastro não realizado \n - Data não atende aos requesitos ou membro menor de idade \n- Tente novamente");  
    }
}
