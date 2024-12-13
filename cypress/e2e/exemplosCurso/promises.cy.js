// it('Sem Testes Ainda', () => {})

// Dese jeito ele a função system não espera o tempo que a função getSomething leva para responder
// const getSomething = () => {
//     setTimeout(() => {
//         return 11
//     }, 1000)
// }

// const system = () => {
//     console.log(('init'));
//     const something = getSomething();
//     console.log(`O valor de something é: ${something}`)
//     console.log('end')        
// }

// system()

/// Com CALLBACK
// const getSomething = callback => {
//     setTimeout(() => {
//         callback(12)
//     }, 1000)
// }

// const system = () => {
//     console.log(('init'));
//     getSomething(some => {
//         console.log(`O valor de something é: ${some}`)
//         console.log('end')
//     })        
// }

// system()


///Com Promise
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
}

// const system = () => {
//     console.log(('init'));
//     const prom = getSomething()
//     prom.then(some => {
//         console.log(`O valor de something é: ${some}`)
//         console.log('end')
//     })   
// }

///Com async e await
const system = async () => {
    console.log(('init'));
    const some = await getSomething()
    console.log(`O valor de something é: ${some}`)
    console.log('end')
}

system()



