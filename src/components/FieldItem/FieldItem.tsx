import React, { useState } from 'react'
import './fieldItem.css'

interface IFieldItem {
    id?: number | null,
    checked?: boolean | null,
    width?: number,
    onClick: any
}

const FieldItem = ({ id, checked, width }: IFieldItem) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleClick = () => {
        setIsChecked((prev) => !prev)
    }
    
    return (
        <div id={`${id}`} style={{
            width: width + 'px',
            height: width + 'px',
            backgroundColor: isChecked ? 'purple' : '',
            color: isChecked ? 'white' : ''
        }}
            className="fieldItem"
            onClick={handleClick}
        >
            <span>{id}</span>
        </div>
    )
}


export { FieldItem }
export type { IFieldItem }