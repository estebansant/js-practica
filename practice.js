function factorial (n){
    if (n <= 1) return 1;

    return n * factorial (n-1);
};

console.log(factorial(5))

const sumarLista = (lista) => {
    if (lista.length === 0) return 0;

    const [cabeza,...cola] = lista;
    return cabeza + sumarLista(cola)
} ;

console.log(sumarLista([1,2,3,4,5,6]));

const creadorDeLista = (n,lista) => {
    if (n===0) return lista;

    return creadorDeLista(n-1,lista.concat([n]));
}

const conteoRegresivo = (n) => {
    if (n === 0) return [];

    const lista = [];

    return creadorDeLista(n,lista);

}

console.log(conteoRegresivo(10))

const buscadorEnArray = (e,lista) => {
    if (lista.length === 0) return false;

    const [head, ...tail] = lista;
    if (e == head) return true;

    else return buscadorEnArray(e,tail);
}

console.log(buscadorEnArray(10,[1,2,3,4,5]))

const aplanadorDeListas = (lista) => {
    if (lista.length === 0) return lista;

    const [head, ...tail] = lista;

    if (Array.isArray(head)) {
        return [...aplanadorDeListas(head), ...aplanadorDeListas(tail)]
    } else {
        return [head, ...aplanadorDeListas(tail)]
    }
}

const listaLocal = [1, [2, 3], [4, [5, 6]]];
console.log(aplanadorDeListas(listaLocal));

const sumarListaAnidada = (lista) => {
    if (lista.length === 0) return 0

    return (sumarLista(aplanadorDeListas(lista)))
}

console.log(sumarListaAnidada(listaLocal));

const sumarListaObjetos = (obj) => {
    const array = Object.keys(obj)
    if (array.length === 0) return 0
    let suma = 0

    for (const e in obj) {
        suma += obj[e]
    }

    return suma
    
}

const inventario = {
    manzanas: 10,
    peras: 5,
    uvas: 0,
    sandias: 2
};

console.log(sumarListaObjetos(inventario))

const calcularPesoTotal = (disco) => {
    if (Object.keys(disco).length === 0) return 0;

    let suma = 0

    for (const elemento in disco){
        const valor = disco[elemento]
        if (typeof valor === 'number') {
            suma += valor
        } else if (typeof valor === 'object'){
            suma += calcularPesoTotal(valor)
        }
    }

    return suma
}

const sistemaArchivos = {
    "Documentos": {
        "tesis.doc": 5,
        "fotos": {
            "verano.jpg": 2,
            "invierno.jpg": 3
        }
    },
    "musica.mp3": 10,
    "notas.txt": 1
};

console.log("Calcular peso", calcularPesoTotal(sistemaArchivos));

const precios = [10, 25, 100];

const preciosFormateados = precios.map((num) => {
    return `$${(num.toFixed(2))}`
});

console.log(preciosFormateados);

const movimientos = [100, -50, 200, -30, 10];

const ingresosPositivos = movimientos.filter((operacion) => {
    return operacion > 0
}).map((elemento) => {
    return `$${elemento.toFixed(2)}`
})

console.log("Ingresos Banco", ingresosPositivos)

const balanceTotal = movimientos.reduce((acumulador, valorActual) => {
    return acumulador + valorActual
}, 0)

console.log("Balance Total", balanceTotal)

const conteoDeMovimientos = movimientos.reduce((acumulador, valorActual) => {
    if (valorActual > 0) {
         acumulador["ingresos"]+=1
    } else {
        acumulador["gastos"] +=1
    }
    
    return acumulador
}, {ingresos: 0, gastos: 0})

console.log(conteoDeMovimientos)

const frutas = ['manzana', 'pera', 'manzana', 'uva', 'manzana', 'pera']

const comprobarFruta = frutas.reduce((acc, el) => {
    if (acc[el]) {
        acc[el] += 1
    } else {
        acc[el] = 1
    }
    return acc
}, {})

console.log(comprobarFruta)

const frase = "Hola mundo, tengo una propuesta para ti. Vamos a aprender JS"

const cantidadDeLetras = frase.toLowerCase().split("").reduce((acc,letra) => {
    if (letra === " " || letra ==="," || letra ===".") return acc

    if (acc[letra]){
        acc[letra] +=1
    } else {
        acc[letra] = 1
    }
    return acc
}, {})

console.log(cantidadDeLetras)