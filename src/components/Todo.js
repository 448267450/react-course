import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modealIsOpen, setModadlIsOpen ] = useState(false);

    function deleteHandler(){
       setModadlIsOpen(true);
    }

    function closeModalHandler(){
        setModadlIsOpen(false);
    }
  

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modealIsOpen && <Modal /> }
      { modealIsOpen && <Backdrop onCancel={closeModalHandler} /> }
      <Backdrop />
    </div>
  );
}

export default Todo;
