function fun(param) {
    console.log(param.nev)
}


function funa() {
    console.log(this.nev)
}

const funb = function(param) {
    console.log(param.nev)
}

const func = (param) => {
    console.log(param.nev)
}

const obj = {
    funA: (param) => {
        console.log(param.nev)
    },
    funB: (param) => {
        console.log(param.eletkor)
    }
}

const asd = fun
const korte = funa.bind({nev: 'Lajos'})

fun({nev: "ding"})
asd({nev: "dong"})
korte()
funb({nev: "asd"})
func({nev: "asd"})
obj.funA({nev: 'shimura'})