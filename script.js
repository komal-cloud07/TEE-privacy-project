document.addEventListener("DOMContentLoaded", function(){
  let btn = document.querySelector("button");
  if(btn){
    btn.addEventListener("click", function(){
      let q = prompt("Tujha prashna lih (Periods, health, stress baddal):");
      if(q){
        alert("Tujha prashna: '" + q + "' \n\n✅ Ha prashna TEE Locker madhe 100% gupt rahila. History save zala nahi.\n\nDemo Reply: Pani jast pi aani aaram kar, stress kami hoil. Kahi serious vatat asel tar doctor la bhet.");
      }
    });
  }
});
