const people = {
        username : "karthik",
        password : "Gijoe@123"        
    }

function checkUser(){
    let uname = document.getElementById('uname').value;
    let pword = document.getElementById('pword').value;
    if(uname === people.username && pword === people.password){
        window.location = "dashboard.html";
    }else{
        alert('Please enter valid credentials');
    }


}
