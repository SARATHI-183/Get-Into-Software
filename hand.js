
    /*function validateform()
    {  
      var name=document.myform.name.value; 
      var x=document.myform.email.value;
      var phone=document.myform.phone.value;
      var password=document.myform.password.value;  
      var password1=document.myform.password1.value;
      var radios = document.getElementsByName("gender");
      var formValid = false;
      
      if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
      }
      /*
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/;
      if(uemail.value.match(mailformat))
      {
        alert("Valid email address!");
        return true;
      }
      else
      {
        alert("You have entered an invalid email address!");
        return false;
      }
      */ 
     /*
      var atposition=x.indexOf("@");  
      var dotposition=x.lastIndexOf(".");  
      if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address ");  
        return false;  
        }  

      if (password == "") {
              alert("Please enter your password");
              return false;
          }
      
      if(password != password1){
        alert("Password mismatch");
              return false;
      }
      if(password.length!= "")
      {
              var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
              if(regex.test(password) === false) 
              {    
                alert("Please enter a valid pwd");
                return false;
              }       
      }
      /*
      if(!myform.checkbox.checked)
      {
        alert("You must check the remember.");
        return false;
      }*/
/*
      if(phone==null || phone==""){
        alert("phone can't be blank");
        return false;
      }

      else if (phone.length!="") 
      {
            var regex1 = /^\d{10}$/;
            if(regex1.test(phone) === false)
            {
              alert("Phone number must be filled.");
              return false;
            }
      }
      
      
      var i = 0;
      while (!formValid && i < radios.length) {
          if (radios[i].checked) formValid = true;
          i++;        
      }
      if (!formValid) {
        alert("Select your gender");
        return formValid;
      }

    }*/

    window.addEventListener("load", start2, false );
    function start2()
    {
    document.getElementById("name").addEventListener("focus",focusone, false );
    document.getElementById("name").addEventListener("blur", blurone, false );
    document.getElementById("email").addEventListener("focus",focustwo, false );
    document.getElementById("email").addEventListener("blur", blurone, false );
    document.getElementById("inputPassword1").addEventListener("focus",focusthree, false );
    document.getElementById("inputPassword1").addEventListener("blur", blurone, false );
    document.getElementById("inputPassword2").addEventListener("focus",focusfour, false );
    document.getElementById("inputPassword2").addEventListener("blur", blurone, false );
    document.getElementById("ph").addEventListener("focus",focusfive, false );
    document.getElementById("ph").addEventListener("blur", blurone, false );
    document.getElementById("myform").addEventListener("submit",subfun, false );
    //document.getElementById("myform").addEventListener("reset",restfun, false );
    
    }

    function focusone() 
    {
      document.getElementById("help").innerHTML="Enter name"; 
    }
    function focustwo() 
    {
      document.getElementById("help").innerHTML="Enter email" ;
    }
    function focusthree() 
    {
      document.getElementById("help").innerHTML="Enter Password" ;
    }
    function focusfour() 
    {
      document.getElementById("help").innerHTML="Confirm Password" ;
    }
    function focusfive() 
    {
      document.getElementById("help").innerHTML="Enter Mobile Number" ;
    }
    function blurone() 
    { 
      document.getElementById("help").innerHTML="" ;
    }
    /*function subfun() 
    { 
      window.alert("Are you Sure to submit");
    }
    function restfun()
    {
      window.alert("Are you sure to reset");
    }*/
    

  function start()
	{
	document.getElementById("move").addEventListener("mousemove", moveone, false );
	document.getElementById("move").addEventListener("mouseout", leaveone, false );
  document.getElementById("picture").addEventListener("mouseover", over, false );
	document.getElementById("picture").addEventListener("mouseout", out, false );
	}
	
	function moveone()
	{
	document.getElementById("move").innerHTML ="GET FREE SOFTWARES";
	}

	function leaveone()
	{
	document.getElementById("move").innerHTML ="GET INTO SOFTWARE";
	}
	window.addEventListener( "load", start, false );
    
	function over()
	{
	 document.getElementById("picture").setAttribute( "src", "..//Images/Rado_T.jpg");
	}

	function out()
	{
	document.getElementById("picture").setAttribute( "src", "..//Images/New Project (1).png");
	}

  function handleOnFocus(x){
      x.style.color="";
      x.style.backgroundColor="lightblue";
  }
  function handleOnBlur(x){
    x.style.color="";
    x.style.backgroundColor="";
  }
  
  
  /*
  window.addEventListener("Load",starts,false);
  function starts()
  {
    document.getElementById("myform").addEventListener("submit",subfun,false);
  }
  function subfun()
  {
    window.alert("Thank you");
  }*/



 