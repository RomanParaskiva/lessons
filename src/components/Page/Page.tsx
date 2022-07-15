import React from 'react'
import Field from '../Field/Field'

import { Header } from '../Header/Header'
import './page.css'


export const Page: React.VFC = () => {

  return (
    <article>
      <Header />

      <section>
        <Field
          width={500}
          height={500}
          columns={10}
        />
      </section>
    </article>
  )
}
