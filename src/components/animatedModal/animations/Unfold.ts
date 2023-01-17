import { ModalAnimation } from './ModalAnimation';

/**
 * Unfold animation
 * @class Unfold
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new Unfold();
 */
export class Unfold extends ModalAnimation {
  static animationName = 'unfold';

  constructor() {
    super(Unfold.animationName);
  }
}
