import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
const [name, setName] = React.useState('');
const [price, setPrice] = React.useState('');
const [category, setCategory] = React.useState('');
const [company, setCompany] = React.useState('');
const navigate = useNavigate('');
const params = useParams();

useEffect(()=>{
    getProductDetails();
}, []);

const getProductDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
}

const UpdateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method : 'put',
        body:JSON.stringify({name, price, category, company}),
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

        }
    });
    result = await result.json();
    console.warn(result);
    navigate('/');
}


    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='Input-Box'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {/* {error && !name && <span className="invalid-input">Enter Valid product</span>} */}
            <input type="text" placeholder='Enter product price' className='Input-Box'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {/* {error && !price && <span className="invalid-input">Enter Valid price</span>} */}
            <input type="text" placeholder='Enter product category' className='Input-Box'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {/* {error && !category && <span className="invalid-input">Enter Valid category</span>} */}
            <input type="text" placeholder='Enter product company' className='Input-Box'
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />
            {/* {error && !company && <span className="invalid-input">Enter Valid company</span>} */}

            <button onClick={UpdateProduct} className="appbutton">Update Product</button>


        </div>

    )
}

export default UpdateProduct