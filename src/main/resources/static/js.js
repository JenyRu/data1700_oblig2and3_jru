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
$(function(){
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


//Sets values
$("#movieSelector").val("");
$("#amount").val("");
$("#firstName").val("");
$("#lastName").val("");
$("#phoneNr").val("");
$("#email").val("");
$("#id").val("");
}

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
            "<button class='btn-warning' onclick='editTicket(" + input.id + ")'>Edit Ticket</button></td><td>" +
            "<button class='btn-danger' onclick='deleteOneTicket(" + input.id + ")'>Delete Ticket</button></td>" +
            "</tr><tr>";
    }
    out += "</table>";
    $("#currentTickets").html(out);


    // document.getElementById("inputResult").innerHTML
}

function editTicket() {
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