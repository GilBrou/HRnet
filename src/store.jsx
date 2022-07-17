import React, { useState } from "react";
import { formatEmployee } from "./helpers/employee";

/*create context*/
export const EmployeeContext = React.createContext({ employees: [] });

/*create provider*/
function EmployeeContextProvider({ children }) {
    const [employees, setEmployees] = useState([]);

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, formatEmployee(newEmployee)]);
    };

    const value = { employees, addEmployee };

    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
}

export default EmployeeContextProvider;
