// Paramentros e Retornos são opcionais em JS

function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17 , 19, 22, 55))
console.log(area(5, 7))
