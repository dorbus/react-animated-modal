import React, {FC, useState} from 'react';

import './AnimatedModal.styles.css';
import './AnimatedModal.styles.scss';

const AnimatedModal: FC = () => {

  const [modalClass, setModalClass] = useState("out")

  return (
    <div>
      <div id="modal-container" className={modalClass} onClick={() => {
        setModalClass('out')
        document.body.classList.remove('modal-active')
      }}>
        <div className="modal-background">
          <div className="modal">
            <h2>I'm a Modal</h2>
            <p>Hear me roar.</p>
            <svg
              className="modal-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none">
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>Modal Animations</h1>
        <div className="buttons">
          <div className="button" onClick={() => {
            setModalClass('one');
            document.body.classList.add('modal-active')
          }}>
            Unfolding
          </div>
          <div className="button" onClick={() => setModalClass('two')}>
            Revealing
          </div>
          <div className="button" onClick={() => setModalClass('three')}>
            Uncovering
          </div>
          <div className="button" onClick={() => setModalClass('four')}>
            Blow Up
          </div>
          <br />
          <div className="button" onClick={() => setModalClass('five')}>
            Meep Meep
          </div>
          <div className="button" onClick={() => setModalClass('six')}>
            Sketch
          </div>
          <div className="button" onClick={() => setModalClass('seven')}>
            Bond
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedModal;