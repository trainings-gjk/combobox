import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Modeli() {

    const [modelet, setModelet] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log({name, surname, email})
        axios.post('http://localhost:5000/modeli', {modelet})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>

        <div className = 'w-50 bg-white rounded p-3'>
            
            <form onSubmit = {handleSubmit}>
                <h2>Shto modelin</h2>
                
                <div className = 'mb-2'>
                    <label htmlFor=''>Modeli</label>
                    <input 
                        type = 'text' 
                        placeholder = 'Enter model' 
                        className = 'form-control' 
                        onChange = {e => setModelet(e.target.value)}
                    />
                </div>
                
                

                <button className = 'btn btn-success'>Submit</button>
            
            </form>
        
        </div>
      
    </div>
  )
}

export default Modeli

