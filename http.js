const http = require('http')

// http.createServer(function(req, res){
//     console.log('Nueva peticion')
//     console.log(req.url)

//     //escribir respuesta al usuario
//     res.writeHead(201, { 'Content-Type': 'text/plain' })

//     res.write('Hola ya se usar http de node.js!')

//     res.end()
//     //
// }).listen(3000)


http.createServer(router).listen(3000)


function router(req, res){
    console.log('Nueva peticion')
    console.log(req.url)

    switch (req.url){
        case '/hola':
            res.write('Hola, que tal')
            res.end()
            break;

        default:
            res.write('Error 404: No se lo que quieres')
            res.end()

    }
}

console.log("Escuchando http en el puerto 3000!")