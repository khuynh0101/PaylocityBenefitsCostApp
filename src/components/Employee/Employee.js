import React, { useState } from 'react';
import styles from './employee.module.css';
import { BenefitsSummary } from '../BenefitsSummary/BenefitsSummary';
import { getEmployeeBenefitsCost } from '../APIs/EmployeeAPI';

export const Employee = () => {
  const [employee, setEmployee] = useState({ name: '', Dependents: [] });
  const [employeeHasError, setEmployeeHasError] = useState(false);

  const handleEmployeeNameTextBoxOnChange = (event) => {
    const employeeObj = { ...employee };
    employeeObj.name = event.target.value;
    setEmployee(employeeObj);
  };

  const handleAddDependentButtonClick = () => {
    const employeeObj = { ...employee };
    employeeObj.Dependents.push({ name: '' });
    setEmployee(employeeObj);
  };

  const handleRemoveDependentButtonClick = (index) => {
    const employeeObj = { ...employee };
    employeeObj.Dependents.splice(index, 1);
    setEmployee(employeeObj);
  };

  const handleDependentTextBoxChange = (event, index) => {
    const employeeObj = { ...employee };
    employeeObj.Dependents[index].name = event.target.value;
    setEmployee(employeeObj);
  };

  const handlePreviewButtonClick = () => {
    if (employee.name.trim() === '') {
      setEmployeeHasError(true);
    } else {
      //remove any dependents where there is no name entered
      const employeeObj = { ...employee };
      const dependentsObj = employeeObj.Dependents;
      dependentsObj.forEach((result, index) => {
        if (result.name.trim() === '') {
          dependentsObj.splice(index, 1);
        }
      });
      setEmployee(employeeObj);
      getEmployeeBenefitsCost(employeeObj, handleBenefitsSummaryData);
    }
  };

  const handleBenefitsSummaryData = (data) => {
    const employeeObj = { ...employee };
    employeeObj.BenefitsSummary = data.summary;
    setEmployee(employeeObj);
  };

  return (
    <>
      <div className={styles.containerGrid}>
        <span>Employee Name</span>
        <div>
          <input
            type='text'
            onChange={handleEmployeeNameTextBoxOnChange}
            onBlur={(event) =>
              setEmployeeHasError(event.target.value.trim() === '')
            }
            value={employee.name}
          />
          <div>{employeeHasError && 'Employee Name is required'}</div>
        </div>

        <span>Dependent Name</span>
        <div>
          {employee.Dependents &&
            employee.Dependents.map((dependent, index) => {
              return (
                <div className={styles.dependents}>
                  <div>
                    <input
                      type='text'
                      onChange={(event) =>
                        handleDependentTextBoxChange(event, index)
                      }
                      value={dependent.name}
                    />
                  </div>
                  <div>
                    <button
                      className={styles.button}
                      onClick={() => handleRemoveDependentButtonClick(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.buttonDiv}>
          <div>
            <button
              className={styles.button}
              onClick={handleAddDependentButtonClick}
            >
              Add
            </button>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={handlePreviewButtonClick}
            >
              Preview Benefits Cost
            </button>
          </div>
        </div>
      </div>
      {employee.BenefitsSummary && (
        <BenefitsSummary
          name={employee.name}
          benefitSummary={employee.BenefitsSummary}
        />
      )}
    </>
  );
};
