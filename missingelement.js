let arr=[1,2,4,6,7];
let b=[];
let j=0;
for(let i=0;i<arr.length-1;i++){
    if(arr[i+1]-arr[i]>1){
    let count=0;
    count=arr[i];
    while(count<arr[i+1]){
        b[j++]=++count
        ++count;
    }
}

}

console.log(b);
