import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FieldItem } from './FieldItem'

describe('FieldItem', () => {
    test('renders Field component', () => {
      render(<FieldItem id={1} checked width={50} />);
    });
  });