'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo1 from "../Assets/imagens/nossa-rede/1.png";
import logo2 from "../Assets/imagens/nossa-rede/2.png";
import logo3 from "../Assets/imagens/nossa-rede/3.png";
import logo4 from "../Assets/imagens/nossa-rede/4.png";
import logo5 from "../Assets/imagens/nossa-rede/5.png";
import logo6 from "../Assets/imagens/nossa-rede/6.png";
import logo7 from "../Assets/imagens/nossa-rede/7.png";
import logo8 from "../Assets/imagens/nossa-rede/8.png";
import logo9 from "../Assets/imagens/nossa-rede/9.png";
import logo10 from "../Assets/imagens/nossa-rede/10.png";
import logo11 from "../Assets/imagens/nossa-rede/11.png";
import logo12 from "../Assets/imagens/nossa-rede/12.png";
import logo13 from "../Assets/imagens/nossa-rede/13.png";
import logo14 from "../Assets/imagens/nossa-rede/14.png";
import logo15 from "../Assets/imagens/nossa-rede/15.png";
import logo16 from "../Assets/imagens/nossa-rede/16.png";
import logo17 from "../Assets/imagens/nossa-rede/17.png";
import logo18 from "../Assets/imagens/nossa-rede/18.png";
import logo19 from "../Assets/imagens/nossa-rede/19.png";
import logo20 from "../Assets/imagens/nossa-rede/20.png";
import logo21 from "../Assets/imagens/nossa-rede/21.png";
import logo22 from "../Assets/imagens/nossa-rede/22.png";
import logo23 from "../Assets/imagens/nossa-rede/23.png";
import logo24 from "../Assets/imagens/nossa-rede/24.png";
import logo25 from "../Assets/imagens/nossa-rede/25.png";
import logo26 from "../Assets/imagens/nossa-rede/26.png";
import logo27 from "../Assets/imagens/nossa-rede/27.png";
import logo28 from "../Assets/imagens/nossa-rede/28.png";

const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, 
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, 
    logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28
];
    
const logosPorPagina = 4;
const botaoBase = "w-8 h-8 flex items-center justify-center rounded-full border border-[#cfd8dc] bg-white text-[#3D4C62] transition-all duration-200";

export default function NossaRede() {
    const totalPaginas = Math.ceil(logos.length / logosPorPagina);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const logosVisiveis = logos.slice(
        paginaAtual * logosPorPagina,
        paginaAtual * logosPorPagina + logosPorPagina
    );

    const paginaAnterior = () => {
        if (paginaAtual > 0){
            setPaginaAtual(paginaAtual - 1);
        }
    }

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas - 1){
            setPaginaAtual(paginaAtual + 1);  
        }
    }

    return (
        <section className="px-6 py-10 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h3 className="text-[#E16919] font-semibold text-2xl mb-2">Nossa rede</h3>
                        <h1 className="text-[#3D4C62] text-2xl font-bold mb-10">Cursinhos que constroem juntos</h1>
                    </div>

                    {/*<div className="text-center md:text-right">
                        <Link href="/Rede">
                            <button className="bg-[#109DAD] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
                                Conheça a rede
                            </button>
                        </Link>
                    </div>*/}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-7 mt-12">
                    {logosVisiveis.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center h-20">
                            <Image
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                width={120}
                                height={60}
                                className="object-contain mb-10"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-2 mt-20">
                    <span className="text-sm font-medium text-[#3D4C62]">
                        {paginaAtual + 1} DE {totalPaginas}
                    </span>

                    <button
                        type="button"
                        onClick={paginaAnterior}
                        disabled={paginaAtual === 0}
                        className={`${botaoBase} ${paginaAtual === 0 ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-[#109DAD] hover:text-white active:bg-[#109DAD] active:text-white"}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={proximaPagina}
                        disabled={paginaAtual === totalPaginas - 1}
                        className={`${botaoBase} ${paginaAtual === totalPaginas - 1 ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-[#109DAD] hover:text-white active:bg-[#109DAD] active:text-white"}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
