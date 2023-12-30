import { Hanken_Grotesk } from "next/font/google";
import Results from "@/components/Results";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col ${hankenGrotesk.className} h-screen overflow-hidden bg-pale-blue lg:items-center lg:justify-center`}
    >
      <Results />
    </main>
  );
}
