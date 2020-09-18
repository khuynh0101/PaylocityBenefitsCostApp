export const getEmployeeBenefitsCost = async (employee, callbackFunc) => {
  const response = await fetch(
    //`${process.env.REACT_APP_API_EMPLOYEE_PREFIX_URL}CalculateBenefitsCost`,
    'http://localhost:51572/api/Employee/CalculateBenefitsCost',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    }
  );
  const data = await response.json();
  callbackFunc(data);
};
