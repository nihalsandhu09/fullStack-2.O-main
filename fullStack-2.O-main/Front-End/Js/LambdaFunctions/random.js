console.log(Math.floor(Math.random()*10+1))

function findMinMax(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i =1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
        console.log(`MAximun: ${max}`)
        console.log(`Minimum: ${min}`)
    
}

let arr = [1,2,3,4,5,6,7,8,9]

findMinMax(arr)