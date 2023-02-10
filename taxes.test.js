it('should calculate the high tax bracket', function () {
    expect(calcaulateTaxes(50000)).toEqual(12500);
    expect(calcaulateTaxes(100000)).toEqual(25000);

   })
it('should calculate the low tax bracket', function () {
    expect(calcaulateTaxes(10000)).toEqual(1500);
    expect(calcaulateTaxes(1000)).toBe(150);
    expect(calcaulateTaxes(0)).toBe(0);
})

it('should remove duplicates from an array', function(){
    expect(removeDupes([1,1,2,2,3,4])).toBe([1,2,3,4])
})