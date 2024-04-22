//Gets values
function inputTicket() {
    const newTicket = {
        movieSelector: $("#movieSelector").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNr: $("#phoneNr").val(),
        email: $("#email").val(),
        id: $("#id").val(),
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

function getTickets() {
    $.get("/getTickets", function (data) {
        formatInput(data);
    });
}

//Using the same table attributes from html for a cohesive look.
function formatInput(data) {
    let out = "<table cellspacing='2' cellpadding='2' border='1'<tr> <th>Movie</th> <th>Amount</th> " +
        "<th>First name</th> <th>Last name</th> <th>Phone Number</th> <th>Email</th> </tr>";

    //Adding the length of the array to the table and centering the data.
    for (const input of data) {
        out += "</tr><tr><td align='center'>" + input.movieSelector + "</td><td align='center'>" + input.amount +
            "</td><td align='center'>" + input.firstName + "</td><td align='center'>" + input.lastName +
            "</td><td align='center'>" + input.phoneNr + "</td><td align='center'>" + input.email + "</td></tr><tr>";
    }
    out += "</table>";
    $("#inputResult").html(out);
    console.log(data);

    // document.getElementById("inputResult").innerHTML
}

//delete 1 by 1 ticket, not all (but both options be ok)
function deleteTickets() {
    $.ajax({
        url: "/deleteTickets",
        type: "DELETE", //Uses DeleteMapping
        success: function (data) {
            formatInput(data);
        }
    });
}

//Attempt to make @DeleteMapping to work
/*function deleteTickets() {
    $("#deleteTickets").click(function() {
        $("#deleteTickets").remove(onclick(inputTicket));
    });*/