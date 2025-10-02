import { cn } from "@/lib/utils";
import { useState } from "react";
export default function Example() {
    return (
        <>
            <div className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#5524B7] to-[#380B60] rounded-2xl p-10 text-white font-sans">
                <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-purple-600/10 backdrop-blur border border-purple-500/40 text-sm">
                    <div className="flex items-center">
                        <span className="text-lg mr-2">💼</span>
                        <span className="text-lg mr-2">🚀</span>
                        <span className="text-lg">📈</span>
                    </div>
                    <p className="ml-2 font-medium">Trusted by leading companies and startups</p>
                </div>
                <h1 className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">See my credentials & expertise</h1>
                <p className="text-white/80 max-w-md mt-4">Download my resume to learn more about my experience, skills, and how I can help bring your next project to life.</p>
                <a 
                    href="/resume.pdf" 
                    download
                    className="px-8 py-3 text-white bg-violet-600 hover:bg-violet-700 transition-all rounded-full uppercase text-sm mt-8 inline-block"
                >
                    Download Resume
                </a>
            </div>
        </>
    );
};