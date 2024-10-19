import { useState } from 'react'
import './App.css'
import Category from './components/category/CategoryList'
import ExpenseRecordList from './components/expenseRecord/ExpenseRecordList'
import ExpenseRecordForm from './components/expenseRecord/ExpenseRecordForm'

function App() {

  return (
    <>
    <div className='container'>
    <div>
      <ExpenseRecordForm />
    </div>
    <div>
      <ExpenseRecordList />
    </div>
    <div>
      <Category />
    </div>
    </div>
    </>
  )
}

export default App
