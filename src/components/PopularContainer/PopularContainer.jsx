import './containerStyle.css'
export default function PopularContainer({title , desc , firstImg , secImg , revese}) {
    return (
        <div className={`container ${revese}`}>
            <div className="txt">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <div className="images">
                <img src={firstImg} alt="" />
                <img src={secImg} alt="" />
            </div>
        </div>
    )
}
