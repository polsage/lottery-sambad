import "./ResultCard.css";

export default function ResultCard({

title,

time,

number

}){

return(

<div className="result-card">

<h3>{title}</h3>

<p>{time}</p>

<h2>{number}</h2>

</div>

)

}
