import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { itemCounterActions } from '../store/item'
import { todoActions } from '../store/todo_reducer'
import toast from 'react-hot-toast'

const Todos = () => {
    const id = useSelector((state) => state.itemCountReducer.itemCounter)
    const myList = useSelector((state) => state.todoReducer.items)
    // // Access the itemCounter state correctly
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        _id: '',
        title: "",
        description: '',
        status: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(itemCounterActions.increment());
        const data = {
            _id: id,
            title: formData.title,
            description: formData.description,
            status: false
        }
        dispatch(todoActions.addItem(data));
        setFormData({
            _id: '',
            title: "",
            description: '',
            status: ''
        })
        toast.success("Task Added")

    }
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData, [name]: value
        })
    }
    const deleteItem=(_id)=>{
        // console.log('the data is -==>',_id)
        dispatch(todoActions.deleteItem(_id))
        toast.success("Task Deleted")
        // console.log(myList)
    }

    return (
        <div>
            <h1 className=' text-center text-4xl font-bold mt-10'>TODO APP</h1>
            <form action="" onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
                <label htmlFor="title" className="block text-gray-700 mb-2">Title</label>
                <input
                    onChange={handleInput}
                    type="text"
                    name="title"
                    value={formData.title}
                    className="border px-3 py-2 mb-4 w-full rounded"
                />

                <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
                <input
                    onChange={handleInput}
                    type="text"
                    name="description"
                    value={formData.description}
                    className="border px-3 py-2 mb-4 w-full rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                >
                    Create Task
                </button>
            </form>

            <div className=' flex flex-wrap m-20'>
                {myList.map((item) => (

                    <ul className='h-72 w-96  flex flex-col items-center justify-between m-5 rounded-md shadow-xl bg-slate-100'>
                        <li className='text-3xl text-black font-bold border border-white w-full text-center p-4'>{item.title}</li>
                        <li className='text-black text-xl p-2'>{item.description}</li>
                        <button className=' bg-red-500 hover:bg-red-600 p-4 w-full text-white text-2xl font-bold' onClick={()=>deleteItem(item._id)}>Delete</button> 
                    </ul>

                ))
                }

            </div>

        </div>
    )
}

export default Todos;
