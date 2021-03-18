function gerar(){

    var numero0 = window.document.getElementById('numero');
    var resultado = document.getElementById('resultado');
    
    resultado.innerHTML='<br>'
    resultado.style.textAlign ='center'
    if(numero0.value.length==0){
        window.alert('[ERROR]Por favor insira um número');
        resultado.innerHTML+= `Insira um número acima`;
    }else{
        var numero = Number(numero0.value)
    for(var tab = 0; tab <= 10; tab++){
        var item = document.createElement('option')
        resultado.innerHTML +=`${numero} x ${tab} = ${numero*tab} <br>`
    }
}


}