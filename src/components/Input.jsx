import React from 'react'

export default function Input(props) {
    return (
        <input name={props.name} placeholder={props.placeholder ?? ""} className={props.className + " form-control col mx-1"} onChange={e => props.onChange(e)} type={props.type? props.type : 'number'} />
    )
}
