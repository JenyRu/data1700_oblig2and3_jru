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
/*    let inputs = document.forms["ticketForm"]["firstName"].value;
    if (inputs) {
        alert("Name must be filled out");
        return false;
    }*/


    if (redigerBilett) {
        redigerBilett = false;

        const ticket = {
            id: idBilett,
            movieSelector: $("#movieSelector").val(),
            amount: $("#amount").val(),
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            phoneNr: $("#phoneNr").val(),
            email: $("#email").val(),
        };

        $.post("/saveTickets", ticket, function () {
            getTickets();
        })

    } else {
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
        //   $("#header").html("Order movie tickets");
        $("#movieSelector").val("");
        $("#amount").val("");
        $("#firstName").val("");
        $("#lastName").val("");
        $("#phoneNr").val("");
        $("#email").val("");
//    $("#confirm").html("Buy Ticket");
    }
}

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

    redigerBilett = true;
    idBilett = id;
}