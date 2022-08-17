import React from 'react';
import IncomeItem from './IncomeItem';
function IncomeList({income, setIncome}) {

    const removeIncome= i =>{
        let temp = income.filter((v, index) => index !=i);
        setIncome(temp);

    }

const sortByDate = (a, b) =>{
    return a.Date - b.Date;
}


  return (
    <div className="income-list">
      {
        income.sort(sortByDate).map((value, index) =>
        (<IncomeItem key={index} 
            income={value} index={index} 
            removeInome={removeIncome} /> ))
      }
    </div>
  )
}

export default IncomeList;
