let table;
var row;
function getstudents()
{
    row=' '
    table =   document.querySelector('#details')
    url = 'https://localhost:7084/student';
    $.get(url , function(data, status){
    console.log(data)
    table.innerHTML=' '
    row =`<tr class = "Headings">
            <th scope="col">StudentId</th>
            <th scope="col">Email</th>
            <th scope="col">FName</th>
            <th scope="col"> LName</th>
            <th scope="col">DOB </th>
            <th scope="col">Phone</th>
            <th scope="col">Mobile</th>
            <th scope="col">Parent FName</th>
            <th scope="col">Parent LName</th>
            <th scope="col">Status</th>
            <th scope="col">LastLoginDate</th>
            <th scope="col">LastLoginIp</th>
            <th scope="col">Date_of_join</th>
            </tr>`
    table.innerHTML +=row;
    for(let i=0;i<data.length;i++)
{
    row =`<tr>
    <td>${data[i].studentId}</td>
        <td>${data[i].email}</td>
        <td>${data[i].studentFname}</td>
        <td>${data[i].studentLname}</td>
        <td>${data[i].dob}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].mobile}</td>
        <td>${data[i].parentFname}</td>
        <td>${data[i].parentLname}</td>
        <td>${data[i].status}</td>
        <td>${data[i].lastLoginDate}</td>
        <td>${data[i].lastLoginIp}</td>
        <td>${data[i].dateOfJoin}</td>
        </tr>`
        table.innerHTML +=row;
}
    });
}

function getparents()
{
    row=' '
    table =   document.querySelector('#details')
    url = 'https://localhost:7084/parent';
    $.get(url , function(data, status){
    console.log(data)
    table.innerHTML=' '
    row =`<tr class = "Headings">
            <th scope="col">ParentId</th>
            <th scope="col">Email</th>
            <th scope="col">FName</th>
            <th scope="col">LName</th>
            <th scope="col">DOB </th>
            <th scope="col">Phone</th>
            <th scope="col">Mobile</th>
            <th scope="col">Status</th>
            <th scope="col">LastLoginDate</th>
            <th scope="col">LastLoginIp</th>
            </tr>`
    table.innerHTML +=row;
    for(let i=0;i<data.length;i++)
{
    row =`<tr>
    <td>${data[i].parentId}</td>
        <td>${data[i].email}</td>
        <td>${data[i].fname}</td>
        <td>${data[i].lname}</td>
        <td>${data[i].dob}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].mobile}</td>
        <td>${data[i].status}</td>
        <td>${data[i].lastLoginDate}</td>
        <td>${data[i].lastLoginIp}</td>
        </tr>`
        table.innerHTML +=row;
}
    });
}

function getteachers()
{
    row=' '
    table =   document.querySelector('#details')
    url = 'https://localhost:7084/teacher';
    $.get(url , function(data, status){
    console.log(data)
    table.innerHTML=' '
    row =`<tr class = "Headings">
            <th scope="col">TeacherId</th>
            <th scope="col">Email</th>
            <th scope="col">FName</th>
            <th scope="col">LName</th>
            <th scope="col">DOB </th>
            <th scope="col">Phone</th>
            <th scope="col">Mobile</th>
            <th scope="col">Status</th>
            <th scope="col">LastLoginDate</th>
            <th scope="col">LastLoginIp</th>
            </tr>`
    table.innerHTML +=row;
    for(let i=0;i<data.length;i++)
{
    row =`<tr>
    <td>${data[i].teacherId}</td>
        <td>${data[i].email}</td>
        <td>${data[i].fname}</td>
        <td>${data[i].lname}</td>
        <td>${data[i].dob}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].mobile}</td>
        <td>${data[i].status}</td>
        <td>${data[i].lastLoginDate}</td>
        <td>${data[i].lastLoginIp}</td>
        </tr>`
        table.innerHTML +=row;
}
    });
}


