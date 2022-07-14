import React, { useState } from 'react'
import { matrixArray, handleMatrix } from '../utils/functions'

import {FieldItem, type IFieldItem} from './FieldItem'

import '../styles/field.css'

interface IField {
    columns: number,
    width: number,
    height: number
}

const Field = ({ columns, width, height }: IField) => {

    const [matrix, setMatrix] = useState(() => matrixArray(columns, columns))
   
    return (
        <div style={{
            width: width + 'px',
            height: height + 'px',
        }}
        className='field'>
            {handleMatrix(matrix, (item:IFieldItem) => {return <FieldItem key={item.id} width={width / columns} {...item} />})}
        </div>
    )
}

export default Field