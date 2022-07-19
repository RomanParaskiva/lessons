import React from 'react'
import { render } from '@testing-library/react'

import Field from './Field'

describe('Field test', () => {
  const { container } = render(<Field width={500} height={500} columns={10} />)

  expect(container).toMatchSnapshot()

  test('renders Field component', () => {
    render(<Field width={500} height={500} columns={10} />)
  })
})