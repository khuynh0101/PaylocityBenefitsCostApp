import React, { useState } from 'react';
import styles from './benefitsSummary.module.css';

export const BenefitsSummary = ({ benefitSummary }) => {
  return (
    <>
      <h4>Benefits Cost Summary</h4>
      <div className={styles.summaryContainer}>
        <div>Total Salary</div>
        <div>${benefitSummary.TotalSalary.toFixed(2)}</div>
        <div>Employee Cost</div>
        <div>${benefitSummary.EmployeeCost.toFixed(2)}</div>
        <div>Dependents Cost</div>
        <div>${benefitSummary.DependentsCost.toFixed(2)}</div>
        <div>Cost Per Paycheck</div>
        <div>${benefitSummary.CostPerPayCheck.toFixed(2)}</div>
        <div>Total Cost</div>
        <div className={styles.totalCost}>
          ${benefitSummary.TotalCost.toFixed(2)}
        </div>
      </div>
    </>
  );
};
