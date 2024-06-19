import React from 'react'
import { toast } from 'react-toastify'

const TodoList = () => {

    const handleClick = () => {
        toast.error("Toast implemented");
    }

    return (
        <div>
            <h3>ToDo Lists</h3>
            <table className='table table-striped' style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Title</th>  
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Todo Data</td>
                        <td>Description</td>
                        <td>Edit</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleClick} type="button" className='btn btn-success'>Click me</button>
        </div>
    )
}

export default TodoList