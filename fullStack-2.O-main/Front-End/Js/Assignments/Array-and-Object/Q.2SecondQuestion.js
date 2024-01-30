/** 2. The following is an array of 10 students ages:
 * => const ages = [19, 22, 19, 24, 20, 25, 2i, 24, 25, 24#
8 Sort the arra> an" fin" the min an" maa age`
8 Fin" the me"ian age(one mi""le item or two mi""le items divided by two
8 Fin" the average age(all items "ivi"e" b> number of items^
8 Fin" the range of the ages(maa minus min^
8 Compare the value of (min - average) an" (maa - average), use abs() metho"
 */


// Task 1 
// Sort the array and find the min and max age`
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

 const agesBySort = ages.sort((a,b)=>{
    return a - b;


})
 console.log(agesBySort)
// const ValuesFromSet = new Set(agesBySort)

// crating new Array from Sets  for not to add any duplicate 

// const newArrayFromSets = Array.from(ValuesFromSet)
// console.log(newArrayFromSets)
function findMinandMaxAge(array){
   
 const MinAge = Math.min(...array)
 const MaxAge = Math.max(...array)

 console.log(`minimu value in this array is ${MinAge} , and Max value in this array is ${MaxAge}`)
}


// findMinandMaxAge(newArrayFromSets)
findMinandMaxAge(agesBySort)



// Find the Average Age 

// so we wiil use our sortedArray here  
let sum  = 0 ;
for(let i =1;i<agesBySort.length;i++){
   
    sum +=  agesBySort[i]
 
   
}
const average = sum / agesBySort.length

console.log(`Average age: ${average}`)
 
// Find the range of the ages max minus min