import React, { useState } from 'react';
import Buttons from './Buttons.tsx'


function Calculator() {

	const [value, setValue] = useState('')
	const [num1, setNum1] = useState(0)
	const [op, setOp] = useState('')
	const [num2, setNum2] = useState(0)
	
	const handlerValue = (value: string) => { setValue(value) }
	const handlerNum1 = (num1: number) => { setNum1(num1) }
	const handlerNum2 = (num2: number) => { setNum2(num2) }
	const handlerOp = (op: string) => { setOp(op) }

	return (
		<>
			<div className="w-full px-2 mt-8 mb-1" id="div_func-res">
				<input defaultValue={value} type="text" className="w-full py-3 rounded-xl bg-slate-600 focus-visible:outline-none text-right caret-transparent px-3" />
			</div>
			<div className="w-full p-3 rounded-2xl mt-3 grid gap-2 grid-cols-4 grid-rows-5 items-center" id="div_func-op">
				{<Buttons value={value} num1={num1} num2={num2} op={op} handlerValue={handlerValue} handlerNum1={handlerNum1} handlerNum2={handlerNum2} handlerOp={handlerOp} />}
			</div>

		</>
	)

}

export default Calculator;
