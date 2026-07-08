'use client'

import Image from 'next/image'
import TitleAndCover from "../Assets/imagens/cover/title_and_cover.png"

export default function Cover() {
	return (
		<section className="flex items-center justify-center px-10 py-20 bg-[#f2f9fb] overflow-hidden w-full">
			<div className="w-full max-w-6xl flex justify-center">
				<Image
					src={TitleAndCover}
					alt="Nós representamos, desenvolvemos e integramos os cursinhos populares do país"
					className="object-contain w-full h-auto"
					priority
				/>
			</div>
		</section>
	)
}
