import About from "@/components/About";
import Contact from "@/components/Contact";
import Works from "@/components/Works"

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20">
      <About/>
      <Works/>
      <Contact/>
    </main>
  );
}
