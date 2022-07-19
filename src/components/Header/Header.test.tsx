import { render } from "@testing-library/react"

import { Header } from "./Header"

describe('test Header', () => { 
    const { container } = render(<Header/>)

    expect(container).toMatchSnapshot()
 })