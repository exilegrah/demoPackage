    
        var fnam;
        var lnam;
        
        var count;
        var par;
    
    
        var year
        var age
    
    function formDemo()
    {
        
       
         
        
          
         

       // alert(year);
       /* 
        */
        year = document.getElementById("isY");
        age = document.getElementById("isA");
         lnam = document.getElementById("isLastname").value;
         fnam = document.getElementById("isFirstname").value;
        par = document.getElementById("isPar").value;
        count = document.getElementById("isCoun").value;
        
        isFullName(fnam,lnam);
        isLocation(count,par);
        //validateAge(age);
        
              
       // lastword();
    }
    
    
    
    function lastword()
    {
        alert("Thank You")
    }
    
    
    function isLocation(c,p)
    {
        if (c==" " && p==" ")
        {
            document.getElementById("LebLoc").textContent="Please check country and Parish";
            
        } else if ( p==" ")
        {
            document.getElementById("LebLoc").textContent="Please check  Parish";
            
        } else if (c==" ")
        {
            document.getElementById("LebLoc").textContent="Please check country ";
        }
        else 
        {
            document.getElementById("LebLoc").textContent="";
           // document.getElementById("isPar").value = " ";
            //document.getElementById("isCoun").value = " ";
        }
    }
    
    
    function isFullName(f,l)
    {
        if (l==" " &&  f ==" ") 
        {
            document.getElementById("lebName").textContent="Please check your name";
        } else if (l == " ")
        {
            document.getElementById("lebName").textContent="Your last name is missing";
        } else if (f == " ") 
        {
            document.getElementById("lebName").textContent="Your first name is missing";
        }
        else 
        {
            document.getElementById("lebName").textContent="";
        }
        
        
    }
    
    function validateAge (val){
        var calAge= 2017 - year;
        
        
        
        
        
        if (val > 16)
        {
             document.getElementById("lebAge").textContent="You are too OLD";
        }else if (val < 16)
        {
             document.getElementById("lebAge").textContent="You are too YOUNG";
        }
        else 
        {
             document.getElementById("lebAge").textContent="please enter the age";
        }
        
        
        /*if (val == 0 && year == 0 )
        {
            document.getElementById("lebAge").textContent="Please check your Age and Year of birth";
        }else if (val== 0)
        {
            document.getElementById("lebAge").textContent="Please check your Age";
        }else if (year == 0)
        {
            document.getElementById("lebAge").textContent="Please check your Year of birth";
       /* }else if (calAge != val)
        {
            document.getElementById("lebAge").textContent="Your year was entered incorrectly";
        }else if ( (year >1999 && year <2001 ))
        {
            document.getElementById("lebAge").textContent="  " ;
        }
        else 
        {
            document.getElementById("lebAge").textContent="You are too OLD";
        }*/
    }
    
    
    
    
