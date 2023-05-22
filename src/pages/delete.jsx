//import React, { useState, useEffect } from 'react'
//import axios from 'axios';

//function Delete() {
    //const url = 'https://products-curd-api.netlify.app/.netlify/functions/api/products'
    //const[valid, setValid] = useState([]);
    {/*const[update, setUpdate] = useState({
      name: '',
      quantity: '',
      price: '',
      image: ''
    }) */}

   {/* useEffect(() => {
      axios.get('https://products-curd-api.netlify.app/.netlify/functions/api/products/6457ce0ec194c09a909b14a9')
      .then(res => console.log(res.data))
    }, [])


    const handleChange = (event) => {
      setUpdate({...update, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put('https://products-curd-api.netlify.app/.netlify/functions/api/products/6457ce0ec194c09a909b14a9', update)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
    } */}

    {/*const getInfo = async() => {
        try{
        const response = await axios.get(url);
        setValid(response.data)
        console.log(response.data)
        }
        catch(err){
        console.log(err)
        }
    } */}

    {/*const removeInfo = (id) => {
         axios.delete(`https://products-curd-api.netlify.app/.netlify/functions/api/products/${id}`)
         .then(resposne => {
            console.log('deleted')
         })
         .catch(err => {
            console.log(err)
         })
    }

    useEffect(() => {
        getInfo();
    }, [])
  */}


  // return (
   {/* <>
        {
        valid.map((game) => (
          <>
            <div key={game._id}>
              <p>{game.name}</p>
              <button onClick={() => removeInfo(game._id)}>Delete</button>
            </div>
          </>
        ))
      }*/}
     {/* <form onSubmit={handleSubmit}>
        <label>name: <input type='text' name="name" onChange={handleChange} /></label> <br /> <br /> <br />
        <label>quantity: <input type='number' name="quantity" onChange={handleChange} /></label> <br /> <br /> <br />
        <label>price: <input type='number' name="price" onChange={handleChange} /></label> <br /> <br /> <br />
        <label>image: <input type='text' name="image" onChange={handleChange} /></label><br /> <br /> <br />
        <button type='submit'>update</button>
      </form>
    </>
  )
} */}

//export default Delete
