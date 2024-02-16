document.addEventListener('DOMContentLoaded', 
function() {
    const numberInput = document.getElementById('first');
  
    // Clear the textbox when clicked
    numberInput.addEventListener('click',
     function() {
      if (numberInput.value === 'Enter the First Number') {
        numberInput.value = '';
      }
    }
    
    );
 
  numberInput.addEventListener('blur', function() {
    if (numberInput.value.trim() === '') {
      numberInput.value = 'Enter the First Number';
    }
  });
  const Number22=document.getElementById('second');
    Number22.addEventListener('click',
    function(){
      if(Number22.value=='Enter the Second Number')
      Number22.value='';
    });
    Number22.addEventListener('blur',
    function(){
      if(Number22.value.trim()=='')
      Number22.value='Enter the Second Number';
    });
});
function calc(){
   var a= parseInt(document.getElementById("first").value);
   var b= parseInt(document.getElementById("second").value);
   var c= document.getElementById("op").value;
   var result=0;
   if(c=='+')
   result= a+b;
   if(c=='-')
   result=a-b;
   if(c=='%')
   result=a%b;
   if(c=='*')
   result=a*b;
   if(c=='/')
   result=a/b;
   document.getElementById("result").value=result;
}
const typed = new Typed('#element', {
    strings: ['Airthmetic World '],
    typeSpeed: 100,
    backSpeed :100,
    backDelay:1000,
    loop:true
  });