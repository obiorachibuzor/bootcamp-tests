// console.log(greet("Obiora"));
describe('Test my greet function' , function(){
    it("It should return ,'Hello,Obiora'when called with 'Obiora'" , function(){
        
        assert.equal("Hello, Obiora",greet("Obiora"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,John'when called with 'John'" , function(){
        
        assert.equal("Hello, John",greet("John"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});
// console.log(greet('Obiora'))
