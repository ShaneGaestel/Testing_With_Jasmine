describe('calulateTaxes tests', function () {
    it('should calculate the high tax bracket', function () {
        expect(calcaulateTaxes(50000)).toEqual(12500);
        expect(calcaulateTaxes(100000)).toEqual(25000);
    
       })
    it('should calculate the low tax bracket', function () {
        expect(calcaulateTaxes(10000)).toEqual(1500);
        expect(calcaulateTaxes(1000)).toBe(150);
        expect(calcaulateTaxes(0)).toBe(0);
    })

    it('should reject invalid incomes', function () {
        expect(() => calcaulateTaxes('aksljdlkas')).toThrowError();
        expect(() =>calcaulateTaxes([])).toThrowError();
        expect(() =>calcaulateTaxes(true)).toThrowError();
    })
})

describe('removeDupes tests', function () {
    it('should remove duplicates from an array', function(){
        expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
        expect(removeDupes([1,2,3])).toEqual([1,2,3])
        expect(removeDupes([1,2,3])).toBeInstanceOf(Array)
    })
    it('should remove duplicates from a string', function(){
        expect(removeDupes('hello')).toEqual('helo')
        expect(removeDupes('hello')).toBeInstanceOf(String);
    })
})

describe('remove tests', function () {
    it('should remove value from array', function () {
        expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6)
    }) 
})

