function generateTable() {
    let num = document.getElementById("number").value;
    
    if (num === "" || num < 1) {
        alert("Please enter a valid number (greater than 0).");
        return;
    }

    let table = document.getElementById("multiplicationTable");
    table.innerHTML = ""; // Clear previous table

    // Create table header
    let headerRow = table.insertRow();
    let headerCell1 = headerRow.insertCell(0);
    let headerCell2 = headerRow.insertCell(1);
    let headerCell3 = headerRow.insertCell(2);
    headerCell1.innerHTML = "<b>Number</b>";
    headerCell2.innerHTML = "<b>x</b>";
    headerCell3.innerHTML = "<b>Result</b>";

    // Generate multiplication table using a for loop
    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow();
        row.insertCell(0).innerText = num;
        row.insertCell(1).innerText = "x " + i;
        row.insertCell(2).innerText = num * i;
    }
}
