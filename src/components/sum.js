export const Sum = (a, b) => {
    if(b){
        return Sum(a + b);
    } else {
        return a;
    }
}