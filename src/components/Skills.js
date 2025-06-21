function Skills() {
  // Array of your current skills
  const currentSkills = ["HTML", "CSS", "JavaScript"];
  const learningSkills = ["React", "Node.js", "MongoDB"];

  return (
    <div className="bg-white my-5 mx-auto p-5 rounded-[10px] shadow-sm max-w-[600px]">
      <h2 className="text-[#333] border-b-2 border-[#61dafb] pb-[10px]">
        My Skills
      </h2>

      <div className="current-skills">
        <h3>What I Know:</h3>
        <ul>
          {currentSkills.map((skill) => (
            <li
              className="bg-[#e8f5e8] my-[5px] p-[10px] rounded-[5px] border-l-4 border-[#4caf50]"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="learning-skills">
        <h3>What I'm Learning:</h3>
        <ul>
          {learningSkills.map((skill) => (
            <li
              className="bg-[#fff3e0] my-[5px] p-[10px] rounded-[5px] border-l-4 border-[#ff9800]"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
