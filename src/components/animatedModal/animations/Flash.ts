import { ModalAnimation } from './ModalAnimation';

/**
 * Flash animation
 * @class Flash
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new Flash();
 */
export class Flash extends ModalAnimation {
  static animationName = 'flash';

  constructor() {
    super(Flash.animationName);
  }
}
