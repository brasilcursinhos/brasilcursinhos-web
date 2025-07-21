'use client'

import Image from 'next/image'
import MapaBrasil from "../Assets/imagens/cover/mapa-brasil.svg"
import Pessoa1 from "../Assets/imagens/cover/pessoa1.svg"
import Pessoa2 from "../Assets/imagens/cover/pessoa2.svg"
import Pessoa3 from "../Assets/imagens/cover/pessoa3.svg"
import Pessoa4 from "../Assets/imagens/cover/pessoa4.svg"
import Pessoa5 from "../Assets/imagens/cover/pessoa5.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const pessoas = [
	{
		src: Pessoa1.src,
		alt: "Pessoa 1",
		fallback: "P1",
		className: "absolute top-6 left-16 w-[105px] h-[105px] border-4 border-white",
	},
	{
		src: Pessoa2.src,
		alt: "Pessoa 2",
		fallback: "P2",
		className: "absolute bottom-40 left-2 w-[101px] h-[101px] border-4 border-white",
	},
	{
		src: Pessoa3.src,
		alt: "Pessoa 3",
		fallback: "P3",
		className: "absolute top-28 left-45 w-[110px] h-[110px] border-4 border-white",
	},
	{
		src: Pessoa4.src,
		alt: "Pessoa 4",
		fallback: "P4",
		className: "absolute top-20 right-1 w-[108px] h-[108px] border-4 border-white",
	},
	{
		src: Pessoa5.src,
		alt: "Pessoa 5",
		fallback: "P5",
		className: "absolute bottom-30 right-2 w-[100px] h-[100px] border-4 border-white",
	},
];

export default function Cover() {
	return (
		<>
			<section className="flex items-center justify-center px-10 py-20 gap-20 bg-[#f2f9fb] overflow-hidden">
				<div className="relative">
					<Image
						src={MapaBrasil}
						alt="Mapa do Brasil"
						className="object-contain"
						width={445.47}
						height={458.29}
					/>
					{pessoas.map((pessoa, idx) => (
						<div className={pessoa.className} key={idx}>
							<Avatar className="w-full h-full border-4 border-white">
								<AvatarImage src={pessoa.src} alt={pessoa.alt} />
								<AvatarFallback>{pessoa.fallback}</AvatarFallback>
							</Avatar>
						</div>
					))}
				</div>

				<div className="max-w-xl">
					<h1 className="text-[#3D4C62] text-4xl font-bold mb-4 leading-tight">
						Nós representamos, <br />
						desenvolvemos e integramos <br />
						os cursinhos populares do país
					</h1>
					<p className="text-[#5F7691] mt-4">
						Trazemos soluções para fortalecer e potencializar o Movimento <br /> dos
						Cursinhos Populares em todo o Brasil e democratizar o<br /> acesso ao
						Ensino Superior.
					</p>
				</div>
			</section>
		</>
	)
}