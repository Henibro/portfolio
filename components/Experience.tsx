import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Career Path</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Professional Experience
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200 hidden md:block"></div>

          <div className="space-y-12">
            {RESUME_DATA.experience.map((job, index) => (
              <div key={job.id} className="relative">
                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="md:w-5/12 mb-8 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
                        {job.date}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                      <p className="text-md text-slate-600 mb-4">{job.company}</p>
                      <ul className="space-y-2">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-1.5 w-1.5 mt-2 mr-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                            <span className="text-slate-500 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 ring-4 ring-white hidden md:flex">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Spacer for layout balance */}
                  <div className="md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;