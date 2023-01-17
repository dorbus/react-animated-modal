import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

import './AnimatedModal.styles.scss';

import { ModalAnimation, Sketch, Unfold } from './animations';

/**
 * Animated Modal's props.
 * @interface IAnimatedModalProps
 * @property {boolean} [isOpen] Is modal open?
 * @property {ModalAnimation} animation Modal animation
 * @property {React.ReactNode} [children] Modal's children
 * @property {boolean} [closeOnBackgroundClick] Close modal on background click?
 */
interface IAnimatedModalProps {
  /**
   * Open Modal on startup.
   * @param {boolean} [startOpen] Open Modal on startup?
   * @default false
   */
  startOpen?: boolean;

  /**
   * Modal animation.
   * @param {ModalAnimation} animation Modal animation
   * @default new Unfold()
   */
  animation: ModalAnimation;

  /**
   * Modal's children.
   * @param {React.ReactNode} [children] Modal's children
   */
  children?: React.ReactNode;

  /**
   * Close modal on background click.
   * @param {boolean} [closeOnBackgroundClick] Close modal on background click?
   * @default true
   */
  closeOnBackgroundClick?: boolean;
}

/**
 * Animated Modal's object.
 * @type AnimatedModalObject
 * @member {() => void} OpenModal Open modal
 * @member {() => void} CloseModal Close modal
 * @member {() => boolean} IsModalOpen Is modal open?
 */
export type AnimatedModalObject = {
  /**
   * Open modal.
   * @param {string} [animation] Modal animation
   * @returns {void} void
   */
  // eslint-disable-next-line no-unused-vars
  OpenModal: (animation?: string) => void;

  /**
   * Close modal with open modal animation.
   * @returns {void} void
   */
  CloseModal: () => void;

  /**
   * Check if modal is open.
   * @returns {boolean} is modal open?
   */
  IsModalOpen: () => boolean;
};

/**
 * Animated Modal.
 * @param {IAnimatedModalProps} props Animated modal's props
 * @param {React.Ref<AnimatedModalObject>} ref Animated modal's ref
 * @returns AnimatedModal.
 */
export const AnimatedModal = forwardRef(
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
     * @param {string} animation Modal animation
     * @returns {void}
     */
    function openModal(animation?: string): void {
      if (animation) setModalClass(animation);
      else setModalClass(props.animation.getAnimationName());

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
        setModalClass(props.animation.getAnimationName());
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

    function sketchSVG(): React.ReactElement {
      return (
        <svg
          id="modal-sketch-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none">
          <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
        </svg>
      );
    }

    console.log(modalClass);

    return (
      <div id="animated-modal-container" className={modalClass}>
        <div
          id="animated-modal-background"
          onClick={props.closeOnBackgroundClick ? onBackgroundClick : undefined}>
          <div id="animated-modal">
            {modalClass.includes(Sketch.animationName) ? sketchSVG() : undefined}
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
  animation: new Unfold(),
  closeOnBackgroundClick: true
};
