'use client'

import Link from "next/link";
import Image from "next/image";
import check from "../Assets/imagens/carrosel/check.svg";
import union from "../Assets/imagens/carrosel/union.svg";
import union2 from "../Assets/imagens/carrosel/union2.svg";
import union3 from "../Assets/imagens/carrosel/union3.svg";
import union4 from "../Assets/imagens/carrosel/union4.svg";
import image_carrosel from "../Assets/imagens/carrosel/image_carrosel.svg";
import { useState } from "react";

export default function Carrosel() {

    const imagens = [union, union2, union3, union4];
    const [indexAtual, setIndexAtual] = useState(0);

    const proximaImagem = () => {
        setIndexAtual ((indexAtual + 1) % imagens.length);
    }

    const imagemAnterior = () => {
        setIndexAtual((indexAtual - 1 + imagens.length) % imagens.length);
    }

    return (
        <div className={`px-6 py-10 max-w-7xl mx-auto`}>
            <div className={`grid md:grid-cols-2 gap-8 items-center`}>

                <div>
                    <h3 className={`text-[#E16919] font-semibold text-2xl mb-2`}>
                        Quem somos
                    </h3>
                    <h1 className={`text-[#3D4C62] text-2xl md:text-3xl font-bold mb-6`}>
                        Trabalhamos para os cursinhos e pelos cursinhos
                    </h1>

                    <ul className={`space-y-4`}>
                        <li className={`flex items-start gap-2 text-[#5F7691]`}>
                            <Image src={check} alt="check" className="object-contain" width={20} height={20} />
                            <span>Somos uma organização sem fins lucrativos, de caráter<br/> socioeducativo;</span>
                        </li>

                        <li className={`flex items-start gap-2 text-[#5F7691]`}>
                            <Image src={check} alt="check" className="object-contain" width={20} height={20} />
                            <span>Buscamos fortalecer os cursinhos populares do Brasil,<br/> oferecendo suporte, capacitações, mentorias, contato com<br/> parceiros e eventos com outros cursinhos populares;</span>
                        </li>

                        <li className={`flex items-start gap-2 text-[#5F7691]`}>
                            <Image src={check} alt="check" className="object-contain" width={20} height={20} />
                            <span>Nosso objetivo é alcançar uma educação superior cada vez<br/> mais plural, inclusiva e democrática.</span>
                        </li>
                    </ul>
                    <div className={`mt-6`}>
                        <Link href="/QuemSomos">
                            <button className={`bg-[#109DAD] text-white px-6 py-2 rounded-lg cursor-pointer`}>
                                Conheça mais sobre a gente
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-[500px] h-[350px]">
                    <Image
                        src={imagens[indexAtual]}
                        alt="Equipe unida"
                        fill
                        className="rounded-lg object-cover"
                    />
                    <button
                            onClick={imagemAnterior}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full transition cursor-pointer">
                            {"<"}
                        </button>
                    <button
                            onClick={proximaImagem}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full transition cursor-pointer">
                            {">"}
                    </button>
                </div>
                <div className="mt-4 text-[#109DAD] font-semibold">
                <div className="flex gap-1 px-2">
                <Image
                        src={image_carrosel}
                        alt="Equipe unida"
                        width={20}
                        height={20}
                    />
                        {indexAtual + 1} DE {imagens.length}
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
}