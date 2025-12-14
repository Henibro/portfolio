import React from 'react';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-white pt-20 pb-16 overflow-hidden sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Available for Hire
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Hi, I'm {RESUME_DATA.name}</span>
              <span className="block text-blue-600 text-3xl sm:text-4xl mt-2">{RESUME_DATA.title}</span>
            </h1>
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bridging the gap between financial strategy and software solutions. A dual-degree professional crafting efficient, data-driven applications.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition shadow-lg hover:shadow-xl"
                >
                  Contact Me
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-slate-400">
                <a href="#" className="hover:text-blue-600 transition">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-blue-600 transition">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <div className="aspect-[4/5] w-full relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    src="/henok-alem.jpg"
                    alt={RESUME_DATA.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://drive.google.com/file/d/1g7CeauurSZQehUBvluje-cxUQIPU7dJb/view?usp=drive_link";
                      target.onerror = null;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-xl">{RESUME_DATA.name}</p>
                    <p className="text-blue-200 text-sm">{RESUME_DATA.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
