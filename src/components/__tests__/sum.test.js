import { Sum } from "../sum"

test('Sum function should calculate the sum of 2 numbers', () => {  
    const result = Sum(9, 4);

    //Assertion 
    expect(result).toBe(13); 
});