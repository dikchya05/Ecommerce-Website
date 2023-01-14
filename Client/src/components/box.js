import {useState} from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";
import { Button,Modal } from 'antd';
import axios from 'axios'
import Items from '../containers/Admin/items'


const Box = ({ item, fetchData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteItem = async () => {
    axios.delete('http://localhost:4000/items', { data: { id: item._id } })
      .then(response => response ? fetchData() : null)
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
  const showModal = () => {
    setIsModalOpen(true);
};
const handleOk = () => {
    setIsModalOpen(false);
};
const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Items isEdit={true} item={item} onOk={handleOk}/>
            </Modal>
      <Card
        style={{
          width: 300,
        }} >
        <p>{item.name}</p>
        <p>{item.brand}</p>
        <p>{item.size}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      
        <Button onClick={() => deleteItem()}>Delete</Button>
        <button onClick={showModal}>Edit</button>
        
      </Card>
    </>
  )
}
export default Box