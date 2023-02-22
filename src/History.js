import { useState } from "react";
import { dataHistory } from "./dataHistory";
import './App.css';


function History(){
    const[drink, setDrink] = useState(dataHistory);
    

    const [showText, setShowText] = useState(false);
    const showTextClick = (element) =>{
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return(
        <div>
            <div className="container">
                <h1>О напитках</h1>
            </div>
            {drink.map((element =>{
                const {id, title, image, description, showMore} = element;
                return(<div className="history-card" key={id}>
                    <div>
                        <img className="history-image" src={image} width='300px' height='200px' alt="glass"/>
                    </div>
                    <div className="history-info">
                        <h2 className="title">{title}</h2>
                        <p>{showMore ? description : description.substring(0,320)+ '...'} <button className="btn" onClick={()=>showTextClick(element)}>{showMore ?'Показать меньше': 'Показать больше'}</button> </p>
                    </div>
                </div>)
            }))}
        </div>
    )
}

export default History;