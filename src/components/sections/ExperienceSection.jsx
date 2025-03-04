// import { Briefcase, Calendar, GraduationCap } from "lucide-react";
// import { motion } from "motion/react";
// import SectionHeading from "./SectionHeading";
// const experiences = [


//     {
//       id: 3,
//       title: "Frontend Developer",
//       company: "Digital Innovations",
//       location: "Dhaka, Bangladesh",
//       period: "Jun 2018 - Feb 2020",
//       description:
//         "Built responsive user interfaces using HTML, CSS, JavaScript, and React. Worked closely with designers to implement pixel-perfect designs and improve user experience.",
//       type: "work",
//     },
//     {
//       id: 4,
//       title: "Bachelor of Science in Eng",
//       company: "University of Dhaka",
//       location: "Dhaka, Bangladesh",
//       period: "2014 - 2018",
//       description:
//         "Graduated with honors. Focused on web development, algorithms, and data structures. Participated in programming competitions and hackathons.",
//       type: "education",
//     },
//   ]

//   const ExperienceSection = () => {
//     return (
//       <section id="experience" className=" py-24 ">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeading title="Experience & Education" subtitle="My professional journey and academic background" />

//           <div className="relative mx-auto max-w-4xl">
//             {/* Timeline line */}
//             <div className="absolute left-0 top-0 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700 md:left-1/2 md:-ml-0.5"></div>

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className={`relative md:flex ${index % 2 === 0 ? "md:justify-end" : ""}`}
//                 >
//                   {/* Timeline dot */}
//                   <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 dark:border-zinc-900 md:left-1/2 md:-ml-2"></div>

//                   {/* Content */}
//                   <div
//                     className={`relative ml-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 md:ml-0 md:w-5/12 ${
//                       index % 2 === 0 ? "md:mr-8" : "md:ml-8"
//                     }`}
//                   >
//                     <div className="mb-2 flex items-center">
//                       <div className="mr-2 rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
//                         {exp.type === "work" ? (
//                           <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
//                         ) : (
//                           <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
//                         )}
//                       </div>
//                       <h3 className="text-lg font-bold text-zinc-800 dark:text-white">{exp.title}</h3>
//                     </div>

//                     <div className="mb-4">
//                       <div className="text-zinc-800 dark:text-zinc-200">{exp.company}</div>
//                       <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
//                         <span>{exp.location}</span>
//                         <span className="mx-2">•</span>
//                         <span className="flex items-center">
//                           <Calendar className="mr-1 h-3 w-3" />
//                           {exp.period}
//                         </span>
//                       </div>
//                     </div>

//                     <p className="text-zinc-600 dark:text-zinc-300">{exp.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }



//   export default ExperienceSection
const ExperienceSection = () => {
  return (
    <section id="experience" className=" py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-300">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700 md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-12">
            {/* Work Experience */}
            <div className="relative md:flex md:justify-end">
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 dark:border-zinc-900 md:left-1/2 md:-ml-2"></div>

              {/* Content */}
              <div className="relative ml-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 md:ml-0 md:w-5/12 md:mr-8">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-blue-600 dark:text-blue-400"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white">SOS Children Village</h3>
                </div>

                <div className="mb-4">
                  <div className="text-zinc-800 dark:text-zinc-200">Sylhet, Bangladesh</div>
                  <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-3 w-3"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <path d="M16 2v2"></path>
                        <path d="M8 2v2"></path>
                        <path d="M3 10h18"></path>
                      </svg>
                      May 25, 2022 - Present
                    </span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300">
                  Working at SOS Children Village in Sylhet, contributing to the welfare and development of children in
                  need.
                </p>
              </div>
            </div>

            {/* Project Experience */}
            <div className="relative md:flex">
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 dark:border-zinc-900 md:left-1/2 md:-ml-2"></div>

              {/* Content */}
              <div className="relative ml-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 md:ml-8 md:w-5/12">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-blue-600 dark:text-blue-400"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white">Learning Full-Stack Development & Softwere Engineer</h3>
                </div>

                <div className="mb-4">
                  <div className="text-zinc-800 dark:text-zinc-200">Online Platfrom</div>
                  <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-3 w-3"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <path d="M16 2v2"></path>
                        <path d="M8 2v2"></path>
                        <path d="M3 10h18"></path>
                      </svg>
                      2022 - Present (2+ years)
                    </span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300">
                  Building large-scale web applications and projects for various clients. Focused on creating robust,
                  scalable solutions using modern web technologies.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="relative md:flex md:justify-end">
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 dark:border-zinc-900 md:left-1/2 md:-ml-2"></div>

              {/* Content */}
              <div className="relative ml-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 md:ml-0 md:w-5/12 md:mr-8">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-blue-600 dark:text-blue-400"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white">Bachelor's in English Literature</h3>
                </div>

                <div className="mb-4">
                  <div className="text-zinc-800 dark:text-zinc-200">National University, Bangladesh</div>
                  <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-3 w-3"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <path d="M16 2v2"></path>
                        <path d="M8 2v2"></path>
                        <path d="M3 10h18"></path>
                      </svg>
                      2018 - 2024
                    </span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300">
                  Studied English Literature while simultaneously developing skills in web development and programming
                  through self-learning and online courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

