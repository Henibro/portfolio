import React from 'react';
import { RESUME_DATA } from '../constants';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Skills & Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESUME_DATA.skills.map((category) => (
            <div key={category.category} className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">{category.category}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-slate-300 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;