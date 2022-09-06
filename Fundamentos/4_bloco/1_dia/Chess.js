let part = "pawn";

switch (part) {
    case "king":
        console.log("Todas as direções, 1 casa")
    break
    case "queen":
        console.log("Todas as direções, ilimitado")
    break
    case "bishop":
        console.log("Diagonal, ilimitado")
    break
    case "tower":
        console.log("Linha, ilimitado")
    break
    case "horse":
        console.log("L")
    break
    case "pawn":
        console.log("Pra frente, 1 casa")
    break
    default:
        console.log("Peça invalida")
}