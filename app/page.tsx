import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/nav-items";
import { Spotlight } from "@/components/ui/Spotlight";
import { projects } from "@/data/projects";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";
import Contact from "@/components/contact";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";
import About from "@/components/about";
import { WordRotate } from "@/components/magicui/word-rotate";

export default function Home() {
  const words = ["Yacin", "a Developer", "a Designer", "a Creator"];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <main id="home" className="flex w-full h-screen justify-center items-center relative overflow-hidden">
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
            Hi I'm <WordRotate words={words}/>
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </main>

      <About />


      <div className="max-w-5xl mx-auto px-8 min-h-screen">
        <h1 id="projects" className="text-4xl md:text-2xl lg:text-4xl font-semibold text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white capitalize"><span className="text-blue-800">our</span><br /><Cover>amazing projects</Cover>
        </h1>
        <HoverEffect items={projects} />
      </div>
      <WavyBackground className="max-w-4xl mx-auto pb-40 relative h-screen w-full">
        <Contact />
      </WavyBackground>
    </>
  );
}
