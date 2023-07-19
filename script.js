let hour= document.getElementById("hour");
let minute= document.getElementById("minute");
let second= document.getElementById("second");
let amPm= document.getElementById("ampm");

const clock= () =>
{
   let hr= new Date().getHours();
   let min= new Date().getMinutes();
   let sec= new Date().getSeconds();

   let ampm= "AM";  

   
   if(hr > 12)
   {
      hr= hr - 12;
      ampm= "PM";
   }
   
   hr= hr < 10 ? "0" + hr : hr;
   min= min < 10 ? "0" + min : min;
   sec= sec < 10 ? "0" + sec : sec;

   hour.innerHTML= hr;
   minute.innerHTML= min;
   second.innerHTML= sec;
   amPm.innerHTML= ampm;

   // setTimeout(clock, 1000);
}

clock();

setInterval(clock, 1000);