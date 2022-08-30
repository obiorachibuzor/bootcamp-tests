function mostProfitableDepartment(x){
    var dataMap = {};
   for (var i = 0; i < x.length; i++){
   var list = x[i];
    dataMap[list.department] = 0;  
     }
    //  console.log(dataMap)
     for (var i = 0; i < x.length; i++){
   var list = x[i];
   var salesTotal = dataMap[list.department];
   salesTotal += list.sales;
     dataMap[list.department] = salesTotal;
      
     }
        //  console.log(dataMap)
   
     var mPD = "";
     var hS = 0;
     for (const mostDep in dataMap ){
       if(dataMap[mostDep] > hS){
       hS = dataMap[mostDep];
             mPD = mostDep;
       
       }
       
       
       }
     return mPD;
   }
   
   function mostProfitableDay(x){
    var dataMap = {};
   for (var i = 0; i < x.length; i++){
   var list = x[i];
    dataMap[list.day] = 0; 
   
     }
     for (var i = 0; i < x.length; i++){
   var list = x[i];
   var salesTotal = dataMap[list.day];
   salesTotal += list.sales;
     dataMap[list.day] = salesTotal;
      
     }
     var mPDay = "";
     var hS = 0;
     for (const mostDay in dataMap ){
       if(dataMap[mostDay] > hS){
       hS = dataMap[mostDay];
             mPDay = mostDay;
       }
         
    }
     return mPDay;
   }
