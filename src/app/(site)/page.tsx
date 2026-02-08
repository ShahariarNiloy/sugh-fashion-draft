import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sugh Fashion | Elegance in Every Thread",
  description: "Discover exquisite Indian ethnic wear - Sarees, Kurtis, Lehengas, Suits, and more. Traditional elegance with contemporary aesthetics.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
