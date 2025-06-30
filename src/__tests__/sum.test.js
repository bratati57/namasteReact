import { sum } from "../components/sum";
test("sum of two numbers", ()=>{
    const result=sum(2,5);
    //assertion

    expect(result).toBe(7)
})