import React, { useState, useEffect, useRef} from 'react';
import Buttons from './Buttons.tsx'


function Calculator() {

	const [value, setValue] = useState('')
	
	const handlerValue = (value: string) => { setValue(value) }

	return (
		<>
			<header className="w-full h-fit px-2 pt-8 pb-4 rounded-ss-xl rounded-se-xl bg-violet-blue">
				<input readOnly value={value} type="text" className="w-full py-3 rounded-xl text-lg bg-slate-600 focus-visible:outline-none text-right text-yellow-light caret-transparent px-3" />
			</header>
			<aside className="w-full p-3 pt-4 grid gap-2 grid-cols-4 grid-rows-5 rounded-es-xl rounded-ee-xl items-center bg-violet-blue relative">
				{<Buttons value={value} handlerValue={handlerValue} />}
			</aside>

		</>
	)

}

export default Calculator;
