import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { FieldItem } from './FieldItem'

describe('FieldItem', () => {
  test('renders Field component', () => {
    const handleClick = jest.fn()
    render(<FieldItem onClick={handleClick} id={1} checked width={50} />);
    const fieldItem = document.querySelector('.fieldItem')
    fireEvent.click(fieldItem, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    expect(handleClick).toBeCalled()
  });
});