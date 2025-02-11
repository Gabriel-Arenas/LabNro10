// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    return arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    return arreglo.length > 0 ? Math.max(...arreglo) : undefined;
}
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    return arreglo.filter(num => num % 2 === 0);
}
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares

// Reto 4: Contar Vocales
function contarVocales(texto) {
    const vocales = "aeiouAEIOU";
    return [...texto].filter(letra => vocales.includes(letra)).length;
}
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    return [...arreglo].reverse();
}
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    if (notas.length === 0) return 0; // Manejo de caso vacío
    return notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
}
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    return [...texto].filter(caracter => caracter === letra).length;
}
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    return [...new Set(arreglo)];
}
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados

// Reto 9: Palíndromo
function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    return textoLimpio === [...textoLimpio].reverse().join("");
}
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no