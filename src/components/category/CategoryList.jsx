import { useState } from 'react';
import { nanoid } from 'nanoid';
import { initialCategory } from '../../fixtures'
import CategoryRecord from './CategoryRecord';

export default function categoryList() {


    const [initialCategoryData, setInitialCategoryData] = useState({
        id: nanoid(),
        name: ''
    })
    const [categories, setCategories] = useState(initialCategory);

    console.log(categories);
    const onSubmit = (e) => {
        e.preventDefault()
    }

    const createNewCategory = () => {
        setCategories([...categories, category])
        setCategory(initialCategoryData);
    }

    const onChangeCategoryName = () => {
        setCategory({ ...category, name: e.target.value })
        console.log(category)

    }
    const onSubmitCreateCategoryForm = (e) => {
        e.preventDefault();
        setCategories([...categories, category])
        setCategory(
            {
                id: nanoid(),
                name: ''
            }
        );
    }

    const [category, setCategory] = useState(initialCategory);

    return (
        <div>
            <div>
                <h2>Expense Category</h2>
            </div>

            <div>
                <form onSubmit={onSubmitCreateCategoryForm}>
                    <label htmlFor="categoryName">Name:</label>
                    <input type="text" id='categoryName' name='categoryName' value={category.name} onChange={onChangeCategoryName} />
                    <button>Create</button>
                </form>
            </div>

            <div>
                <h3>Category List</h3>
            </div>
            {
                categories && categories.map((cate, index) => {
                    return (<>
                        <CategoryRecord key={index} category={cate} />
                    </>)
                })
            }
        </div>
    )
}