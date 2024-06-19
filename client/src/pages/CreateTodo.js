import React from 'react'
import CustomForm from '../components/Form'

let initialState = {
    title: '',
    description: ''
}

const CreateTodo = () => {
    const [data, setData] = React.useState(initialState);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <CustomForm handleChange={handleChange} values={data} />
    );
}

export default CreateTodo