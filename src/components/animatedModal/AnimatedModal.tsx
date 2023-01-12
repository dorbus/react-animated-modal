import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

import './AnimatedModal.styles.scss';

import { ModalAnimation } from './AnimatedModal.enums';

interface IAnimatedModalProps {
  isOpen?: boolean;
  animation: ModalAnimation;
  children?: React.ReactNode;
}

export type AnimatedModalObject = {
  // eslint-disable-next-line no-unused-vars
  OpenModal: (modalAnimation?: ModalAnimation) => void;
  CloseModal: () => void;
  IsModalOpen: () => boolean;
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

  useImperativeHandle(
    ref,
    () => {
      return {
        OpenModal: openModal,
        CloseModal: closeModal,
        IsModalOpen: isModalOpen
      };
    },
    [props.animation]
  );

  function openModal(modalAnimation?: ModalAnimation) {
    if (modalAnimation) setModalClass(modalAnimation);
    else setModalClass(props.animation);

    document.body.classList.add('modal-active');
  }

  function isModalOpen(): boolean {
    // Modal is not open if
    // modalClass is empty and if it doesn't contain 'out'
    return modalClass !== '' && !modalClass.includes('out');
  }

  function closeModal() {
    if (isModalOpen()) onBackgroundClick();
    else console.log('[AnimatedModal] CloseModal() called when no modal is open!');
  }

  useEffect(() => {
    if (props.isOpen) {
      setModalClass(props.animation);
      document.body.classList.add('modal-active');
    }
  }, [props.isOpen]);

  function onBackgroundClick() {
    setModalClass(modalClass + ' ' + 'out');
    document.body.classList.remove('modal-active');
  }

  return (
    <div id="animated-modal-container" className={modalClass} onClick={onBackgroundClick}>
      <div className="animated-modal-background">
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
  );
};

AnimatedModal.displayName = 'AnimatedModal';
export default forwardRef(AnimatedModal);
