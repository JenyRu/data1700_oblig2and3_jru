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
        saveTickets();
    })


//Sets values
$("#movieSelector").val("");
$("#amount").val("");
$("#firstName").val("");
$("#lastName").val("");
$("#phoneNr").val("");
$("#email").val("");
$("#id").val("");
}
const id = window.location.search.substring(1);
const url = "/getOneTicket?"+id;

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
        out += "</tr><tr><td>" + data[input].movieSelector + "</td><td>" + data[input].amount +
            "</td><td>" + data[input].firstName + "</td><td>" + data[input].lastName +
            "</td><td>" + data[input].phoneNr + "</td><td>" + data[input].email + "</td><td>" +
            "<button class='btn-warning' onclick='editTicket(" + data[input].id + ")'>Edit Ticket</button></td><td>" +
            "<button class='btn-danger' onclick='deleteOneTicket(" + data[input].id + ")'>Delete Ticket</button></td>" +
            "</tr><tr>";
    }
    out += "</table>";
    $("#currentTickets").html(out);
    console.log(data);

    // document.getElementById("inputResult").innerHTML
}

function editTicket() {
    const ticket = {
        id: $("#id").val(),
        movieSelector: $("#movieSelector").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNr: $("#phoneNr").val(),
        email: $("#email").val(),
    }
    $.post("/editTicket", ticket, function () {
        getTickets();
    });
}

//delete 1 by 1 ticket, not all (but both options be ok)
function deleteOneTicket(id) {
    $.ajax({
        url: '/deleteOneTicket?id=' + id,
        type: 'DELETE', //Uses DeleteMapping
        success: function (data) {
            //formatInput(data);
        }
    });
}

//Attempt to make @DeleteMapping to work
/*function deleteTickets() {
    $("#deleteTickets").click(function() {
        $("#deleteTickets").remove(onclick(inputTicket));
    });*/