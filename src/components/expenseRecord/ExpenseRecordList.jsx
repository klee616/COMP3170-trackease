import { useState } from 'react'
import './expense.css'

export default function ExpenseRecordList({expensies }) {
    const [ expenseList, setExpenseList] = useState(expensies);


    return (<>
    <h2>Record</h2>
        {
            expenseList && expenseList.map((record, index) => {
                let cate =  categories.filter((category)=>{ return category.id==record.category  });
                console.log(cate)
                return (<>
                    <div className='record-container'>
                        <div>{record.name}</div>
                        <div>{ cate.name } </div>
                        <div>{record.type==1?'Income':'Expense'}</div>
                        <div>${record.amount}</div>
                        <div className='button-box'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </>)
            })
        }

    </>)
}
