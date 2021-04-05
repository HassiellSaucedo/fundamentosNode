function hola(nombre, callback) {
    setTimeout(function(){
        console.log(`Hola, ${nombre}`)
        callback()
    }, 1000)
}

function adios(otroNombre, otroCallback){
    setTimeout(function(){
        console.log(`Adios, ${otroNombre}`)
        otroCallback()
    }, 1000)
    
}

console.log('Iniciando proceso...')

hola('Hassiell',function(){
    adios('Hassiell', function(){
    console.log('Terminando proceso...')
        
    })
})
