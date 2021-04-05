async function hola(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(`Hola, ${nombre}`)
            resolve(nombre)
        }, 1000)
    })

}

async function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla bla...')
            resolve()
        },1000)
    })
}

async function adios(nombre, otroCallback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`Adios, ${nombre}`)
            resolve()
            reject('Hay un error')
        }, 1000)
    })
}

//----
async function main(){
    let nombre = await hola('Hassiell')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('Terminamos el proceso')


}
console.log('Empezamos el proceso')

main()
