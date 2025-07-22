'use client'

import Link from "next/link"
import Image from "next/image"
import check from "../Assets/imagens/carrosel/check.svg"
import union from "../Assets/imagens/carrosel/union.svg"
import union2 from "../Assets/imagens/carrosel/union2.svg"
import union3 from "../Assets/imagens/carrosel/union3.svg"
import union4 from "../Assets/imagens/carrosel/union4.svg"
import image_carrosel from "../Assets/imagens/carrosel/image_carrosel.svg"
import { useState, useEffect } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"


export default function Carrosel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const imagens = [union, union2, union3, union4]

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className={`px-6 py-10 max-w-7xl mx-auto`}>
            <div className={`grid lg:grid-cols-5 gap-8 items-center`}>

                <div className="lg:col-span-3">
                    <h3 className={`text-[#E16919] font-semibold text-2xl mb-2`}>
                        Quem somos
                    </h3>
                    <h1 className={`text-[#3D4C62] text-2xl md:text-3xl font-bold mb-6`}>
                        Trabalhamos para os cursinhos e pelos cursinhos
                    </h1>

                    <ul className={`space-y-4`}>
                        <li className={`flex items-start gap-2 text-[#5F7691]`}>
                            <Image src={check} alt="check" className="object-contain" width={20} height={20} />
                            <span>Somos uma organização sem fins lucrativos, de caráter socioeducativo;</span>
                        </li>

                        <li className={`flex items-start gap-2 text-[#5F7691]`}>
                            <Image src={check} alt="check" className="object-contain" width={20} height={20} />
                            <span>Buscamos fortalecer os cursinhos populares do Brasil, oferecendo suporte, capacitações, mentorias, contato com parceiros e eventos com outros cursinhos populares;</span>
                        </li>

                        <li className={`flex items-start gap-2 text-[#5F7691]`}>
                            <Image src={check} alt="check" className="object-contain" width={20} height={20} />
                            <span>Nosso objetivo é alcançar uma educação superior cada vez mais plural, inclusiva e democrática.</span>
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


                <div className="lg:col-span-2 flex flex-col items-center">
                    <Carousel
                        setApi={setApi}
                        className="w-full"
                        opts={{ loop: true }}
                    >
                        <CarouselContent>
                            {imagens.map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative w-full aspect-[10/7]">
                                        <Image
                                            src={img}
                                            alt={`Imagem ${index + 1}`}
                                            fill
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full" />
                        <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full" />
                    </Carousel>

                    <div className="mt-4 text-[#109DAD] font-semibold">
                        <div className="flex gap-1 px-2 items-center">
                            <Image
                                src={image_carrosel}
                                alt="Ícone carrossel"
                                width={20}
                                height={20}
                            />
                            {current} DE {count}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}