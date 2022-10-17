function parseJwt (data)

{

    debugger

    var base64Url = data.split('.')[1];

    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c)

    {

    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

    }).join(''));



    return JSON.parse(jsonPayload);

};



//POSTDATA

console.log

function getData()

{

let email= document.getElementById('typeEmailX').value

let password= document.getElementById('typePasswordX').value

console.log(email,password)

$.post("https://localhost:7084/v2/Auth/login", {Email: email, Password: password},function(data,status){

    alert("Data: " + data + "\nStatus: " + status);

    console.log(data)

    console.log( parseJwt(data))

});

}