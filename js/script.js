function opera(){
    let numero1 = Number(document.getElementById("nun1").value)
    let numero2 = Number(document.getElementById("nun2").value)
    let operacao = document.getElementById("ope").value
    let resultado
    switch(operacao){
        case "adicao":
            resultado = (numero1 + numero2)
            break
        case "subtracao":
            resultado = numero1 - numero2
            break
        case "multiplica":
            resultado = numero1 * numero2
            break
        case "divisao":
            resultado = numero1 / numero2
            break
    }
    document.getElementById("resposta").innerText = resultado
}

function cargo(){
    let salario = Number(document.getElementById("slr").value)
    let nivel = document.getElementById("crg").value
    let salarioF
    switch(nivel){
        case "junior":
            salarioF = (salario + (salario * 10 /100))
            break
        case "pleno":
            salarioF = (salario + (salario * 7.5/100))
            break
        case "senior":
            salarioF = (salario + (salario * 5/100))
            break
    }
    document.getElementById("respsalario").innerText = `Seu novo salário é R$${salarioF},00`
}
let totalConta = 0
function conta(){
    let produto = document.getElementById("prod1").value
    let pd1 = 0
        switch(produto){
            case "001":
                pd1 += 30;
                break;
            case "002":
                pd1 += 45;
                break;
            case "003":
                pd1 += 60;
                break;
            case "004":
                pd1 +=7;
                break;
            case "005":
                pd1 +=10;
                break;
            case "006":
                pd1 += 14;
                break;
            case "007":
                pd1 += 18;
                break;
        }
    totalConta += pd1
    document.getElementById("respostaConta").innerText = `O total da conta é R$${totalConta}`
}