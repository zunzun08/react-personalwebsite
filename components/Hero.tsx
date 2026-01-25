import React from 'react';
import Image from 'next/image';
import TextType from '@/components/animations/TextType';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 min-h-screen place-items-center gap-8 px-4">
        <div className="flex justify-center items-center">
            <Image 
                className="rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300" 
                src="/images/me.jpg" 
                alt="Cristian Compean"
                width={384}
                height={384}
                priority
            />
        </div>
        
        <div className="text-center col-span-1 md:col-span-2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-black mb-4">
                <TextType 
                    text={[
                        "Hi, I'm Cristian Compean",
                        "Data Professional",
                        "Machine Learning Specialist",
                        "Welcome to my website!"
                    ]}
                    typingSpeed={80}
                    deletingSpeed={75}
                    pauseDuration={1500}
                    cursorCharacter="_"
                    cursorBlinkDuration={0.5}
                />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Full Stack Developer & Designer
            </p>
            <div>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-purple-700 transition-all shadow-md">
                    View My Work
                </button>
            </div>
        </div>
    </section>
  );
}