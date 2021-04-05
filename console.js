var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 5,
        b: 'Q'
    },
]

function function1(){
    console.group('Funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto tambien!')
    function2()
    console.log('Hemos vuelto a la funcion 1 :O')
    console.groupEnd('Funcion 1')

}

function function2(){
    console.group('Funcion 2')
    console.log('Ahora estamos en la funcion 2!')
    console.groupEnd('Funcion 2')
}

console.log('Algo')
console.group()
console.error('Error!')
console.warn('Warning!')
console.groupEnd()
console.table(tabla)
console.count('Algo')
console.count('Algo')
console.count('Algo')
console.countReset('Algo')
console.count('Algo')


function1()
