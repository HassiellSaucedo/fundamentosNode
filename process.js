//const process = require('process')

process.on('beforeExit', () =>{
    console.log('El proceso esta por acabar')
})

process.on('exit', () =>{
    console.log('El proceso acabo')
    setTimeout(() =>{
        console.log('Esto nunca se va a ver DDD:')
    },0)
})

process.on('uncaughtException', (err, origen) =>{
    console.error('Vaya se nos ha olvidado capturar un error D:')
    console.error(err)
})

