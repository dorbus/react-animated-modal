import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

import './AnimatedModal.styles.css';
import './AnimatedModal.styles.scss';

import { Animation } from './Animation.enums';

interface IAnimatedModalProps {
  isOpen?: boolean;
  animation: Animation;
  children?: React.ReactNode;
}

export type AnimatedModalObject = {
  OpenModal: () => void;
};

/**
 * Animated Modal.
 *
 * @param {IAnimatedModalProps} props Animated modal's props
 * @param {React.Ref<AnimatedModalObject>} ref Animated modal's ref
 * @returns AnimatedModal.
 */
const AnimatedModal = (props: IAnimatedModalProps, ref: React.Ref<AnimatedModalObject>) => {
  // States
  const [modalClass, setModalClass] = useState('');
  // const modalRef = React.useRef<AnimatedModalObject>(null);

  useImperativeHandle(
    ref,
    () => {
      console.log('useImperativeHandle Called');
      return { OpenModal };
    },
    [props.animation]
  );

  function OpenModal() {
    console.log('OpenModal Called');
    setModalClass(props.animation);
    document.body.classList.add('modal-active');
  }

  useEffect(() => {
    if (props.isOpen) {
      setModalClass(props.animation);
      document.body.classList.add('modal-active');
    }
  }, [props.isOpen]);

  function onBackgroundClick() {
    setModalClass('out');
    document.body.classList.remove('modal-active');
  }

  return (
    <div id="modal-container" className={modalClass} onClick={() => onBackgroundClick()}>
      <div className="modal-background">
        <div className="modal">
          {props.children ? (
            props.children
          ) : (
            <>
              <h2>I am a Modal</h2>
              <p>Hear me roar.</p>
            </>
          )}
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
    /* <div className="content">
        <h1>Modal Animations</h1>
        <div className="buttons">
          <div
            className="button"
            onClick={() => {
              setModalClass('one');
              document.body.classList.add('modal-active');
            }}>
            Unfolding
          </div>
          <div
            className="button"
            onClick={() => {
              return setModalClass('two');
            }}>
            Revealing
          </div>
          <div
            className="button"
            onClick={() => {
              return setModalClass('three');
            }}>
            Uncovering
          </div>
          <div
            className="button"
            onClick={() => {
              return setModalClass('four');
            }}>
            Blow Up
          </div>
          <br />
          <div
            className="button"
            onClick={() => {
              return setModalClass('five');
            }}>
            Meep Meep
          </div>
          <div
            className="button"
            onClick={() => {
              return setModalClass('six');
            }}>
            Sketch
          </div>
          <div
            className="button"
            onClick={() => {
              return setModalClass('seven');
            }}>
            Bond
          </div>
        </div>
      </div> */
  );
};

// AnimatedModal.defaultProps = {
//   isOpen: false,
//   animation: Animation.Unfold
// };

AnimatedModal.displayName = 'AnimatedModal';
export default forwardRef(AnimatedModal);
