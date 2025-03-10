import React from 'react'
import { Cover } from '@/components/ui/cover'
import { CardSpotlight } from '@/components/ui/card-spotlight'

const About = () => {
    return (
        <div className=" min-h-screen max-w-screen flex justify-evenly items-center flex-col m-16">


            <h1 id="about" className="text-4xl md:text-2xl lg:text-4xl font-semibold text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white capitalize"><span className="text-blue-800">Get To</span><br /><Cover>Know Me</Cover>
            </h1>
            <CardSpotlight className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/yacin_me.jpg"
                    className="max-w-sm rounded-lg shadow-2xl z-20" />
                <div className='z-20'>
                    <h1 className="text-5xl font-bold">Full Stack Developer (Next.js)</h1>
                    <p className="py-6">
                        Experienced in building modern, scalable web applications using Next.js, React, and JavaScript/TypeScript. Skilled in front-end and back-end development, with a focus on performance, SEO, and user experience. Passionate about coding, problem-solving, and creating efficient web solutions.
                    </p>
                    <button type='submit' className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Download Resume
                        </span>
                    </button>
                </div>
            </CardSpotlight>
        </div>
    )
}

export default About