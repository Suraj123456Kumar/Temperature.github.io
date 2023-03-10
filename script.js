let result;
        const myfun = () => {
            let temp = parseFloat(document.getElementById('temp').value);
  
            
            if (!Number.isInteger(temp)&&!Number.parseFloat(temp)) {
                document.getElementById('myresult').innerHTML = "Please Enter a Valid Number";
                return;
            }

            
           
           
            console.log(temp);
            let tempselector = document.getElementById('select_temp');
            let n = tempselector.options.selectedIndex;
            let selectionis = tempselector.options[n].value;
            
            if (selectionis == 'Fehranheit') { 
                

                result = ((temp * 1.8) + 32)
                document.getElementById('myresult').innerHTML = ` ${result.toFixed(3)} °F`
               
                
            }
            else {
                
                result = ((temp - 32) / 1.8);
                document.getElementById('myresult').innerHTML = `  ${result.toFixed(3)}  °C`
                
            }
        }