    
        var fnam;
        var lnam;
        
        var count;
        var par;
    
    
        var year
        var age
    
    function formDemo()
    {
              
         year = document.forms["demoForm"]["isYear"].value;
         age = document.forms["demoForm"]["isAge"].value;
         
         lnam = document.forms["demoForm"]["lName"].value;
         fnam = document.forms["demoForm"]["fName"].value;
         
         count = document.forms["demoForm"]["isCountry"].value;
         par = document.forms["demoForm"]["isParish"].value;

        //alert(year);
        validateAge(age);
        fullNamelen(lnam,fnam);
        isLocation(count,par);
        //lastword();
        
       

    }
    function lastword()
    {
        alert("Thank You")
    }
    
    
    function isLocation(c,p)
    {
        if (c=="" && p=="")
        {
            document.getElementById("LebLoc").textContent="Please check country and Parish";
            
        } else if ( p=="")
        {
            document.getElementById("LebLoc").textContent="Please check  Parish";
            
        } else if (c=="" )
        {
            document.getElementById("LebLoc").textContent="Please check country ";

            
        }
        else 
        {
            document.getElementById("LebLoc").textContent="";
        }
    }
    
    
    function fullNamelen(l,f)
    {
        if (  f =="" &&  l =="") 
        {
            document.getElementById("lebName").textContent="Please check your name";
        } else if (l == null || l =="" )
        {
            document.getElementById("lebName").textContent="Your last name is missing";
        } else if (f == null || f =="") 
        {
            document.getElementById("lebName").textContent="Your first name is missing";
        }
        else 
        {
            document.getElementById("lebName").textContent="";
        }
        
        
    }
    
    function validateAge (val){
        var calAge= 2015 - year;
        
        if (val ==0 && year ==0 )
        {
            document.getElementById("lebAge").textContent="Please check your Age and Year of birth";
        }else if (val==0)
        {
            document.getElementById("lebAge").textContent="Please check your Age";
        }else if (year ==0)
        {
            document.getElementById("lebAge").textContent="Please check your Year of birth";
        }else if (calAge != val)
        {
            document.getElementById("lebAge").textContent="Please check your Age and Year of birth";
        }else if ( (year >1999 && year <2001 ))
        {
            document.getElementById("lebAge").textContent="  " ;
        }
        else 
        {
            document.getElementById("lebAge").textContent="You are too OLD";
        }
    }
    
    
    
    
