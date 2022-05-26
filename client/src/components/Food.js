import React, { useState } from 'react'
import {Button, Modal} from "react-bootstrap"

function Food({ food }) {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small")


  return (
    <div className='bg-light mt-5 shadow-lg p-3'>
      <div onClick={handleShow}>
        <h3>{food.name}</h3>
        <img src={food.img} style={{height: "200px"}} className="img-fluid"/>
      </div>
      <div className='d-flex'>
        <div className='w-100'>
          <p>Özellik</p>
          <select className='form-select' value={varient} onChange={(e) => setVarient(e.target.value)} >
            {food.varient.map((varient) => (
              <option value={varient}>{varient}</option>
            ))}
          </select>
        </div>
        <div className='w-100'>
          <p>Miktar</p>
          <select className='form-select' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((x,i) => (
              <option value={i +1}>{i+1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='d-flex mt-auto'>
              <div className='m-1 w-100 mt-3'>
                  <h5>Tutar: {food.prices[0][varient] * quantity}</h5>
              </div>
              <div className='m-1 w-100 mt-3'>
                  <a className='btn btn-button btn-danger' >Sepete Ekle!</a>
              </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.img} className="img-fluid"></img>
          <h5>Kategori : {food.category}</h5>
          <p>{food.desc}</p>
        </Modal.Body>

         <Modal.Footer>
              <a className='btn btn-outline-danger' onClick={handleClose}>Kapat!</a>
        </Modal.Footer>
    </Modal>


    </div>
  );
}

export default Food;