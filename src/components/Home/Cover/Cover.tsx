'use client'

import Image from 'next/image'
import TitleAndCoverDesktop from "../Assets/imagens/cover/title_and_cover_desktop.png" // Renomeei para clareza
import TitleAndCoverMobile from "../Assets/imagens/cover/title_and_cover_mobile.png"   // Você precisa criar esta imagem!

export default function Cover() {
	return (
		<section className="flex items-center justify-center px-10 py-20 bg-[#f2f9fb] overflow-hidden w-full">
			<div className="w-full max-w-6xl flex justify-center">
                {}
                <picture className="w-full flex justify-center">
                    <source
                        srcSet={TitleAndCoverMobile.src}
                        media="(max-width: 639px)"
                    />
                    <Image
                        src={TitleAndCoverDesktop}
                        alt="Nós representamos, desenvolvemos e integramos os cursinhos populares do país"
                        className="object-contain w-full h-auto"
                        priority
                    />
                </picture>
			</div>
		</section>
	)
}
