function hola(nombre, callback) {
    setTimeout(function(){
        console.log(`Hola, ${nombre}`)
        callback()
    }, 1000)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla...')
        callbackHablar()
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log(`Adios, ${nombre}`)
        otroCallback()
    }, 1000)
    
}

function conversacion(nombre, veces, callback){
    if (veces >= 0){
    hablar(function(){
        conversacion(nombre, --veces, callback)
    })
} else{
    adios('Hassiell', callback)
}
}

//------------------------

console.log('Iniciando proceso...')
hola('Hassiell', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado!...')
    })
})
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios('Hassiell', function(){
//                     console.log('Terminando proceso...')
//                 })
//             })
//         })  
//     })
// })
