import Journey from "./components/journey"
import Welcome from "./components/welcome"
import Skils from "./components/skills"
import Archievments from "./components/archievements"

export default function App() {
  return (
    <>
      <div className="bg-black h-full m-6 lg:px-16">
        <Welcome />
        <div className="mt-9" >
          
        </div>
        <Journey />
        <div className="lg:mt-48 mt-0" >
          
        </div>
        <Skils />
        <div className="lg:mt-48 mt-0" >
          
        </div>
        <Archievments />
      </div>
    </>
  )
}
