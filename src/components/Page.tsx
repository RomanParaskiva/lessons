import React from 'react'
import Field from './Field'

import { Header } from './Header'
import '../styles/page.css'


export const Page: React.VFC = () => {

  return (
    <article>
      <Header />

      <section>
        <Field
          width={1000}
          height={1000}
          columns={30}
        />
      </section>
    </article>
  )
}
