import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

import './AnimatedModal.styles.scss';

import { ModalAnimation } from './AnimatedModal.enums';

/**
 * Animated Modal's props.
 * @interface IAnimatedModalProps
 * @property {boolean} [startOpen] Is modal open?
 * @property {ModalAnimation} animation Modal animation
 * @property {React.ReactNode} [children] Modal's children
 * @property {boolean} [closeOnBackgroundClick] Close modal on background click?
 */
interface IAnimatedModalProps {
  startOpen?: boolean;
  animation: ModalAnimation;
  children?: React.ReactNode;
  closeOnBackgroundClick?: boolean;
}

/**
 * Animated Modal's object.
 * @type AnimatedModalObject
 * @property {() => void} OpenModal Open modal
 * @property {() => void} CloseModal Close modal
 * @property {() => boolean} IsModalOpen Is modal open?
 */
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
const AnimatedModal = forwardRef(
  (props: IAnimatedModalProps, ref: React.Ref<AnimatedModalObject>) => {
    // State
    const [modalClass, setModalClass] = useState('');

    // Ref methods
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

    /**
     * Open modal.
     * @param {ModalAnimation} modalAnimation Modal animation
     * @returns {void}
     */
    function openModal(modalAnimation?: ModalAnimation): void {
      if (modalAnimation) setModalClass(modalAnimation);
      else setModalClass(props.animation);

      document.body.classList.add('modal-active');
    }

    /**
     * Is modal open?
     * @name isModalOpen
     * @returns {boolean} Is modal open?
     * @memberof AnimatedModal
     */
    function isModalOpen(): boolean {
      // Modal is not open if
      // modalClass is empty and if it doesn't contain 'out'
      return modalClass !== '' && !modalClass.includes('out');
    }

    /**
     * Close modal.
     * @name closeModal
     * @returns {void} void
     * @memberof AnimatedModal
     * @fires isModalOpen
     * @fires setModalClass
     */
    function closeModal(): void {
      if (isModalOpen()) {
        setModalClass(modalClass + ' ' + 'out');
        document.body.classList.remove('modal-active');
      } else {
        console.log('[AnimatedModal] CloseModal() called when no modal is open!');
      }
    }

    /**
     * On background click.
     * @name onBackgroundClick
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event Event
     * @returns {void} void
     * @memberof AnimatedModal
     * @fires closeModal
     */
    function onBackgroundClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
      if (event.target !== event.currentTarget) return;

      closeModal();
      console.log('[AnimatedModal]: Background click detected, closing modal!');
    }

    useEffect(() => {
      if (props.startOpen) {
        setModalClass(props.animation);
        document.body.classList.add('modal-active');
      }
    }, [props.startOpen]);

    /**
     * Default modal.
     * @name defaultModal
     * @returns {React.ReactElement} ReactElement
     */
    function defaultModal(): React.ReactElement {
      return (
        <>
          <h2>This is Animated Modal</h2>
          <p>
            Learn more from the{' '}
            <a href="https://github.com/dorbus/react-animated-modal#readme">Documentation</a>.
          </p>
          <button onClick={closeModal}>Close</button>
        </>
      );
    }

    return (
      <div id="animated-modal-container" className={modalClass}>
        <div
          id="animated-modal-background"
          onClick={props.closeOnBackgroundClick ? onBackgroundClick : undefined}>
          <div id="animated-modal">
            <svg
              id="modal-sketch-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none">
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
            <div id="modal-content">{props.children ? props.children : defaultModal()}</div>
          </div>
        </div>
      </div>
    );
  }
);

// Set display name
AnimatedModal.displayName = 'AnimatedModal';

// Set default props
AnimatedModal.defaultProps = {
  startOpen: false,
  animation: ModalAnimation.Unfold,
  closeOnBackgroundClick: true
};

export default AnimatedModal;
