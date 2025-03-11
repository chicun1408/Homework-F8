
function arrange(x){
    var i, a, j
    for(i=0; i<x.length;i++){
        for(j=x.length-1; j>i; j--){
            if(x[i]>x[j]){
                a=x[i]
                x[i]=x[j]
                x[j]=a
            }
        }
    }
    return x
}
const value=arrange([1, 2, 3, 5, 4, 22, 14, 13, 14])
console.log(value)