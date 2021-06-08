// import logo from './logo.svg';
// import './App.css';
import React, { useState }from "react";
import Player from "./components/player";
import Modal from "./components/modal";
import './components/modal/modal.css';

export default function App(){
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  };

  return(
    <div>
      <Player skin="m1" />
      <div className="container">
        <button onClick={ openModal } className="button">im button</button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
      </div>
    </div>
  )
}
