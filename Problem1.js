calculator(10,12,"+")
calculator(10,12,"-")
calculator(10,12,"*")
calculator(10,12,"/")

function calculator(a,b,operation){
    var result
switch(operation){
    case'+':
        result=a+b
        break
    case'-':
        result=a-b
        break
    case'*':
        result=a*b
        break
    case'/':
        result=a/b
}
console.log(`${a}${operation}${b}=${result}`)
}