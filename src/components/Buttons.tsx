import React from 'react';

const Buttons = () => {

    const data = [
        {
            value: 'Borrar',
            operation: '',
            colspan: 3
        },
        {
            value: '+'
        },
        {
            value: 1,
        },
        {
            value: 2,
        },
        {
            value: 3,
        },
        {
            value: '-'
        },
        {
            value: 4,
        },
        {
            value: 5,
        },
        {
            value: 6,
        },
        {
            value: 'x',
            operation: '*'
        },
        {
            value: 7,
        },
        {
            value: 8,
        },
        {
            value: 9,
        },
        {
            value: '/',
        },
        {
            value: 0,
        },
        {
            value: '.',
        },
        {
            value: '=',
            colspan: 2
        },

    ]

    return (
        <>
            {
                data.map((button, i) => (
                    <button key={i} className={`${typeof button.value == 'string' ? 'btn-operation' : 'btn-number'} ${button.colspan ? `col-span-${button.colspan}` : ''} btn`}><span>{button.value}</span></button>
                ))
            }
        </>
    )

}

export default Buttons;