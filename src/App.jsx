import { useState } from 'react'
import './App.css'
import Category from './components/category/CategoryList'
import ExpenseRecordList from './components/expenseRecord/ExpenseRecordList'
import ExpenseRecordForm from './components/expenseRecord/ExpenseRecordForm'
import { initialCategory, initialExpense } from './fixtures'

function App() {

  const [categories, setCategories] = useState(initialCategory);
  const [expensies, setExpensies] = useState(initialExpense);

    const createNewCategory = (cate) => {
      console.log(cate);
      setCategories([...categories, cate])
    }
  
    const updateCategory = (category) => {
        const temp = [];
        categories.map((item, index) => {
          if(item.id === category.id){
            temp.push(category)
          }else{
            temp.push(item)
          }
        });
        setCategories(temp);
    }
    const deleteCategory = () => {
  
      const temp = [];
      categories.map((item, index) => {
        if(item.id !== category.id){
          temp.push(item)
        }
      });
      setCategories(temp);
    }



  return (
    <>
    <div className='container'>
    <div>
      <ExpenseRecordForm  categories={categories} />
    </div>
    <div>
      <ExpenseRecordList />
    </div>
    <div>
      <Category cate={categories} createNewCategory={createNewCategory} updateCategory={updateCategory} deleteCategory={deleteCategory}  />
    </div>
    </div>
    </>
  )
}

export default App;