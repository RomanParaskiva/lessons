import React, { useState } from 'react'
import '../styles/fieldItem.css'

interface IFieldItem {
    id?: number | null,
    checked?: boolean | null,
    width?: number
}

const FieldItem = ({ id, checked, width }: IFieldItem) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleClick = (): void => {
        setIsChecked((prev) => !prev)
    }
    return (
        <div style={{
            width: width + 'px',
            height: width + 'px',
            backgroundColor: isChecked ? 'purple' : '',
            color: isChecked ? 'white' : ''
        }}
            className="fieldItem"
            onClick={handleClick}
        >
            {id}
        </div>
    )
}


export { FieldItem }
export type { IFieldItem }