function mobilemenu(){
    if(document.getElementById('list-items').style.display == 'block'){
        document.getElementById('list-items').style.display = 'none';
    }else{
        document.getElementById('list-items').style.display = 'block';
    }
}
document.getElementById('menu-icon').addEventListener('click',mobilemenu);


function table() {
    let table = `<table class="table">
        <thead>
            <tr>
            <th clsaa="col-1">No</th>
            <th clsaa="col-3">Name</th>
            <th clsaa="col-4">SurName</th>
            <th clsaa="col-2">Email</th>
            <th clsaa="col-2">Actions</th>
            </tr>
        </thead>
        <tbody>`;
            for (let i = 0; i < details.length; i++){
                table = table + `<tr>
            <td>${i + 1}</td>
            <td>${details[i].name}</td>
            <td>${details[i].surname}</td>
            <td>${details[i].email}</td>
            <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button>  <button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
           
            </tr> `;
            };
            table = table+`</tbody>
    </table>`;
    document.getElementById("list-table").innerHTML = table;
};

var form=document.getElementById("form");
form.addEventListener("submit",insert);
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
        
    };
    
   
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
    let name = document.getElementById("name").value = "";
    let surname = document.getElementById("surname").value ="";
    let email = document.getElementById("email").value = "";

};
function validate(){
    let isvalidTrue=false;
    let name = document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let errMsg=document.querySelectorAll(".errorMsg");

    if(name==""){
        errMsg[0].textContent="name can't be empty";
        return isvalidTrue;
    }
    else if(name.length<3){
        errMsg[0].textContent="Minimum 3 characters needed";
        return isvalidTrue;
    }
    else if(name.length>30){
        errMsg[0].textContent="Maximum 30 characters allowed";
        return isvalidTrue;
    }
    else if(name.match(/ /g)){
        errMsg[0].textContent="White spaces are not allowed";
        return isvalidTrue;
    }
    else if (name.match(/[0-9]/g)) {
        errMsg[0].textContent = "Name should not contains numbers";
        return isValidTrue;
    }
    else if (name.match(/[~ ! @ # $ % ^ & * _ + - = < > ? . , ' " : ; | /]/g)) {
        errMsg[0].textContent = "Name should not contain any special characters"
        return isValidTrue;
    }
    else {
        errMsg[0].textContent = "";
    }
    
    if(surname==""){
        errMsg[1].textContent="name can't be empty";
        return isvalidTrue;
    }
    else if(surname.length<3){
        errMsg[1].textContent="Minimum 3 characters needed";
        return isvalidTrue;
    }
    else if(surname.length>30){
        errMsg[1].textContent="Maximum 30 characters allowed";
        return isvalidTrue;
    }
    else if(surname.match(/ /g)){
        errMsg[1].textContent="White spaces are not allowed";
        return isvalidTrue;
    }
    else if (surname.match(/[0-9]/g)) {
        errMsg[1].textContent = "Name should not contains numbers";
        return isValidTrue;
    }
    else if (surname.match(/[~ ! @ # $ % ^ & * _ + - = < > ? . , ' " : ; | /]/g)) {
        errMsg[1].textContent = "Name should not contain any special characters"
        return isValidTrue;
    }
    else {
        errMsg[1].textContent = "";
    }

    if(email==""){
        errMsg[2].textContent="email can't be empty";
        return isvalidTrue;
    }
    else if((!email.endsWith(email.match(/@gmail.com/i)))&&!(email.endsWith(emal.endsWith(email.match(/@qualminds.com/i))))){
        errMsg[2].textContent="gmail and qualminds emails are allowed";
        return isvalidTrue;
    }
    else{
        errMsg[2].textContent="";
    }
    return isvalidTrue=true;
};

function insert(){
    let name = document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    email=email.toLowerCase();
    let data = {
        name,
        surname,
        email
    };
   
    if(validate())
    {
        for(i=0;i<details.length;i++){
           // if(index!=i)
            if(details[i].email==email){
                alert("* email allready exist");
                return false;
            }
        }
        details.push(data);
        setData();
        table(); 
   
    }
   event.preventDefault();
   
}
function deleteData(index){
  alert("Do You want to delete this record?");
  details.splice(index, 1);
  setData();
  table();
}

function edit(index){
  alert("You want to edit");
  let editForm=`
  <div class="details-row">
  <div class="namegeorge" >
  <div class="name">
        <label>Name</label><br>
        <input type="text" value="${details[index].name}" id="name" placeholder="George">
        <div class="errorMsg"></div>
  </div>
 <div class="surname">
        <label>Surname</label><br>
        <input type="text" value="${details[index].surname}" id="surname" placeholder="Stone">
        <div class="errorMsg"></div>
  </div>
  <div class="email">
        <label>Email address</label><br>
        <input type="text" value="${details[index].email}" id="email" placeholder="george.stone@gmail.com">
        <div class="errorMsg"></div>
  </div>
  <div class="addfriend">
     <button class="add" type="submit" onClick="update(${index})">Updated Details</button>
  </div>
</div>
</div>
  `;
  document.getElementById("form").innerHTML = editForm;
}

function update(index) {
    
    
  let name = document.getElementById("name").value;
  let surname=document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  email = email.toLowerCase();
    details[index] = {
        name,
        surname,
        email
    };
    if (validate()) {
        for(i=0;i<details.length;i++){
            if(index!=i){
                if(details[i].email==email){
                    alert("* updated email allready exist");
                    event.preventDefault();
                    return false;
                }
             }
         }
        setData();
        table();
       
        
    }
    event.preventDefault();

  let updatedform=`
  <div class="namegeorge" >
        <div class="name">
         <label>Name</label><br>
         <input type="text" id="name" placeholder="George">
         <div class="errorMsg"></div>
        </div>
        <div class="surname">
            <label>Surname</label><br>
            <input type="text" id="surname" placeholder="Stone">
            <div class="errorMsg"></div>
        </div>
        <div class="email">
            <label>Email address</label><br>
            <input type="text" id="email" placeholder="george.stone@gmail.com">
            <div class="errorMsg"></div>
        </div>
        <div class="addfriend">
            <button class="add" type="submit">Add Friend</button>
        </div>
    </div>
    `;

    document.getElementById("form").innerHTML=updatedform;

}

