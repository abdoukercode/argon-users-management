require("../assets/stylesheets/styles.scss");
/** Helpers Functions */

// Initial Setup of UX to show content/hide on sidebar click
let visibleDivId = null;

const nav = document.querySelector("nav");
const items = document.querySelectorAll("nav ul li");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", Call2Action);
}

function Call2Action() {
    let id = this.id;
    /*    console.log(id);  */
    toggleVisibility(id);
}

function toggleVisibility(id) {
    if (visibleDivId === id) {
        //visibleDivId = null;
    } else {
        visibleDivId = id;
    }

    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    items.forEach(element => {
        let div = document.getElementsByClassName(element.id);
        let divIntro = document.getElementsByClassName("intro");
        if (visibleDivId === element.id) {
            div[0].style.display = "block";
            /*      divIntro[0].style.display = "none"; */
        } else {
            div[0].style.display = "none";
        }
    });
}

/** Set Users Front */
const usersItems = document.querySelectorAll(".users ul li");

for (let i = 0; i < usersItems.length; i++) {
    usersItems[i].addEventListener("click", Call2ActionUsers);
}

function Call2ActionUsers() {
    let id = this.id;
    /*   console.log(id);  */

    toggleVisibilityUsers(id);
}

function toggleVisibilityUsers(id) {
    if (visibleDivId === id) {
        //visibleDivId = null;
    } else {
        visibleDivId = id;
    }

    hideNonVisibleDivsUsers();
}

function hideNonVisibleDivsUsers() {
    usersItems.forEach(element => {
        let div = document.getElementsByClassName(element.id);
        let divIntro = document.getElementsByClassName("intro");
        if (visibleDivId === element.id) {
            div[0].style.display = "block";
        } else {
            div[0].style.display = "none";
        }
    });
}

/** Set Roles Front */

const RolesItems = document.querySelectorAll(".roles ul li");

for (let i = 0; i < usersItems.length; i++) {
    RolesItems[i].addEventListener("click", Call2ActionRoles);
}

function Call2ActionRoles() {
    let id = this.id;
    /*   console.log(id);  */

    toggleVisibilityRoles(id);
}

function toggleVisibilityRoles(id) {
    if (visibleDivId === id) {
        //visibleDivId = null;
    } else {
        visibleDivId = id;
    }

    hideNonVisibleDivsRoles();
}

function hideNonVisibleDivsRoles() {
    RolesItems.forEach(element => {
        let div = document.getElementsByClassName(element.id);
        if (visibleDivId === element.id) {
            div[0].style.display = "block";
        } else {
            div[0].style.display = "none";
        }
    });
}



/** Set Rights Front */

const RightsItems = document.querySelectorAll(".rights ul li");

for (let i = 0; i < RightsItems.length; i++) {
    RightsItems[i].addEventListener("click", Call2ActionRights);
}

function Call2ActionRights() {
    let id = this.id;
    /*   console.log(id);  */

    toggleVisibilityRights(id);
}

function toggleVisibilityRights(id) {
    if (visibleDivId === id) {
        //visibleDivId = null;
    } else {
        visibleDivId = id;
    }

    hideNonVisibleDivsRights();
}

function hideNonVisibleDivsRights() {
    RightsItems.forEach(element => {
        let div = document.getElementsByClassName(element.id);
        if (visibleDivId === element.id) {
            div[0].style.display = "block";
        } else {
            div[0].style.display = "none";
        }
    });
}


