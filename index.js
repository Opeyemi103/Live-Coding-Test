function addExpense() {
    var name = document.getElementById("expenseName").value;
    var amount = parseFloat(document.getElementById("expenseAmount").value);
    if (name !== "" && !isNaN(amount)) {
        var expense = {
            name: name,
            amount: amount
        };
        var expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));


        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmount").value = "";
        window.location.href = "results.html";
    } else {
        alert("Please enter both expense name and amount.");
    }
}