

// console.log(x())

// function x(){
//     let arr=["and", "that", "the","on" ,"you"]

// let input=["i","am" , 'my',"way"]

// let obj={}
// for(let i=0;i<input.length;i++){
//     obj[input[i]] ? obj[input[i]]++ : obj[input[i]]=1
// }

// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]) return true
// }
// return false
// }


let arr=[1,2,3,4,5,6], n=arr.length
// o/p  2 3 4 5 6 -1
console.log(nge(n,arr))
function nge(n,arr){
    let stk=[], res=[]
    for(let i=n-1;i>=0;i--){
        while(stk.length!=0 && stk[stk.length-1]<=arr[i]){
            stk.pop()
        }

        stk.length==0 ? res.push(-1) : res.push(stk[stk.length-1])

        stk.push(arr[i])
    }

    return res.reverse()
}

let m=8
temp=[73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemp(m,temp))
// o/p 74 75 76 72 72 76 -1 -1
// o/p 1  2  6  5  5  6   0  0 index store kele
// o/p 1  1  4  2  1  1   0  0  res arr madhe store kartana i subtract karne

function dailyTemp(n,arr){
    let stk=[], res=[]
    for(let i=n-1;i>=0;i--){
        while(stk.length!=0 && arr[stk[stk.length-1]]<=arr[i]){
            stk.pop()
        }

        stk.length==0 ? res.push(0) : res.push(stk[stk.length-1] - i)

        stk.push(i)
    }

    return res.reverse()
}