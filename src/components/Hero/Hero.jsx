import './HeroStyle.css'
export default function Hero({img , title , desc , btn }) {
  return (
    <div className="hero">
        <img src={img} alt="" />
        <div className="info">
            <h1>{title}</h1>
            <p>{desc}</p>
            <button>{btn}</button>
        </div>
    </div>
  )
}
