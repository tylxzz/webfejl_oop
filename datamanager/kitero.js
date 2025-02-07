const sum = (a, b) => {
    return a + b
}

console.log(sum(4, 5))

const obj = {}
obj.calculate1 = sum
console.log(obj.calculate1(4, 5))

obj.calculate2 = (callback) => {
    const res = callback(4, 5)
    return res
}

res1 = obj.calculate2((a, b) => {
    return a + b
})

res2 = obj.calculate2((a, b) => {
    return a * b
})

console.log(res1)
console.log(res2)

obj.calculate3 = (a, b, callback) => {
    return callback(a, b)
}

res3 = obj.calculate3(4, 5, sum)
console.log(res3)

const theFunction = () => {
    const sz = 10
    const res4 = obj.calculate3(2, 7, (a, b) => {
        return a * sz + b
    })
    console.log(res4)
}

theFunction()