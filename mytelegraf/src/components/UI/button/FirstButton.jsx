import React from 'react'
import classes from './FirstButton.module.css'

const FirstButton = ({ children, ...props}) => {
    return (
        <button {...props} className={classes.frstBtn }>
            {children }
        </button>
        )
}

export default FirstButton