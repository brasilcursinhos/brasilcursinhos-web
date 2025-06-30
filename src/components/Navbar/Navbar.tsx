'use client'

import Logo from './Logo';
import Link from 'next/link';
import { useState } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface NavbarProps {
  paginaAtiva?: string;
}

export default function Navbar({ paginaAtiva }: NavbarProps) {

  const quemSomosClasses = `
      hover:text-[#109DAD]
      transition-colors
      pb-1 /* Adiciona um pouco de espaço para a borda não ficar colada */
      ${paginaAtiva === 'quem-somos'
      ? `
            text-[#109DAD] font-bold
            relative border-[#109DAD]
            after:content-['']
            after:absolute
            after:left-1/2
            after:-translate-x-1/2
            after:bottom-[-1px] /* Posiciona sobre a borda pontilhada */
            after:h-[2px] /* Espessura da linha sólida */
            after:w-[40%]   /* Largura da linha sólida (ajuste conforme o gosto) */
            after:bg-[#109DAD]
          `
      : ''
    }
    `;

  return (
    <nav className="flex items-center justify-between p-4 bg-[#EEF9FA]">
      <Logo />

      <Menubar className="flex items-center px-20 gap-10 text-gray-700 bg-transparent border-none shadow-none">
        <Link href="/QuemSomos" className={quemSomosClasses}>
          Quem somos
        </Link>

        <MenubarMenu>
          <MenubarTrigger className="hover:text-[#109DAD] transition-colors flex items-center gap-1 cursor-pointer data-[state=open]:text-[#109DAD]">
            O que oferecemos
            <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </MenubarTrigger>
          <MenubarContent className="bg-[#EEF9FA] border-none shadow-lg min-w-[12rem]">
            <MenubarItem asChild>
              <Link href="/Eventos" className="px-4 py-2 hover:bg-gray-100">Eventos</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/Mentorias" className="px-4 py-2 hover:bg-gray-100">Mentorias e capacitações</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <Link href="/Rede" className="hover:text-[#109DAD] transition-colors">
          Nossa rede
        </Link>

        <MenubarMenu>
          <MenubarTrigger className="hover:text-[#109DAD] transition-colors flex items-center gap-1 cursor-pointer data-[state=open]:text-[#109DAD]">
            Faça parte
            <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </MenubarTrigger>
          <MenubarContent className="bg-[#EEF9FA] border-none shadow-lg min-w-[12rem]">
            <MenubarItem asChild>
              <Link href="/processo-filiacao" className="cursor-pointer">Processo de filiação</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/processo-voluntariado" className="cursor-pointer">Processo de voluntariado</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  )
}
