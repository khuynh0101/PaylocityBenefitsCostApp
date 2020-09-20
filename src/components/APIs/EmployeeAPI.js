import { CALCULATECOSTURL, SAVEEMPLOYEECOSTURL } from '../../Constants';

export const getEmployeeBenefitsCost = (employee, callbackFunc) => {
  fetchData(CALCULATECOSTURL, employee, callbackFunc);
};

export const saveEmployeeBenefitsCost = (employee, callbackFunc) => {
  fetchData(SAVEEMPLOYEECOSTURL, employee, callbackFunc);
};

const fetchData = async (url, payload, callbackFunc) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  callbackFunc(data);
};
