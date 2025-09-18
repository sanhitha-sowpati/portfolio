import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import './App.css'
import Education from "./components/Education"
import Contact from "./components/contact"

function App() {

  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <div className="flex flex-col gap-10 sm:gap-16 px-4 sm:px-6">
          <Hero />
          <About />
          <Education/>
          <Contact/>
        </div>
      </main>
    </>
  )
}

export default App
