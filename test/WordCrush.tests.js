describe('Test for the Word game function' , function(){
    it("It should return the longest word in a sentence ,'shipyard'" , function(){
        
        assert.equal("shipyard",longestWord("The dog jumped over the shipyard fence"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the longest word in a sentence ,'barked'" , function(){
        
        assert.equal("barked",longestWord("The yellow dog barked loud"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the shortest word in a sentence ,'the'" , function(){
        
        assert.equal("the",shortestWord("The dog jumped over the shipyard fence"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the shortest word in a sentence ,'up'" , function(){
        
        assert.equal("up",shortestWord("The dog barked loudly at the cat up the tree"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the shortest word in a sentence ,'up'" , function(){
        
        assert.equal("up",shortestWord("The dog barked loudly at the cat up the tree"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the length of words in a sentence ,'32'" , function(){
        
        assert.equal("32",wordLengths("The dog jumped over the shipyard fence"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the length of words in a sentence ,'18'" , function(){
        
        assert.equal("18",wordLengths("The dog barked loudly"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });


});
