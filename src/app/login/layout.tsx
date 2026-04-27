import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Nanovision",
  description: "Login to your Nanovision account",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
