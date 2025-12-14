import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Academic Background</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Education
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {RESUME_DATA.education.map((edu) => (
            <div key={edu.id} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-xl shadow-md border border-slate-100 hover:border-blue-200 transition-all">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-slate-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {edu.degree}
                  </a>
                </h3>
                <p className="mt-2 text-base text-slate-500">
                  {edu.school}
                </p>
                <div className="mt-4 flex items-center text-sm text-slate-400">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                    {edu.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;