import Journey from "./components/journey"
import Welcome from "./components/welcome"

export default function App() {
  return (
    <>
      <div className="bg-black h-full m-6 lg:px-16">
        <Welcome />
        <div className="mt-9" >
          
        </div>
        <Journey />
      </div>
    </>
  )
}
