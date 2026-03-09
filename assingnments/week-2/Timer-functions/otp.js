console.log("OTP sent successfully!")

let seconds=5
let intervalID=setInterval(()=>
{
   seconds--;
   console.log(`OTP can resend after ${seconds}`)

   if(seconds===0)
   {
    console.log("Resend Otp")
    clearInterval(intervalID)
   }
},1000);

