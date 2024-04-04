function inputTicket() {
    const ticket = {
        movieSelector : $("#movieSelector").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNr: $("#phoneNr").val(),
        email: $("#email").val(),
    };

    $.post("/saveTickets", ticket, function() {
        getTickets();
    })
    ("#movieSelector").val("");
    ("#amount").val("");
    ("#firstName").val("");
    ("#lastName").val("");
    ("#phoneNr").val("");
    ("#email").val("");
}
function getTickets() {
    $.get("/getTickets", function(data) {
        formatInput(data);
    });
}

//Using the same table attributes from html for a cohesive look.
function formatInput(data) {
    let out = "<table cellspacing='2' cellpadding='2' border='1'<tr> <th>Movie</th> <th>Amount</th> <th>First name</th>" +
        "<th>Last name</th> <th>Phone Number</th> <th>Email</th> </tr>";

    //Adding the length of the array to the table and centering the data.
    for (const input of data) {
        out += "</tr><tr><td align='center'>" + input.movieSelector + "</td><td align='center'>" + input.amount +
            "</td><td align='center'>" + input.firstName + "</td><td align='center'>" + input.lastName +
            "</td><td align='center'>" + input.phoneNr + "</td><td align='center'>" + input.email + "</td></tr><tr>";
    }
    out += "</table>";
    $("#inputResult").html(out);

    // document.getElementById("inputResult").innerHTML
}
function deleteTickets() {
    $.get("/deleteTickets", function () {
        getTickets();
    });
}