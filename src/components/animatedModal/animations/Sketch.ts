import { ModalAnimation } from './ModalAnimation';

/**
 * Sketch animation
 * @class Sketch
 * @constructor
 * @param {
 * animationName: string
 * }
 * @extends ModalAnimation
 * @example
 * new Sketch();
 */
export class Sketch extends ModalAnimation {
  static animationName = 'sketch';

  constructor() {
    super(Sketch.animationName);
  }
}
