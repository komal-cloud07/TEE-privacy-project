function sendMessage() {
   
    let question =
 document.getElementById("question").value;
 
   let response = 
document.getElementById("response");



    if (question === "") {
 
         response.innerHTML = "Please enter a 
question first!";
  
    } else {
 
       response.innerHTML =
 "SecureAI Demo
 Response: Your question was received 
securely.";

    }

}