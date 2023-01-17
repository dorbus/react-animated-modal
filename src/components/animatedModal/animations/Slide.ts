import { ModalAnimation } from './ModalAnimation';

/**
 * Slide animation
 * @class Slide
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new Slide();
 */
export class Slide extends ModalAnimation {
  static animationName = 'slide';

  constructor() {
    super(Slide.animationName);
  }
}
