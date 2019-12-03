var employee = [
    { id: 105, name: "Ketan" },
    { id: 106, name: "Chavan" }
];
var e = employee.filter(function (emp) {
    return emp.id = 105;
});
console.log(e);
