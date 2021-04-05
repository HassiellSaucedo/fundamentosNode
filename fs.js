const fs = require ('fs')
const myFile = './archivo.txt'
function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        console.log(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No he podido escribirlo', err)

        } else{
            console.log('Se ha escrito correctamente')
        }

    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb)
}

escribir(myFile, 'Soy un archivo nuevo', console.log)
leer(myFile, console.log)
borrar(myFile, console.log)