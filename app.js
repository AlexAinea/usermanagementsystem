let users = [];

document.getElementById("create").onclick = function createUser() {
    let inputedname = document.getElementById("nameinput").value;
    let inputedemail = document.getElementById("emailinput").value;
    let userid = Date.now().toString();

    let user = {
        name: inputedname,
        email: inputedemail,
        active: true,
        id: userid
    };
    users.push(user);
};

document.getElementById("list").onclick = function listUsers() {
    let list = document.getElementById("userlist");
    list.innerHTML = '';

    for (let index = 0; index < users.length; index++) {
        let entity = users[index];
        let listText = document.createTextNode(`Name: ${entity.name}, Email: ${entity.email}`);
        let newListItem = document.createElement("li");
        newListItem.appendChild(listText);
        list.appendChild(newListItem);
    };
};

document.getElementById("search").onclick = function findUsersByName() {
    let searchedname = document.getElementById("namesearch").value;
    let listSearched = document.getElementById("userListSearched");

    listSearched.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        let entity = users[i];
        if (searchedname === entity.name) {
            let listTextSearched = document.createTextNode(`Name: ${entity.name}, Email: ${entity.email}`);
            let newListItemSearched = document.createElement("li");
            newListItemSearched.appendChild(listTextSearched);
            listSearched.appendChild(newListItemSearched);
        }
    }
    return searchedname
};

document.getElementById("delete").onclick = function deleteUsers(){
    for (let i = 0; i < users.length; i++) {
        let deleteuserindex = document.getElementById("deleteuser").value;
        users.splice(deleteuserindex, 1);
    }
} 

// document.getElementById("delete").onclick = function deleteUsers() {
//     let deleteUserInput = document.getElementById("deleteuser").value;
//     let indexToDelete = users.findIndex(user => user.name === deleteUserInput);
    
//     if (indexToDelete !== -1) {
        
//         users.splice(indexToDelete, 1);
//     }
// };

document.getElementById("updateuser").onclick = function updateuser(){
    let searchednametobeupdated = document.getElementById("nametobeupdated").value;
    let newName = document.getElementById("newName").value; 
    let newEmail = document.getElementById("newEmail").value; 

    for (let j = 0; j < users.length; j++) {
        let entity = users[j]; 
        if (searchednametobeupdated === entity.name) {
            entity.name = newName;
            entity.email = newEmail;
        }
    }
};
