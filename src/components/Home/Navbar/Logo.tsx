import Image from 'next/image';
import Link from 'next/link';
import logotipo from "../Assets/imagens/navBar/logotipo.svg";


export default function Logo() {
    return (
        <div className={`flex items-center gap-2`}>
            <Link href="/" className={`flex items-center gap-2`}>
                <Image src={logotipo} width={30.04} height={25.33} alt="Logo" priority />
                <span className={`text-[#109DAD] font-semibold text-lg`}>Brasil Cursinhos</span>
            </Link>
        </div>
    )
}