import { render, fireEvent } from '@testing-library/react'

import { FieldItem } from './FieldItem'

describe('FieldItem', () => {
  test('renders Field component', () => {
    
    const { container } = render(<FieldItem id={1} checked width={50} />);
   
    // fireEvent.click(container, new MouseEvent('click', {
    //   bubbles: true,
    //   cancelable: true,
    // }))
    // expect(container).toBeCalledTimes(1)
    expect(container).toMatchSnapshot()
  });
});