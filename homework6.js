const printDiamond = function(height, char){
    if (height%2===0){
        height = height + 1;
    }
    const firstLine = function(n, c){
      let line = '';
      
      for(let i=0; i<n; ++i){
        line = line + c;
        
      }
      
      return line;
    };
    
    const helper = function(spacesN, lineN, line){
      
      if(line > height){
        return'';
      }
      
      console.log(firstLine(spacesN,' ') + firstLine(lineN, char));
      
      if(line <= (height-1)/2){
        helper(spacesN-1, lineN+2, line+1);
      } else {
        helper(spacesN+1, lineN-2, line+1);
      }
    };
    
    helper((height-1)/2, 1, 1);
    
  };

  // for loop

  const printDimond = function(height, char){
    if (height%2===0){
        height = height + 1;
    }
    const firstLine = function(n, c){
      let line = '';
      
      for(let i=0; i<n; ++i){
        line = line + c;
        
      }
      
      return line;
    };
    
    let spaceN = (height-1)/2;
    let lineN = 1;
    for(let i=1; i<= height; i++){
      console.log(firstLine(spaceN, ' ')+ firstLine(lineN, char));
      if(i <= height/2){
        spaceN = spaceN - 1;
        lineN = lineN + 2;
      } else {
        spaceN = spaceN + 1;
        lineN = lineN - 2;
      }
    }
};

