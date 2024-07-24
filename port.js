
var btn = document.getElementById("submit")


    btn.onclick = function(){
        
     var name = document.getElementById("name").value
     var email = document.getElementById("email").value
     var sub = document.getElementById("sub").value
     var mes = document.getElementById("mes").value
    if (name ===""|| email ==="" || sub ==="" || mes ===""){
         window.alert("All fields must be filled please check your self")
    }
    if (name !=="" || email !=="" || sub !== "" || mes !== "" ){
        window.alert("Your message has been sent, I will get back to you thanks")
    }
}
