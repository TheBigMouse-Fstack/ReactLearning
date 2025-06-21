function PersonalInfo() {
  // Add your personal information here
  const name = "NGUYEN QUOC KHANH";
  const age = 20; // Your age or any age
  const location = "HCM";
  const occupation = "Student"; // or your current job

  return (
    <div className="bg-white my-5 mx-auto p-5 rounded-[10px] shadow-sm max-w-[600px]">
      <h2 className="text-[#333] border-b-2 border-[#61dafb] pb-[10px]">
        About Me
      </h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age} years old
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Current Role:</strong> {occupation}
      </p>
      <p>
        <strong>Learning:</strong> React.js Development
      </p>
    </div>
  );
}
export default PersonalInfo;
