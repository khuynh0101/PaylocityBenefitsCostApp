import React, { useState } from 'react';
import styles from './benefitsSummary.module.css';

export const BenefitsSummary = ({ benefitSummary }) => {
  return (
    <>
      <h4>Benefits Cost Summary</h4>
      <div className={styles.summaryContainer}>
        <div>Total Salary</div>
        <div>${benefitSummary.TotalSalary}</div>
        <div>Employee Cost</div>
        <div>${benefitSummary.EmployeeCost}</div>
        <div>Dependents Cost</div>
        <div>${benefitSummary.DependentsCost}</div>
        <div>Total Cost</div>
        <div>${benefitSummary.TotalCost}</div>
      </div>
    </>
  );
};
