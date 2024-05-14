import React, {useState, type MouseEventHandler} from 'react';
import Buttons from './Buttons.tsx'


function Calculator() {

	const [value, setValue] = useState('')
	const [num1, setNum1] = useState(0)
	const [op, setOp] = useState('')
	const [num2, setNum2] = useState(0)

	return (
		<>
			<div className="w-full px-2 mt-8 mb-1" id="div_func-res">
				<input type="text" className="w-full py-3 rounded-xl bg-slate-600 focus-visible:outline-none text-right caret-transparent px-3" />
			</div>
			<div className="w-full p-3 rounded-2xl mt-3 grid gap-2 grid-cols-4 grid-rows-5 items-center" id="div_func-op">
				{<Buttons />}
			</div>

		</>
	)

}

export default Calculator;
