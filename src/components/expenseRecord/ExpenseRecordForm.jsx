
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { initialCategory } from '../../fixtures';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ExpenseRecordForm() {
    const [categories, setCategories] = useState(initialCategory);

    const [initialRecord, setInitRecord] = useState({
        id: nanoid(),
        name: '',
        category: -1,
        amount: 0.00,
        type: '0', //0=expensive, 1=income,
        datetime: Date(),
        note: ''
    });
    const [record, setRecord] = useState(initialRecord);


    const onChangeRecodeName = (e) => {
        e.preventDefault();
        setRecord({ ...record, name: e.target.value });
    }

    const onChangeCategory = (e) => {
        e.preventDefault();
        setRecord({ ...record, category: e.target.value })
    }

    const onChangeAmount = (e) => {
        e.preventDefault();
        setRecord({ ...record, amount: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setRecord({ ...record, type: e.target.value })
    }

    const onChangeNote = (e) => {
        e.preventDefault();
        setRecord({ ...record, note: e.target.value })
        console.log(record)

    }

    const onSubmitForm = (e) => {
        e.preventDefault();
    }


    return (<>
    <h2>Create / Edit Record</h2>
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="name">Name</label><input type="text" name='name' value={record.name} onChange={onChangeRecodeName} />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" onChange={onChangeCategory} value={record.category}>
                    {
                        categories && categories.map((cate, index) => {
                            return (<>
                                <option key={index} value={cate.id}>{cate.name}</option>
                            </>)
                        })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="amount">Amount</label><input type="number" name='amount' value={record.amount} onChange={onChangeAmount} />
            </div>
            <div>
                <label >Type</label>
                <label htmlFor='income'>
                    <input type="radio" name='type' value='0'
                        onClick={handleClick}
                        checked={record.type == '0'}
                    />
                    Income</label>
                <label htmlFor='expense'>
                    <input type="radio" name='type' value='1'
                        onClick={handleClick}
                        checked={record.type == '1'}
                    />
                    Expense</label>
            </div>
            <div>
                <label htmlFor="amount">Date </label>
                <DatePicker selected={record.datetime} />
            </div>
            <div>
                <label htmlFor="amount">Note </label>
                <input type="text" name='name' value={record.note} onChange={onChangeNote} />

            </div>
            <button>Submit</button>
        </form>
    </>);
}
