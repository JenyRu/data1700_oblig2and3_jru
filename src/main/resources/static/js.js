let editingTicket = false;
let idTicket = 0;

$(function () {
    getTickets();
});

function saveTickets() {
    if (editingTicket) {
        editingTicket = false;
        const ticket = {
            id: idTicket,
            movieSelector: $("#movieSelector").val(),
            amount: $("#amount").val(),
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            phoneNr: $("#phoneNr").val(),
            email: $("#email").val(),
        }
        $.post("/editTicket", ticket, function () {
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
    }
    //Resets values after confirming
    $("#movieSelector").val("");
    $("#amount").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNr").val("");
    $("#email").val("");

    $("#header").val("Order Movie Tickets");
    $("#confirm").val("Buy Ticket");
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
            "<button class='btn-warning' type='button' onclick=\"editTicket('" + input.id + "', '" + input.movieSelector + "', '" + input.amount + "', '" + input.firstName + "', '" + input.lastName + "', '" + input.phoneNr + "', '" + input.email + "')\">Edit Ticket</button></td><td>" +
            "<button class='btn-danger' type='button' onclick='deleteOneTicket(" + input.id + ")'>Delete Ticket</button></td>" +
            "</tr><tr>";
    }
    out += "</table>";
    $("#currentTickets").html(out);
}

//deletes individual tickets
function deleteOneTicket(id) {
    $.ajax({
        url: '/deleteOneTicket?id=' + id,
        type: 'DELETE',
        success: [function () {
            getTickets();
        }
        ]
    });
}

//edits individual tickets
function editTicket(id, movieSelector, amount, firstName, lastName, phoneNr, email) {
    $("#header").text("Edit Ticket");
    $("#movieSelector").val(movieSelector);
    $("#amount").val(amount);
    $("#firstName").val(firstName);
    $("#lastName").val(lastName);
    $("#phoneNr").val(phoneNr);
    $("#email").val(email);
    $("#confirm").text("Save Changes");

    editingTicket = true;
    idTicket = id;
}