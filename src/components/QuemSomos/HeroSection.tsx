import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { TwoColumnSection } from '@/components/TwoColumnSection/TwoColumnSection';
import illustration from '../QuemSomos/Assets/imagens/illustration.png';

export function HeroSection() {
    const visual = (
        <Image
      src={illustration}
      alt="Ilustração de pessoas em uma chamada de vídeo"
      width={550}
      height={400}
      className="rounded-lg"
    />
    );

    const actionButtons = (
        <Button variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 cursor-pointer">
      <Download className="mr-2 h-5 w-5 " />
      Baixar nossa apresentação institucional
    </Button>
    );

    return (
    <TwoColumnSection
      title="De aluno para aluno, <br /> transformamos a história!"
      description="Nós acreditamos que juntos podemos alcançar um Brasil mais justo e inclusivo por meio da educação."
      visualContent={visual}
      actions={actionButtons}
      reverseOrder={false} 
      className="bg-[#F0F7F7]" 
    />
    );
}