import './NavBarStyle.css'
export default function NavBar({logo , navitems , btn}) {
  return (
    <nav>
        <h1>{logo}</h1>
        <div className="items">
            <ul>
                {navitems.map((element , index)=>{return(
                    <li key={index}><i className={element.icon}></i> {element.label}</li>
                )})}
            </ul>
            <button>{btn}</button>
        </div>
    </nav>
  )
}
