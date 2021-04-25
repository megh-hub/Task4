/*let Name="megha";
let RegNum="20bit0177";
let DOB="27-11-2002";
let program="IT";
let email="meghamaitin27@gmail.com";
let phone="8210644431";*/
  
const form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

   let Name =document.getElementById('Name').value.trim();
   let RegNum = document.getElementById('RegNum').value.trim();
   let DOB = document.getElementById('DOB').value.trim();
   let program = document.getElementById('program').value.trim();
   let email = document.getElementById('email').value.trim();
   let phone = document.getElementById('PhoneNo').value.trim();
   let res= checkInputs(Name,RegNum,phone);
   if(res==1){
    console.log(`Name:${Name} \nRegistration Number:${RegNum} \nDate Of Birth${DOB} \nProgram:${program} \nEmail:${email} \nPhone Number:${email}\n`);
    alert("form submitted successfully");
   }
   else{
       alert("error");
   }
   form.reset();
});
let flag =0;
function checkInputs(Name,RegNum,phone){
Name=Name.toUpperCase();
let n=Name.length;
if(n<=30){
for(let i=0;i<n;i++){
   let uc=Name.charCodeAt(i);
   if(uc>64&&uc<91){
       flag=1;
   }
   else{
       flag=0;
       break;
   }
}
}
RegNum=RegNum.toUpperCase();
nr=RegNum.length;
for( let j=0;j<nr;j++)
{
let ac=RegNum.charCodeAt(j);
if((ac<58&&ac>47)||(ac>64&&ac<91)){
    flag=1;
}
else{
  flag=0;
  break;
}
}
let mn=phone.length;
if(mn==10){
    flag=1;
}
else{
flag=0;
}
return flag;
}