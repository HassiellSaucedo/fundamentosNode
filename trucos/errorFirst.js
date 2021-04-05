function asincrona(callback){
    setTimeout(function (){
        try{
            let a = 3+z
            callback(null, a)
        } catch (err) {
            callback(err)
        }
    },1000)
}
try{
    asincrona(function (err, dato){
        if(err){    
         console.error('Tenemos un error')
            console.error(err)
            throw err
            return false
    
        }
    
    })
} catch (err){
    console.error('Hemos capturado un error')
    console.error(err)
}