/** Call API to fetch data and display them on front */
window.onload = function () {

    /** get Roles list */
    let users = [];
    fetch("https://abdoutestapi.aragon-erh.com/user/list")
        .then(res => res.json())
        .then(data => data.result)
        .then(response => {
            users = response;
            localStorage.setItem('users', JSON.stringify(users));
            console.log(users);
            let ul = document.createElement("ul");
            ul.classList.add("collection");
            let editButton = document.createElement("button");
            let deleteButton = document.createElement("button");

            editButton.innerText = "Edit";
            editButton.className = "edit";
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            document.getElementsByClassName("users-list")[0].appendChild(ul);

            users.forEach(function (user) {
                var li = document.createElement("li");
                li.classList.add("collection-item");
                ul.appendChild(li);
                li.innerHTML +=
                    `<strong>Id</strong> :${user.id} - <strong>Name</strong>: ${user.firstname} ${user.lastname} - <strong>Email</strong>: ${user.email} ` +
                    "" +
                    editButton.outerHTML +
                    " " +
                    deleteButton.outerHTML;
            });
        })
        .catch(error => console.log(error));

    /** get Roles list */
    let roles = [];
    fetch("https://abdoutestapi.aragon-erh.com/role/list")
        .then(res => res.json())
        .then(data => data.result)
        .then(response => {
            roles = response;
            localStorage.setItem('roles', JSON.stringify(roles));
            console.log(roles);
            let ul = document.createElement("ul");
            ul.classList.add("collection");
            let editButton = document.createElement("button");
            let deleteButton = document.createElement("button");

            editButton.innerText = "Edit";
            editButton.className = "edit";
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            document.getElementsByClassName("roles-list")[0].appendChild(ul);

            roles.forEach(function (role) {
                var li = document.createElement("li");
                li.classList.add("collection-item");
                ul.appendChild(li);
                li.innerHTML +=
                    `${role.id} - ${role.label}  ` +
                    "" +
                    editButton.outerHTML +
                    " " +
                    deleteButton.outerHTML;
            });
        })
        .catch(error => console.log(error));

    /** get Rights list */
    let rights = [];
    fetch("https://abdoutestapi.aragon-erh.com/right/list")
        .then(res => res.json())
        .then(data => data.result)
        .then(response => {
            rights = response;
            console.log(rights);
            localStorage.setItem('rights', JSON.stringify(rights));

            let ul = document.createElement("ul");
            ul.classList.add("collection");
            let editButton = document.createElement("button");
            let deleteButton = document.createElement("button");

            editButton.innerText = "Edit";
            editButton.className = "edit";
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            document.getElementsByClassName("rights-list")[0].appendChild(ul);

            rights.forEach(function (right) {
                var li = document.createElement("li");
                li.classList.add("collection-item");
                ul.appendChild(li);
                li.innerHTML +=
                    ` <strong>Id</strong> ${right.id} - ${right.label} - <strong> Description : ${right.description}</strong>  ` +
                    "" +
                    editButton.outerHTML +
                    " " +
                    deleteButton.outerHTML;
            });
        })
        .catch(error => console.log(error));
    // create form to set users to roles


    let Users = JSON.parse(localStorage.getItem("users"));
    let Roles = JSON.parse(localStorage.getItem("roles"));

    let rolesForm = document.createElement("form");
    rolesForm.setAttribute("id", 'form-usr-role')
    let roleUser = document.createElement("select");


    roleUser.setAttribute("id", "roleuser");
    rolesForm.appendChild(roleUser);
    document.getElementsByClassName("roles-set")[0].innerHTML += rolesForm.outerHTML
    document.getElementById("roleuser").setAttribute("required", true);
    //document.getElementsByName("right").setAttribute("required",true);


    Users.forEach(function (user) {
        console.log(user);
        let option = document.createElement("option");
        option.setAttribute("value", user.id);
        option.text = `${user.firstname} ${user.lastname}`;
        document.getElementById("roleuser").appendChild(option);

    });
    Roles.forEach(function (role) {
        console.log(role);

        let label = document.createElement("label");
        label.appendChild(document.createTextNode(role.label + " " + role.description));
        let option = document.createElement("option");
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = role.id
        radio.name = "role";

        label.appendChild(radio);
        option.setAttribute("value", role.id);
        option.text = `${role.label} ${role.description}`;
        //document.getElementById("rolename").appendChild(option);
        //document.getElementById("rolename").appendChild(label);
        document.getElementById("form-usr-role").appendChild(label)

    });


    let button = document.createElement("INPUT");
    button.setAttribute("type", "submit");
    document.getElementById("form-usr-role").appendChild(button);

    // handle right-roles setting submit

    document.getElementById("form-usr-role").addEventListener('submit', postData);

    function postData(event) {
        console.log("submitted")
        event.preventDefault();

        let user_id = document.getElementById('roleuser').value;
        let role_id = null;
        let radios = document.getElementsByName("role");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                role_id = radios[i].value

                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
        console.log(user_id, role_id);

        fetch('https://abdoutestapi.aragon-erh.com/user_role/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'



                },
                body: JSON.stringify({
                    user_id: right_id,
                    role_id: role_id
                })

            })
            .then((res) => res.json())
            .then((data) => {
                let error = [];

                error = data.errors[0].message;
                console.log(error);
                if (error) {
                    let newtext = document.createTextNode(error);
                    let p1 = document.createElement("P");
                    p1.setAttribute("id", "error-msg");
                    p1.appendChild(newtext);
                    document.getElementById("form-usr-role").appendChild(p1)
                }
            })

    }


};



// create form to set right to roles


let Rights = JSON.parse(localStorage.getItem("rights"));
let Roles = JSON.parse(localStorage.getItem("roles"));

let rightsForm = document.createElement("form");
rightsForm.setAttribute("id", 'form-right-role')
let rights = document.createElement("select");




rights.setAttribute("id", "rightsoptions");
rightsForm.appendChild(rights);

document.getElementsByClassName("rights-set")[0].innerHTML += rightsForm.outerHTML
document.getElementById("rights").setAttribute("required", true);
//document.getElementsByName("right").setAttribute("required",true);


Rights.forEach(function (right) {
    console.log(right);
    let option = document.createElement("option");
    option.setAttribute("value", right.id);
    option.text = `${right.label}`;
    document.getElementById("rightsoptions").appendChild(option);

});
Roles.forEach(function (role) {
    console.log(role);

    let label = document.createElement("label");
    label.appendChild(document.createTextNode(role.label + " " + role.description));
    let option = document.createElement("option");
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.value = role.id
    radio.name = "role-right";

    label.appendChild(radio);
    option.setAttribute("value", role.id);
    option.text = `${role.label} ${role.description}`;

    document.getElementById("form-right-role").appendChild(label)

});


let button = document.createElement("INPUT");
button.setAttribute("type", "submit");
document.getElementById("form-right-role").appendChild(button);

/** Hand submit right  roles- */
document.getElementById("form-right-role").addEventListener('submit', postRight);

function postRight(event) {
    console.log("submitted")
    event.preventDefault();

    let right_id = document.getElementById('rightsoptions').value;
    let role_id = null;
    let radios = document.getElementsByName("role-right");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            role_id = radios[i].value

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    console.log(right_id, role_id);

    fetch('https://abdoutestapi.aragon-erh.com/role_right/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'


            },
            body: JSON.stringify({
                right_id: right_id,
                role_id: role_id
            })

        })
        .then((res) => res.json())
        .then((data) => {
            let error = [];

            error = data.errors[0].message;
            console.log(error);
            if (error) {
                let newtext = document.createTextNode(error);
                let p2 = document.createElement("P");
                p2.setAttribute("id", "error-msg");
                p2.appendChild(newtext);
                document.getElementById("form-right-role").appendChild(p2)
            }
        })

}
