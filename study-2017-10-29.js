
//函数使用:无参数，无返回值
// let username = function(){
//     console.log('haha')
// }
// username()


// //函数使用:有参数，有返回值

// let age = function(a,b){
//     return a*b
//  }
// let nowage = age(1,20)
// console.log(nowage)


// //函数使用：有参数，无返回值
// let adress = function(A){
//     console.log("shanghai")
// }
// adress()


//函数使用：无参数，有返回值
// let newsex = "女";
// let sex = function(){
//     return newsex
// }
// // let nowsex = sex()
// console.log(sex())


// //计算圆面积
// let area_of_circle = function(π,r){
//     return π*r*r
// }
// let nowarea = area_of_circle(3.14,8)
// console.log(nowarea)




//////////////////////////////////////////////
function all(){
    this.username = function(){
        console.log('haha')
    }
    
}
//     this.age = function(a,b){
//     return a*b
// }
// let nowage = age(1,20)
// console.log(nowage)
//     this.adress = function(A){
//     console.log("shanghai")
// }
// adress()

// this.newsex = "女";
// this.sex = function(){
//     return newsex
// }
// // let nowsex = sex()
// console.log(sex())

// //计算圆面积
// this.area_of_circle = function(π,r){
//     return π*r*r
// }
// this.nowarea = area_of_circle(3.14,8)
// console.log(nowarea)

module.exports = {
    all:all
}