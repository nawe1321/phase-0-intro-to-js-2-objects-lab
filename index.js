// Write your solution in this file!
const employee = {};
employee.name = 'Kevin';
employee.streetAddress = '17 Broadway';
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
        newEmployee[key] = value;
        return newEmployee;
}
const newEmployeeName = updateEmployeeWithKeyAndValue(employee,'name','Sam')
const newEmployeeAddress = updateEmployeeWithKeyAndValue(employee,'streetAddress','11 Broadway')
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 

    return employee;
}
const employeeAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','12 Broadway')
const employeeName = destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','Sam')

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
const anotherLostEmployeeName = deleteFromEmployeeByKey(employee,'name');
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
const destructivelyDeletedEmployeeName = destructivelyDeleteFromEmployeeByKey(employee,'name');