var valorArr = [];
var valor = 0 ;
var operador = null;
var total = 0;
var numero = 0;

function mostrar(cont){
    document.getElementById('result').value = cont;
}

function calculate(Num,callb){
        valorArr.push(Num);
     numero = parseInt(valorArr.join(''));
     callb(numero);
     console.log(Num);
}

function operacion(Opt){
    operador = Opt;
    valor = parseInt(document.getElementById('result').value);
    valorArr = [];

}

function getResult(){
    if(operador == '+'){

        total = valor+numero;
        console.log(typeof(numero));
        calculate(total,mostrar);
    }
    if(operador == '-'){

        total = valor-numero;
        mostrar(total);
    }
    if(operador == '*'){

        total = valor*numero;
        mostrar(total);
    }
    if(operador == '/'){

        total = (valor)/(numero);
        mostrar(total);
    }    
}

function clearResult(){
    operador = null;
    total = 0;
    valor= 0;
    numero=0;
    valorArr = [];
    mostrar(0);


}
