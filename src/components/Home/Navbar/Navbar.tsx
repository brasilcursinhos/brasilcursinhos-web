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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const quemSomosClasses = `
      hover:text-[#109DAD]
      transition-colors
      pb-1
      ${paginaAtiva === 'quem-somos'
      ? `
            text-[#109DAD] font-bold
            relative border-[#109DAD]
            after:content-['']
            after:absolute
            after:left-1/2
            after:-translate-x-1/2
            after:bottom-[-1px]
            after:h-[2px]
            after:w-[40%]
            after:bg-[#109DAD]
          `
      : ''
    }
    `;

  return (
    <nav className="relative flex items-center justify-between p-4 bg-[#EEF9FA]">
      <Logo />

      {/* Menu Desktop */}
      <Menubar className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base text-gray-700 bg-transparent border-none shadow-none px-4 lg:px-20">
        <Link href="/QuemSomos" className={quemSomosClasses}>
          Quem somos
        </Link>

        <MenubarMenu>
          <MenubarTrigger className="hover:text-[#109DAD] transition-colors flex items-center gap-1 cursor-pointer data-[state=open]:text-[#109DAD] p-0">
            O que oferecemos
            <svg className="w-4 h-4 mt-1 fill-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <MenubarTrigger className="hover:text-[#109DAD] transition-colors flex items-center gap-1 cursor-pointer data-[state=open]:text-[#109DAD] p-0">
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

      {/* Menu Mobile */}
      <button className="md:hidden p-2 group hover:bg-gray-200 rounded-lg transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6 text-gray-700 group-hover:text-[#109DAD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-[#EEF9FA] border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/QuemSomos"  className="hover:text-[#109DAD] transition-colors text-sm py-2" onClick={() => setIsMenuOpen(false)}>
              Quem somos
            </Link>
            <div className="border-t pt-2">
              <p className="text-xs font-semibold text-gray-500 mb-2">O que oferecemos</p>
              <Link 
                href="/Eventos" 
                className="block hover:text-[#109DAD] transition-colors text-sm py-1 pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link 
                href="/Mentorias" 
                className="block hover:text-[#109DAD] transition-colors text-sm py-1 pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentorias e capacitações
              </Link>
            </div>
            <Link 
              href="/Rede" 
              className="hover:text-[#109DAD] transition-colors text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nossa rede
            </Link>
            <div className="border-t pt-2">
              <p className="text-xs font-semibold text-gray-500 mb-2">Faça parte</p>
              <Link 
                href="/processo-filiacao" 
                className="block hover:text-[#109DAD] transition-colors text-sm py-1 pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Processo de filiação
              </Link>
              <Link 
                href="/processo-voluntariado" 
                className="block hover:text-[#109DAD] transition-colors text-sm py-1 pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Processo de voluntariado
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
