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
            <td>${details[i].surName}</td>
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
};
function validate(){
    let isvalidTrue=true;
    let name = document.getElementById("name");
    let surName=document.getElementById("surname");
    let email = document.getElementById("email");

    if (name.value == "" || surname.value=="" || email.value=="") {
      alert("please fill the details!");
      //event.preventDefault();
     return isValidTrue=false;
     // return
  }
  else if( (!isNaN(name.value)) || (!isNaN(surname.value)) ){
      alert("fields should not be numbers!");
      //vent.preventDefault();
       return isValidTrue=false;
     // return
  }
  else if(name.value.length<3 || surName.value.length<3){
    alert("minimum 3 characters needed");
   // event.preventDefault();
    return  isValidTrue=false;
   //return
}
else if(name.value.length>30 || surName.value.length>30){
    alert("maximum 30 characters allowed");
    //event.preventDefault();
    return  isValidTrue=false;
   //return
  
}
else if((!(email.value).endsWith("@gmail.com")) && (!(email.value).endsWith("@qualminds.com"))){
    alert("allow only gmail and qualminds emails");
    //event.preventDefault();
    return  isValidTrue=false;
    //return
}

return isvalidTrue;
}
function insert(){
    let name = document.getElementById("name");
    let surname=document.getElementById("surname");
    let email = document.getElementById("email");
  
    let data = {
        name: name.value,
        surName:surname.value,
        email: email.value
    };
    if(validate())
    {
    details.push(data);
    setData();
    table();
    name.value = "";
    surname.value="";
    email.value = "";
    }
   
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
  </div>
 <div class="surname">
        <label>Surname</label><br>
        <input type="text" value="${details[index].surName}" id="surname" placeholder="Stone">
  </div>
  <div class="email">
        <label>Email address</label><br>
        <input type="text" value="${details[index].email}" id="email" placeholder="george.stone@gmail.com">
  </div>
  <div class="add">
     <button class="add" type="submit" onClick="update(${index})">Updated Details</button>
  </div>
</div>
</div>
  `;
  document.getElementById("form").innerHTML = editForm;
}

function update(index) {
    // event.preventDefault();
  let name = document.getElementById("name");
  let surname=document.getElementById("surname");
  let email = document.getElementById("email");

  details[index] = {
      name: name.value,
      surName:surname.value,
      email: email.value
  };

//   table();
  let updatedform=`
  <div class="namegeorge" >
        <div class="name">
         <label>Name</label><br>
         <input type="text" id="name" placeholder="George">
        </div>
        <div class="surname">
            <label>Surname</label><br>
            <input type="text" id="surname" placeholder="Stone">
        </div>
        <div class="email">
            <label>Email address</label><br>
            <input type="text" id="email" placeholder="george.stone@gmail.com">
        </div>
        <div class="add">
            <button class="add" type="submit">Add Friend</button>
        </div>
    </div>
    `;

    if(validate())
    {
        setData();
        table();
    }
    document.getElementById("form").innerHTML=updatedform;

}

