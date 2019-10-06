<<<<<<< HEAD
function rand(length,ranges) {
    var str = "";                                                       // the string (initialized to "")
    var flag = true;														// Required to make the loop complete its iteration
    while(length!=0) {                                                   // repeat this length of times
      var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
      var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
          max = ranges[ind][1].charCodeAt(0);                           // get the maximum char code allowed for this range
      var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
      
      if(ranges[ind][0]=="!"){										  // checking in case of special chracters no Number or Alphabet appears
      var patt = new RegExp("^[(!#$%&()*+,-./:;<=>?@\^_`{|}~)]+");
      if(patt.test(String.fromCharCode(c))){
  
      flag=true;															// If special chracter than proceed normally
      }
      else{
  
      flag=false;                                                        // Until the current character is not special re run the loop do not
                                                                         // decrement the length and append to string
      }
      }
      
      if(flag){														  //Flag should be true in order to proceed the loop
      str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
  
      length=length-1;
      }
    }
    return str;                                                         // return str
  }
  
  function askLength(){												  //Prompting User to Enter the password Length
  var min = 8;
  var max = 128;
  while(true){														  //Keep on prompting until the correct range for length is entered
  
   var m=window.prompt("How many characters would you like your password to contain.");

   if(m >= min && m<= max){
   break;
   }
   alert("Your Password length should have min "+min+" characters and max of "+max+" characters or it is a null or an invalid value");
   }
   return m;
  }
  
  function generate() {
   var length = askLength();
   
   var choice =[];
   
   if(confirm("Click Ok to include Special Characters")){
   choice.push(["!","~"]);
   }
   
   if(confirm("Click Ok to include Numeric Characters")){
   choice.push(["0", "9"]);
   }
   
   if(confirm("Click Ok to include Capital/UpperCase Characters")){
   choice.push(["A", "Z"]);
   }
   
   if(confirm("Click Ok to include Small/LowerCase Characters")){
   choice.push(["a","z"]);
   }
   
   
   
    document.getElementById("msg").value= rand(length, choice);
  }

  function copyToClipBoard(){


/* Get the text field */
var copyText = document.getElementById("msg");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /*For mobile devices*/

/* Copy the text inside the text field */
document.execCommand("copy");

/* Alert the copied text */
alert("Copied the text: " + copyText.value);

=======
function rand(length,ranges) {
    var str = "";                                                       // the string (initialized to "")
    var flag = true;														// Required to make the loop complete its iteration
    while(length!=0) {                                                   // repeat this length of times
      var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
      var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
          max = ranges[ind][1].charCodeAt(0);                           // get the maximum char code allowed for this range
      var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
      
      if(ranges[ind][0]=="!"){										  // checking in case of special chracters no Number or Alphabet appears
      var patt = new RegExp("^[(!#$%&()*+,-./:;<=>?@\^_`{|}~)]+");
      if(patt.test(String.fromCharCode(c))){
  
      flag=true;															// If special chracter than proceed normally
      }
      else{
  
      flag=false;                                                        // Until the current character is not special re run the loop do not
                                                                         // decrement the length and append to string
      }
      }
      
      if(flag){														  //Flag should be true in order to proceed the loop
      str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
  
      length=length-1;
      }
    }
    return str;                                                         // return str
  }
  
  function askLength(){												  //Prompting User to Enter the password Length
  var min = 8;
  var max = 128;
  while(true){														  //Keep on prompting until the correct range for length is entered
  
   var m=window.prompt("How many characters would you like your password to contain.");

   if(m >= min && m<= max){
   break;
   }
   alert("Your Password length should have min "+min+" characters and max of "+max+" characters or it is a null or an invalid value");
   }
   return m;
  }
  
  function generate() {
   var length = askLength();
   
   var choice =[];
   
   if(confirm("Click Ok to include Special Characters")){
   choice.push(["!","~"]);
   }
   
   if(confirm("Click Ok to include Numeric Characters")){
   choice.push(["0", "9"]);
   }
   
   if(confirm("Click Ok to include Capital/UpperCase Characters")){
   choice.push(["A", "Z"]);
   }
   
   if(confirm("Click Ok to include Small/LowerCase Characters")){
   choice.push(["a","z"]);
   }
   
   
   
    document.getElementById("msg").value= rand(length, choice);
  }

  function copyToClipBoard(){


/* Get the text field */
var copyText = document.getElementById("msg");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /*For mobile devices*/

/* Copy the text inside the text field */
document.execCommand("copy");

/* Alert the copied text */
alert("Copied the text: " + copyText.value);

>>>>>>> fd9a55a4478ce6ae14712852d9460dc2653b96d3
  }