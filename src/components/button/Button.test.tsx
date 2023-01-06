import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('Should render the Button component', () => {
    render(<Button onClick={jest.fn()} label="Hello world!" />);
  });
});
