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