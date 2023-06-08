function myfun(){
    var a = document.getElementById("passwords").value;
    var b = document.getElementById("passwordss").value;

    if(a == ""){
        document.getElementById("messages").innerHTML="**Please Fill Password";
        return false;
    }

    if(a.length < 5){
        document.getElementById("messages").innerHTML="**Password Length must be greater then 5 character";
        return false;
    }

    if(a.length > 9){
        document.getElementById("messages").innerHTML="**Password Length must be smaller then 9 character";
        return false;
    }

    if(a != b){
        document.getElementById("messages").innerHTML="**Password are not same.."
        return false;
    }
}