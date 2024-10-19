import { useState } from 'react'
import { initialExpense, initialCategory } from '../../fixtures'
import './expense.css'

export default function ExpenseRecordList({ }) {
    const [ expenseList, setExpenseList] = useState(initialExpense);
    const [categories, setCategories] = useState(initialCategory);


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
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </>)
            })
        }

    </>)
}
