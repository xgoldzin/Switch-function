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

function conta(){
    let pd1= document.getElementById("nun1").value
    let pd2 = document.getElementById("nun2").value
    let pd3 = document.getElementById("nun3").value
    let pd4 = document.getElementById("nun4").value
    let pd5 = document.getElementById("nun5").value
    let pd6 = document.getElementById("nun6").value
    let pd7 = document.getElementById("nun7").value
    const somaConta = pd1 + pd2 + pd3 + pd4 + pd5 + pd6 + pd7
    document.getElementById("respostaConta").innerText = somaConta
}