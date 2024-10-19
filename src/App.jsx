import { useState } from 'react'
import './App.css'
import Category from './components/category/CategoryList'

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
