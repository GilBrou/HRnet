export function formatEmployee(employee) {
    employee.dateOfBirth = formatDate(employee.dateOfBirth);
    employee.startDate = formatDate(employee.startDate);
    return employee;
}

/*to format date in english format*/
function formatDate(date) {
    return new Date(date).toLocaleDateString("en");
}
