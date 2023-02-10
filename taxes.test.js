it('should calculate the high tax bracket', function () {
    expect(calcaulateTaxes(50000)).toEqual(12500);
    expect(calcaulateTaxes(100000)).toEqual(25000);

   })
it('should calculate the low tax bracket', function () {
    expect(calcaulateTaxes(10000)).toEqual(1500);
    expect(calcaulateTaxes(1000)).tobe(150);
    expect(calcaulateTaxes(0)).tobe(0);
})