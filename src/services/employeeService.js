/**
 * To create new employee
 * @param {object} employeeData - new employee values
 * @param {object} context - the employee context
 */

export function createEmployee(employeeData, context) {
    const employee = {
        firstname: employeeData.firstname,
        lastname: employeeData.lastname,
        dateOfBirth: employeeData.dateOfBirth,
        startDate: employeeData.startDate,
        department: employeeData.department.label,
        street: employeeData.street,
        city: employeeData.city,
        state: employeeData.state.label,
        zipCode: employeeData.zipCode,
    };

    context.addEmployee(employee);
}
