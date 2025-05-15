'use client'

import Link from "next/link";
import Image from "next/image";
import galt_logo from "../Assets/imagens/nossa-rede/galt_logo.svg";
import cursinho_popular from "../Assets/imagens/nossa-rede/cursinho_popular_usp_logo.svg";
import nubo from "../Assets/imagens/nossa-rede/nubo_logo.svg";
import med_aprova from "../Assets/imagens/nossa-rede/medaprova_logo.svg";
import cats_logo from "../Assets/imagens/nossa-rede/cats_logo.svg";
import each_usp_logo from "../Assets/imagens/nossa-rede/each_usp_logo.svg";
import garra_logo from "../Assets/imagens/nossa-rede/garra_logo.svg";
import iny_logo from "../Assets/imagens/nossa-rede/iny_vestibulares_logo.svg";
import { useState } from "react";

export default function NossaRede() {

    const logos = [galt_logo, cursinho_popular, nubo, med_aprova, cats_logo, each_usp_logo, garra_logo, iny_logo];
    const logosPorPagina = 4;
    const totalPaginas = Math.ceil(logos.length / logosPorPagina);
    const [paginaAtual, setPaginaAtual] = useState(0);


    const proximaPagina = () => {
        setPaginaAtual((paginaAtual + 1) % totalPaginas);
    }

    const paginaAnterior = () => {
        setPaginaAtual((paginaAtual - 1 + totalPaginas) % totalPaginas);
    }

    const logosVisiveis = logos.slice(
        paginaAtual * logosPorPagina,
        paginaAtual * logosPorPagina + logosPorPagina
    );

    return (
        <section className="px-6 py-10 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h3 className="text-[#E16919] font-semibold text-2xl mb-2">Nossa rede</h3>
                        <h1 className="text-[#3D4C62] text-2xl font-bold mb-10">Cursinhos que constroem juntos</h1>
                    </div>

                    <div className="text-center md:text-right">
                        <Link href="/Rede">
                            <button className="bg-[#109DAD] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
                                Conheça a rede
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-6">
                    {logosVisiveis.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center h-20">
                            <Image
                                src={logo}
                                alt={`Logo ${index}`}
                                width={120}
                                height={60}
                                className="object-contain m b-10"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-2 mt-20">
                    <span className="text-sm font-medium text-[#3D4C62]">
                        {paginaAtual + 1} DE {totalPaginas}
                    </span>
                    <button
                        onClick={paginaAnterior}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#ccc] text-black cursor-pointer"
                    >
                        {"<"}
                    </button>

                    <button
                        onClick={proximaPagina}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#109DAD] text-white cursor-pointer"
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </section>
    );
}