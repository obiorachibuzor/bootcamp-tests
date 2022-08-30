function allFromTown(regNum, idNum) {
    const ikenna = []
    const chibuzor = regNum.split(',');
    for (var i=0;i<chibuzor.length;i++) { 
    //console.log(chibuzor)
    const obiora = chibuzor[i].trim();  
     if (obiora.startsWith(idNum)) {
       ikenna.push(obiora);
     } 
    }
    return ikenna
  }
