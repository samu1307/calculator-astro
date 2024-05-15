import React from 'react';

type Props = {
    value: string;
    num1: number;
    num2: number;
    op: string;
    handlerValue: (value: string) => void;
    handlerNum1: (num1: number) => void;
    handlerNum2: (num2: number) => void;
    handlerOp: (op: string) => void;
}

const Buttons: React.FC<Props> = ({ value, num1, num2, op, handlerValue, handlerNum1, handlerNum2, handlerOp }) => {

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

    const handlerClick = (typeButton: string | number)=>{
        if (typeof typeButton == 'number') {
            if (op.length != 0) {
                handlerNum2(parseInt(num1.toString() + typeButton.toString()))
                console.log('1')
            }else{
                handlerNum1(typeButton)
                handlerValue(value + num1.toString())
                console.log(value + typeButton)
            }
        }

    }

    return (
        <>
            {
                data.map((button, i) => (
                    <button onClick={() => handlerClick(button.value) } key={i} className={`${typeof button.value == 'string' ? 'btn-operation' : 'btn-number'} btn ${button.colspan ? `col-${button.colspan}` : ''}`}><span>{button.value}</span></button>
                ))
            }
        </>
    )

}

export default Buttons;