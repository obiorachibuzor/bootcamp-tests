describe('Test my countRegNumberFunction' , function(){
    it('it should return the number of registration numbers in the string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should return the number of registration numbers in the string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        assert.deepEqual([2,2],[2,2]);
    });

});
