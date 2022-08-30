function countAllFromTown(regNum, idNum) {
    var john = []
     var chibuzor = regNum.split(',');
   for (var i=0;i<chibuzor.length;i++) {
     const obiora = chibuzor[i].trim();
   if (obiora.includes(idNum)) {
     john.push(obiora);
   }
   }
    //  console.log(john.length)
     return john.length
     }
