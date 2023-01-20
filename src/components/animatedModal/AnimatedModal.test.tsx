// jest test
import React from 'react';
import { render } from '@testing-library/react';
import { AnimatedModal, ModalAnimation } from './';

describe('AnimatedModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimatedModal animation={ModalAnimation.Unfold} />);
    expect(baseElement).toBeTruthy();
  });
});
