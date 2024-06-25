import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20">
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
