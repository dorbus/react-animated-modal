import { ModalAnimation } from './ModalAnimation';

/**
 * Uncover animation
 * @class Uncover
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new Uncover();
 */
export class Uncover extends ModalAnimation {
  static animationName = 'uncover';

  constructor() {
    super(Uncover.animationName);
  }
}
