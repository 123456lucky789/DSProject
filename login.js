var objUser = [
    {
        username:"lucky@gmail.com",
        password:"lucky"
    },
    {
        username:"daizy@gmail.com",
        password:"daizy"
    }
];

function verifylogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0; i<objUser.length; i++)
    {
        if(username == objUser[i].username && password == objUser[i].password)
        {
            document.location.href="options.html"; 
           return
        }
    }
    alert("Invalid Email or password");
    

}
