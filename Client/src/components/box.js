import { useState } from 'react'
import { Card } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, message, Popconfirm, Pagination } from 'antd';
import axios from 'axios'
import Items from '../containers/Admin/items'



const Box = ({ item, fetchData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalOrderCount, setTotalOrderCount] = useState(0)
  const navigate = useNavigate()


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

    navigate("/itemsList");

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const confirm = (e) => {
    deleteItem()
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  return (
    <>
      <div className='col-md-3'>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <Items isEdit={true} item={item} onOk={handleOk} />
        </Modal>
        <Card
          style={{
          backgroundColor: 'wheat',
          marginBottom : '10px'
          }} >
          <p>{item.name}</p>
          <p>{item.brand}</p>
          <p>{item.size}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>

          <Popconfirm title="Delete the task" description="Are you sure to delete this task?" onConfirm={confirm} onCancel={cancel} okText="Delete" cancelText="cancel" style={{ color: 'red' }}>
            <button className='btn btn-danger' type="submit">Delete</button>
          </Popconfirm>
          <button className='btn btn-info' style={{ "margin-left": '10px', "background-color": "green", "color": "white" }} onClick={showModal}>Edit</button>

        </Card>
      </div>


    </>


  )
}
export default Box