function otraFuncion(){
    return seRompe()
}

function seRompe(){
    return 3 + z
}
function seRompeAsincrono(cb){
    setTimeout(function (){
        try{
            return 3 + z
        } catch (err){
            console.error('Error en mi funcion asincrona')
            cb(err)
        }
    },1000)
}

try{
  //  otraFuncion()
    seRompeAsincrono(function(err){
        console.error(err.message)
    })
} catch (err){
    console.error('Vaya, ha ocurrido un error')
    console.error(err.message)
    console.log('Pero no pasa nada, lo hemos capturado!')
}

console.log('Esto de aqui esta al final!')