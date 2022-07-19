import { render } from "@testing-library/react"

import { Page } from "./Page"

describe('test Page', () => { 
    const { container } = render(<Page/>)

    expect(container).toMatchSnapshot()
 })