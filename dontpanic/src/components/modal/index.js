import React from 'react'
// import './modal.css';

export default function modal({showModal, setShowModal}){
    return <div>
        {showModal ? <h2 className="modal">하하</h2> : null}
        </div>
};
