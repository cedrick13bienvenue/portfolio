import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              {/* Increase font size for year */}
              <p className="mb-2 text-sm text-stone-400 lg:text-base">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              {/* Increase font size for role and company */}
              <h3 className="mb-2 font-semibold text-lg lg:text-xl">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              <ul className="list-disc pl-5 mb-4 text-stone-400">
                {experience.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-2 rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
