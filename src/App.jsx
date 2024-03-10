
import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import HomeBg from './assets/12.257c5311e1cae5638aad.jpg'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'

function App() {
  const navItems = [{label:"Home" , icon:"fa-solid fa-house-user"} , {label:"About" , icon:"fa-solid fa-circle-info"} , {label:"Contact" , icon:"fa-solid fa-house-user"}, {label:"Service" , icon:"fa-solid fa-house-user"} ]
  return (
    <div className='app'>
      <NavBar logo="Trippy" navitems={navItems} btn = "sign up" />
      <Hero img={HomeBg} 
      title="Your Journey Your Story"
      desc="Choose Your Favourite Destination."
      btn="Travel Now"
       />
       <PopularDestinations />
    </div>
  )
}

export default App
