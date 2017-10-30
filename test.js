
//无参数，无返回值
function book(){
    console.log(1)
}
book()

//有参数，无返回值
function newbook(colour){
    console.log('hi:colour')
}
newbook('women')

//有参数，有返回值
let a = 100
let b = 200
function total(){
    return a-b
}
let newtotal = total(a,b)
console.log(newtotal)

//无参数，有返回值