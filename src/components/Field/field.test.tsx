import React from 'react'
import { render } from '@testing-library/react'

import Field from './Field'

describe('Field', () => {
    test('renders Field component', () => {
      render(<Field  width={500} height={500} columns={10}/>);
    });
  });