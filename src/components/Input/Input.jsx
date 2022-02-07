import { useState } from 'react'
import style from './Input.css'

export const Input = (props) => {
    const [name, setName] = useState('some name')

    return (
        <>
            <p>{name}</p>
            <input onChange={ev => setName(ev.target.value)} />
        </>
    )
}