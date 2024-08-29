/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import location from "/src/img/location.svg";
import profileimg from "/img/IMG_6903.png";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <section className="h-screen w-[80%] flex mx-auto items-center font-serif">
        <div className="h-auto flex flex-row sm:flex-col-reverse space-x-10 sm:space-x-0 ">
          <div className="flex flex-col justify-center space-y-5 text-base w=full">
            <h1>Hi I'm Annie!</h1>
            <p>
              I'm currently a sophomore in the College of Engineering at Cornell University!
              I plan on majoring in either Computer Science or Operations Research. 
              On campus I'm involved in CUSail, Cornell Webdev, Cornell CSA, and WICC.
              I'm interested in software engineering and project management!            </p>
            <div className="flex flex-row items-center space-x-2">
              <img src={location} />
              <p>Ithaca, United States</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <p>Available for new projects!</p>
            </div>

          </div>
          <div className="flex justify-center ">
            <img
              src={profileimg}
              alt="Annie Chen Profile Picture"
              className="object-contain sm:p-10 w-[80%]"
            />
          </div> 
        </div>
      </section>
      <section className="bg-[#CBC3E3] font-serif min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium text-purple-900">Experience</div>
          <div className="text-base text-purple-900">
            Here are some of my most recent experiences:
          </div>
          <div className="flex flex-row flex-wrap box-border items-center space-y-5 w-full">
            <Experience className="w-full" />
          </div>
        </div>
      </section>
      <section className="font-serif min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium text-purple-900">Projects</div>
          <Project className="w-full" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
