function joinArrays(x,y,z) {
    // let result = [...x, ...y, ...z].sort((a, b) => a-b );
    let result = [...x, ...y, ...z];
    result.sort((a, b) => {
        return a - b;
    })

    return result;
}

const x = [2,3];
const y = [0,1];
const z = [4,5];

console.log(joinArrays(x,y,z));
