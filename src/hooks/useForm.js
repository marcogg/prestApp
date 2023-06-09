import { useState } from "react";

const useForm = (callback, defaults) => {
    const [input, setInput]= useState(defaults)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        // console.log(name, value)
        setInput({...input, [name]:value})

    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        callback(input)
    }


return{
    input,
    handleInputChange,
    handleSubmit
}
}

export default useForm



