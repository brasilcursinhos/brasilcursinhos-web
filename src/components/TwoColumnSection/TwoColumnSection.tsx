import React from "react";

interface TwoColumnSectionProps {
  title: string;
  description: string;
  visualContent: React.ReactNode;
  actions?: React.ReactNode;
  reverseOrder?: boolean;
  className?: string;
}

export function TwoColumnSection({
  title,
  description,
  visualContent,
  actions,
  reverseOrder = false,
  className = "bg-[#f2f9fb]",
}: TwoColumnSectionProps) {
  const orderClass = reverseOrder ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <section
      className={`flex w-full items-center justify-center px-10 py-20 ${className}`}
    >
      <div
        className={`container mx-auto flex flex-col items-center justify-center gap-16 ${orderClass}`}
      >
        <div className="flex w-full justify-center md:w-1/2">
          {visualContent}
        </div>

        <div className="flex w-full flex-col items-start text-left md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-[#3D4C62] mb-4">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h1>
          <p className="mt-4 text-[#5F7691]">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </p>

          {actions && <div className="mt-6">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
