import { ModalAnimation } from './ModalAnimation';

/**
 * Reveal animation
 * @class Reveal
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new Reveal();
 */
export class Reveal extends ModalAnimation {
  static animationName = 'reveal';

  constructor() {
    super(Reveal.animationName);
  }
}
