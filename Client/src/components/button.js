import React from 'react';
import { Button, Space } from 'antd';


const ButtonClick = (props) =>{ 
    
    return(
    
    
  <Space direction="vertical">
    <Button type="primary" htmlType="submit" style={{width:props.width,
     height:'auto', backgroundColor:props.color}}>{props.itemname}</Button>
    
  </Space>
)};
export default ButtonClick;