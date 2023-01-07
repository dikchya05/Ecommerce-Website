import React from 'react'

import { Link } from "react-router-dom";

const Box = ({item})=>{
   return(
        <>
            <div className='order_item'>
                                <div className='bottom'>
                                    <ul>
                                    <li class="list-group-item">

                                        
                                        <li>{item.name}</li>
                                        <li>{item.brand}</li>
                                        <li>{item.size}</li>
                                        <li>{item.price}</li>
                                        <li>{item.quantity}</li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
        </>
    )
}
export default Box