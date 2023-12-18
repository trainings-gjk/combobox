import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Combo() {

    const [modelet, setModelet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => {
                setModelet(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])


  return (
    <div>
      
        {/* <select> */}

            {/* <option>
                Teskti 1
            </option>
            
            <option>
                Teskti 2
            </option>
            
            <option>
                Teskti 3
            </option> */}
            <select>

                {
                    modelet.map((modeli, index) => (
                        <option key = {index}> {modeli.Modeli_vetures} </option>   
                    ))
                }

            </select>


            

    </div>
  )
}

export default Combo
