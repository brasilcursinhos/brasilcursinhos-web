import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brasil Cursinhos",
  description: "Cursinhos universitários",
};

export default function QuemSomosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
