var valorArr = [];
var valor = 0 ;
var operador = null;
var total = 0;
var numero = 0;

function calculate(Num){
        valorArr.push(Num);
     numero = parseInt(valorArr.join(''));
     document.getElementById('result').value = numero;
}

function operacion(Opt){
    operador = Opt;
    valor = parseInt(document.getElementById('result').value);
    valorArr = [];

}

function getResult(){
    if(operador == '+'){

        total = valor+numero;
        document.getElementById('result').value = total;
    }
    if(operador == '-'){

        total = valor-numero;
        document.getElementById('result').value = total;
    }
    if(operador == '*'){

        total = valor*numero;
        document.getElementById('result').value = total;
    }
    if(operador == '/'){

        total = (valor)/(numero);
        document.getElementById('result').value = total;
    }    
}

function clearResult(){
    operador = null;
    total = 0;
    valor= 0;
    numero=0;
    valorArr = [];
    document.getElementById('result').value = 0;    


}
