import PersonalInfo from "../components/PersonalInfo";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function App() {
  const studentName = "NGUYEN QUOC KHANH";
  const currentDate = new Date().toDateString();
  const lessonNumber = 1;

  return (
    <div className="App text-center p-5 font-sans bg-[#f5f5f5] min-h-full">
      <h1 className="text-[#61dafb] mb-[30px] text-[2.5rem]">
        Welcome to My React Learning Journey
      </h1>
      <p>
        Hello, {studentName}! Today is {currentDate}
      </p>
      <p>This is lesson number {lessonNumber}</p>
      <p>Next lesson will be lesson {lessonNumber + 1}</p>
      <PersonalInfo />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
