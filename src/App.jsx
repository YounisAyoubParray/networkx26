import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutSchedule, { Venue } from "./components/AboutSchedule"
import Speakers, { Team } from "./components/Speakers"
import Hackathon from "./components/Hackathon"
import Sponsors from "./components/Sponsors"
import Faq from "./components/Faq"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <AboutSchedule/>
      <Hackathon/>
      <Speakers/>
      <Sponsors/>
      <Venue/>
      <Team/>
      <Faq/>
    </main>
    <Footer/>
    </>
  )
}

export default App;
