import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import UserNavigation from '../../components/navigation/userNavigation';

const Orders =()=>{
    const navigate = useNavigate()
    //const {name} = useSelector(state=> state.user)

    
    const orderItem = async(values)=>{
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/orders', requestOptions);
        const data = await response.json()

        if(data){
            alert(data.msg)
            navigate('/')
        }
    }
    
	const OrderSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		brand: Yup.string().required('Required'),
        itemType: Yup.string().required('Required'),
        price:Yup.number().required('Required'),
        size:Yup.number().required('Required'),
        quantity:Yup.number().required('Required')
	});
    return (
       <>
        
        
            <div className='form'>
                
                <Formik
                    initialValues={{
                        name: '',
                        brand: '',
                        itemType: '',
                        price:'',
                        size:'',
                        quantity:''

                    }}
                    validationSchema={OrderSchema}
                    onSubmit={values=>{
                        orderItem(values)
                    }}
                >

                    {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                        <Form  onSubmit={handleSubmit}>
                            <Field name="name" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}
                            
                            <Field name="brand" placeholder="Brand " value={values.brand} onChange={handleChange} onBlur={handleBlur} />
                            {errors.brand && touched.brand ? (<div className="error">{errors.brand}</div>) : null}


                            <select name="itemType" value={values.itemType} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="Item Type"></option>
                                    <option value="documents" label="Documents">Documents</option>
                                    <option value="clothing" label="Clothing">Clothing</option>
                                    <option value="jewelleries" label="Jewelleries">Jewelleries</option>
                                    <option value="stationary" label="Stationary">Stationary</option>
                                    <option value="electronics" label="Electronics">Electronics</option>
                                    <option value="furniture" label="Furniture">Furniture</option>
                                    <option value="other" label="Other">Other</option>
                                </select>
                            {errors.itemType && touched.itemType ? (<div className="error">{errors.itemType}</div>) : null}

                            <Field name="price" placeholder="Price" value={values.price} onChange={handleChange} onBlur={handleBlur} />
                            {errors.price && touched.price ? (<div className="error">{errors.price}</div>) : null}

                            <Field name="size" placeholder="Size" value={values.size} onChange={handleChange} onBlur={handleBlur} />
                            {errors.size && touched.size ? (<div className="error">{errors.size}</div>) : null}

                            <Field name="quantity" placeholder="Quantity" value={values.quantity} onChange={handleChange} onBlur={handleBlur} />
                            {errors.quantity && touched.quantity ? (<div className="error">{errors.quantity}</div>) : null}

                            <button type="submit">Add Order</button>
                        </Form>
                    )} 
                </Formik>
            </div>
            </>
             
           )
}

export default Orders