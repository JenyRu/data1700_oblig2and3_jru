//Gets values
/*function inputTicket() {
    let id = 0;
    const newTicket = {
        id: window.location.search.substring(1),
        movieSelector: $("#movieSelector").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNr: $("#phoneNr").val(),
        email: $("#email").val(),
    };
}*/

/*
let redigerBilett = false;
let idBilett = 0;
*/

$(function () {
    getTickets();
});

function saveTickets() {
    const newTicket = {

        movieSelector: $("#movieSelector").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNr: $("#phoneNr").val(),
        email: $("#email").val(),
    };

    $.post("/saveTickets", newTicket, function () {
        getTickets();
    })

//Resets values after confirming
    // $("#id").val("");
    $("#header").html("Order movie tickets");
    $("#movieSelector").val("");
    $("#amount").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNr").val("");
    $("#email").val("");
    $("#confirm").html("Buy Ticket");
}

/*         let inputs = document.forms["ticketForm"]["firstName"].value;
         if (inputs === onmessage ) {
             alert("Name must be filled out");
             return false;
         }*/
/*
function updateTicket() {
         const ticket = {
             id: idBilett,
             movieSelector: $("#movieSelector").val(),
             amount: $("#amount").val(),
             firstName: $("#firstName").val(),
             lastName: $("#lastName").val(),
             phoneNr: $("#phoneNr").val(),
             email: $("#email").val(),
         };

         $.post("/editTicket", ticket, function () {
             getTickets();
         })*/


/*$.get("getTickets", function (data) {
    getTickets(data);
});*/


function getTickets() {
    $.get("/getTickets", function (data) {
        formatInput(data);
    });
}

//Using the same table attributes from html for a cohesive look.
function formatInput(data) {
    let out = "<table class='table' <tr> <th>Movie</th> <th>Amount</th> " +
        "<th>First name</th> <th>Last name</th> <th>Phone Number</th> <th>Email</th> </tr>";

    //Adding the length of the array to the table and centering the data.
    for (let input of data) {
        console.log(input);
        console.log(input.id);
        out += "</tr><tr><td>" + input.movieSelector + "</td><td>" + input.amount +
            "</td><td>" + input.firstName + "</td><td>" + input.lastName +
            "</td><td>" + input.phoneNr + "</td><td>" + input.email + "</td><td>" +
            "<button class='btn-warning' onclick=\"editTicket('" + input.id + "', '" + input.movieSelector + "', '" + input.amount + "', '" + input.firstName + "', '" + input.lastName + "', '" + input.phoneNr + "', '" + input.email + "')\">Edit Ticket</button></td><td>" +
            "<button class='btn-danger' onclick='deleteOneTicket(" + input.id + ")'>Delete Ticket</button></td>" +
            "</tr><tr>";
    }
    out += "</table>";
    $("#currentTickets").html(out);


    // document.getElementById("inputResult").innerHTML
}

//delete 1 by 1 ticket, not all (but both options be ok)
function deleteOneTicket(id) {
    $.ajax({
        url: '/deleteOneTicket?id=' + id,
        type: 'DELETE',
        success: [function () {
            getTickets();
            //formatInput(data);
            //console.log(id)
        }
        ]
    });
}

//const formData = new FormData ("#ticketId");

function editTicket(id, movieSelector, amount, firstName, lastName, phoneNr, email) {
    //  const formT = document.querySelector("form");
    //  formT.addEventListener("submit", (check) => {
    //     check.de
    // })
    // const formData = new FormData ("ticketForm");

    //  document.ticketForm.id

    console.log(id, movieSelector, amount, firstName, lastName, phoneNr, email);
    // $("#id").val(id);
    $("#header").html("Edit Ticket");
    $("#movieSelector").val(movieSelector);
    $("#amount").val(amount);
    $("#firstName").val(firstName);
    $("#lastName").val(lastName);
    $("#phoneNr").val(phoneNr);
    $("#email").val(email);
    $("#confirm").html("Save Changes");


    /*redigerBilett = true;
    idBilett = id;*/

    //    $('form[name="ticketForm"]'.matchAll((onsubmit(saveTickets))));


    //change back to old header and button name

    // $('form[name="ticketForm"]').val($.get("/getTickets?id="+id));
    /*let $ticketInput = $form.find(":input")
    $('form[name="ticketForm"]').val();
    $("#header").html("Edit Ticket");*/

    /*$.post("/editTicket?id="+id, getTickets, function () {
        getTickets()
        })*/
}


//Tor's way
/*function editTicket() {
    const newTicket = {
        id: $("#id").val(),
        movieSelector: $("#movieSelector").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNr: $("#phoneNr").val(),
        email: $("#email").val(),
    }
    $.post("/editTicket", newTicket, function () {
        getTickets();
    });
}*/

//OR

//Cosmin's way
/*
function editTicket(id) {
    document.getElementById("ticketId").innerHTML = id;
    $.get("getTickets?id=" + id, function (input) {
        document.getElementById("#movieSelectorEdit").value = input.movieSelector;
        document.getElementById("#amountEdit").value = input.amount;
        document.getElementById("#firstNameEdit").value = input.firstName;
        document.getElementById("#lastNameEdit").value = input.lastName;
        document.getElementById("#phoneNrEdit").value = input.phoneNr;
        document.getElementById("#emailEdit").value = input.email;
    })
}

function updateTicket() {
    ticket = {
        "id": document.getElementById("ticketId").innerHTML,
        "movieSelector": document.getElementById("movieSelectorEdit").value,
        "firstName": document.getElementById("firstNameEdit").value,
        "lastName": document.getElementById("lastNameEdit").value,
        "phoneNr": document.getElementById("phoneNrEdit").value,
        "email": document.getElementById("emailEdit").value
    }
    console.log(document.getElementById("ticketId").value);
    console.log(ticket);
    $.post("/editTicket", ticket, function(input) {})
}*/


/*function deleteOneTicket(id) {
    const url = "/deleteOneTicket?id"+id;
    $.ajax(url, function() {
        clear.deleteOneTicket(id)
    });
}*/


//Attempt to make @DeleteMapping to work
/*function deleteTickets() {
    $("#deleteTickets").click(function() {
        $("#deleteTickets").remove(onclick(inputTicket));
    });*/