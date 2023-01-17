/**
 * ModalAnimation
 * @abstract
 * @class ModalAnimation
 * @constructor with animationName
 * @method getAnimationName
 */
export abstract class ModalAnimation {
  // Name of the animation
  private animationName: string;

  // Constructor
  constructor(animationName: string) {
    this.animationName = animationName;
  }

  getAnimationName(): string {
    return this.animationName;
  }
}
