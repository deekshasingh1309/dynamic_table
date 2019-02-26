var data = [{
    firstname: "John",
    lastname: "Sharma",
    email: "sharmajohn@hotmail.com",
    id: "101",
    phone_no: "9817221212",
    designation: "developer",
    dob: " 13/09/1995"
}, {
    firstname: "Johny",
    lastname: "Bhatia",
    email: "mahakbhatia@gmail.com",
    id: "102",
    phone_no: "9817221211",
    designation: "engineer",
    dob: " 13/07/1991"
}, {
    firstname: "Rahul",
    lastname: "Singh",
    email: "golu@yahoo.com",
    id: "103",
    phone_no: "9884469123",
    designation: "analyst",
    dob: " 01/01/1967"
},
{
    firstname: "Raj",
    lastname: "arora",
    email: "axx@hotmail2.com",
    id: "103",
    phone_no: "9817221212",
    designation: "tester",
    dob: " 25/02/1960"
}
];


function generate_table() {

    var column = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (column.indexOf(key) === -1) {
                column.push(key);
            }
        }
    }

    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element 
    var table = document.createElement("table");
    //CREATE <tbody> element
    var tableBody = document.createElement("tbody");

    // CREATE ROW.
    var table_row = document.createElement("tr");

    // create column and add column to table_row.
    for (var j = 0; j < column.length; j++) {
        var th = document.createElement("th");
        th.innerHTML = column[j];
        table_row.appendChild(th);
    }
    tableBody.appendChild(table_row);



    for (var i = 0; i < data.length; i++) {
        // creates a table table_row
        var table_row = document.createElement("tr")

        for (var j = 0; j < column.length; j++) {
            // Create a <td> element
            var cell = document.createElement("td")
            cell.innerHTML = data[i][column[j]];
            table_row.appendChild(cell);
        }

        // add the table_row to the end of the table body
        tableBody.appendChild(table_row);
    }

    // put the <tbody> in the <table>
    table.appendChild(tableBody);
    // appends <table> into <body>
    body.appendChild(table);

    table.setAttribute("border", "1");

}


