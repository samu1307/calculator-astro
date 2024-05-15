import React, { useState } from 'react';

type Props = {
    value: string;
    handlerValue: (value: string) => void;
}

const Buttons: React.FC<Props> = ({ value, handlerValue }) => {

    const [isActive, setIsActive] = useState(true)

    const data = [
        {
            value: 'Borrar',
            colspan: 2
        },
        {
            value: 'B'
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

    const TYPE_OF_FUNCTIONS = {
        DELETE: 'Borrar',
        BACK: 'B',
        RESOLVE: '=',
    }

    const operation = (btn: string | number): string => typeof btn == 'string' ? 'btn-operation' : 'btn-number'
    const classBtns = (value: string | number, col: number | undefined) => `${operation(value)} col-${col}`

    const handlerClick = (valueP: string | number, operation: string | undefined = undefined) => {

        const valueNow: string = (operation) ? operation : valueP.toString()

        if (valueNow == TYPE_OF_FUNCTIONS.DELETE) {
            handlerValue('')
            setIsActive(true)
            return
        }

        if (!isActive) {
            return
        }

        if (valueNow == TYPE_OF_FUNCTIONS.BACK) {
            try {
                handlerValue(value.slice(0, -1))
            } catch (error) {
                error
            }
            return
        }

        if (valueNow == TYPE_OF_FUNCTIONS.RESOLVE && isActive) {
            try {
                handlerValue(eval(value))
            } catch (error) {
                handlerValue('Error')
                setIsActive(!isActive)
            }
            return
        }

        if (value.length == 0) {
            handlerValue(valueNow.toString())
        } else {
            handlerValue(value + valueNow.toString())
        }
    }

    return (
        <>
            {
                data.map(({ value, colspan, operation }) => (
                    <button onClick={() => handlerClick(value, operation)} key={value} className={classBtns(value, colspan)}>{value}</button>
                ))
            }
        </>
    )

}

export default Buttons;