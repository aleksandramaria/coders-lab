function getEvenSum(n) {
    var sum = 0;
    for(var i=0; i<=n; i++) {
        if(i % 2 == 0) {
            sum += i;
        }
    } return sum;
}

console.log(getEvenSum(5));
console.log(getEvenSum(20));
console.log(getEvenSum(2));