import React from '@astrojs/react';

function Calculator() {

	const data = ['Borrar', 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/','=']

	function* render(){
		for (let i = 0; i < data.length; i++) {

			yield (
				<button className="aspect-square bg-yellow-light btn-number">{data[i]}</button>
			)
		
		}
	}

	return (
		<>
			<div className="w-full px-2 mt-8 mb-1" id="div_func-res">
				<input type="text" className="w-full py-3 rounded-xl bg-slate-600 focus-visible:outline-none text-right caret-transparent px-3" />
			</div>
			<div className="w-full p-3 rounded-2xl mt-3 grid gap-2 grid-cols-4 grid-rows-4 items-center" id="div_func-op">
				{/* <button className="col-span-2 aspect-auto h-full bg-red-strong btn-number">Borrar</button>
				<button className="aspect-square bg-red-strong btn-number"></button>
				<button className="aspect-square bg-yellow-light btn-number">+</button>
				<button className="aspect-square bg-red-strong btn-number">1</button>
				<button className="aspect-square bg-red-strong btn-number">2</button>
				<button className="aspect-square bg-red-strong btn-number">3</button>
				<button className="aspect-square bg-yellow-light btn-number">-</button>
				<button className="aspect-square bg-red-strong btn-number">4</button>
				<button className="aspect-square bg-red-strong btn-number">5</button>
				<button className="aspect-square bg-red-strong btn-number">6</button>
				<button className="aspect-square bg-yellow-light btn-number">x</button>
				<button className="aspect-square bg-red-strong btn-number">7</button>
				<button className="aspect-square bg-red-strong btn-number">8</button>
				<button className="aspect-square bg-red-strong btn-number">9</button>
				<button className="aspect-square bg-yellow-light btn-number">/</button>
				<button className="aspect-square bg-red-strong btn-number">0</button>
				<button className="aspect-square bg-red-strong btn-number">.</button>
				<button className="col-span-2 h-full aspect-auto bg-yellow-light btn-number">=</button> */}
				{render()}
			</div>

		</>
	)

}

export default Calculator;
