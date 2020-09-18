import React, { useState } from 'react';
import styles from './employee.module.css';
import globalStyles from '../../app.module.css';

export const Employee = () => {
  const [employee, setEmployee] = useState({ Name: '', Dependents: [] });
  const [employeeHasError, setEmployeeHasError] = useState(false);

  const handleEmployeeNameTextBoxOnChange = (event) => {
    const employeeObj = { ...employee };
    employeeObj.Name = event.target.value;
    setEmployee(employeeObj);
  };

  const handleAddDependentButtonClick = () => {
    const employeeObj = { ...employee };
    employeeObj.Dependents.push({ Name: '' });
    setEmployee(employeeObj);
  };

  const handleRemoveDependentButtonClick = (index) => {
    const employeeObj = { ...employee };
    employeeObj.Dependents.splice(index, 1);
    setEmployee(employeeObj);
  };

  const handleDependentTextBoxChange = (event, index) => {
    const employeeObj = { ...employee };
    employeeObj.Dependents[index].Name = event.target.value;
    setEmployee(employeeObj);
  };

  return (
    <div className={styles.containerGrid}>
      <span>Employee Name</span>
      <input
        type='text'
        onChange={handleEmployeeNameTextBoxOnChange}
        onBlur={(event) =>
          setEmployeeHasError(event.target.value.trim() === '')
        }
        value={employee.Name}
      />
      <div>{employeeHasError && 'Employee Name is required'}</div>

      <span>Dependent Name</span>
      <div className={styles.dependentGrid}>
        {employee.Dependents &&
          employee.Dependents.map((dependent, index) => {
            return (
              <>
                <input
                  type='text'
                  onChange={(event) =>
                    handleDependentTextBoxChange(event, index)
                  }
                  value={dependent.Name}
                />
                <button
                  className={styles.button}
                  onClick={() => handleRemoveDependentButtonClick(index)}
                >
                  Remove
                </button>
              </>
            );
          })}

        <button
          className={styles.button}
          onClick={handleAddDependentButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};
