import React, { useState } from 'react';
import styles from './employee.module.css';
import { BenefitsSummary } from '../BenefitsSummary/BenefitsSummary';
import {
  saveEmployeeBenefitsCost,
  getEmployeeBenefitsCost,
} from '../APIs/EmployeeAPI';

export const Employee = () => {
  const [employee, setEmployee] = useState({ name: '', dependents: [] });
  const [employeeHasError, setEmployeeHasError] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmployeeNameTextBoxOnChange = (event) => {
    const employeeObj = { ...employee };
    employeeObj.name = event.target.value;
    setEmployee(employeeObj);
  };

  const handleAddDependentButtonClick = () => {
    const employeeObj = { ...employee };
    employeeObj.dependents.push({ name: '' });
    setEmployee(employeeObj);
  };

  const handleRemoveDependentButtonClick = (index) => {
    const employeeObj = { ...employee };
    employeeObj.dependents.splice(index, 1);
    setEmployee(employeeObj);
  };

  const handleDependentTextBoxChange = (event, index) => {
    const employeeObj = { ...employee };
    employeeObj.dependents[index].name = event.target.value;
    setEmployee(employeeObj);
  };

  const handlePreviewButtonClick = () => {
    if (employee.name.trim() === '') {
      setEmployeeHasError(true);
    } else {
      //remove any dependents where there is no name entered
      const employeeObj = { ...employee };
      const dependentsObj = employeeObj.dependents;
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

  const handleSaveButtonClick = () => {
    const employeeObj = { ...employee };
    saveEmployeeBenefitsCost(employeeObj, handleSavedData);
  };
  const handleSavedData = (data) => {
    setEmployee({ name: '', dependents: [] });
    setMessage(
      data.isSaved
        ? 'Employee benefits cost saved.'
        : 'Employee benefits cost failed to save. Please try again.'
    );
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
        <div>Dependent Name</div>
        <div>
          {employee.dependents &&
            employee.dependents.map((dependent, index) => {
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
              Calculate Benefits Cost
            </button>
          </div>
          <div>{message}</div>
        </div>
      </div>
      {employee.BenefitsSummary && (
        <>
          <BenefitsSummary benefitSummary={employee.BenefitsSummary} />
          <div className={styles.containerGrid}>
            <div className={styles.offsetGrid2}>
              <button onClick={handleSaveButtonClick}>Save</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
