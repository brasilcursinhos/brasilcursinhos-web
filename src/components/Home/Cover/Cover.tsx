'use client'

import Image from 'next/image'
import MapaBrasil from "../Assets/imagens/cover/mapa.png"

export default function Cover() {
	return (
		<>
			<section className="flex items-center justify-center flex-col-reverse p-10 lg:flex-row py-20 gap-20 bg-[#f2f9fb] overflow-hidden">
				<div className="relative">
					<Image
						src={MapaBrasil}
						alt="Mapa do Brasil"
						className="object-contain"
						width={445.47}
						height={458.29}
					/>
				</div>

				<div className="max-w-xl">
					<h1 className="text-[#3D4C62] text-center text-4xl font-bold mb-4 leading-tight lg:text-left">
						Nós representamos, <br className='block sm:hidden'/>
						desenvolvemos e integramos os <br className='block sm:hidden'/>
						cursinhos populares do país
					</h1>
					<p className="text-[#5F7691] mt-4 text-center lg:text-left">
						Trazemos soluções para fortalecer e<br className='block sm:hidden'/> potencializar o Movimento dos <br className='block sm:hidden'/> 
						Cursinhos Populares em todo o<br className='block sm:hidden'/> Brasil e democratizar o acesso ao <br className='block sm:hidden'/> 
						Ensino Superior.
					</p>
				</div>

			</section>
		</>
	)
}