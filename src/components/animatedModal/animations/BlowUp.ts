import { ModalAnimation } from './ModalAnimation';

/**
 * BlowUp animation
 * @class BlowUp
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new BlowUp();
 */
export class BlowUp extends ModalAnimation {
  static animationName = 'blowUp';

  constructor() {
    super(BlowUp.animationName);
  }
}
