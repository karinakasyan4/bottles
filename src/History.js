import { useState } from "react";
import { dataHistory } from "./dataHistory";
import './App.css';


function History(){
    const[drink, setDrink] = useState(dataHistory);

    const remoteHistory =(id) =>{
        let newHistory = drink.filter(drink => drink.id !== id);
        setDrink(newHistory)
    }
    

    const [showText, setShowText] = useState(false);
    const showTextClick = (element) =>{
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return(
        <div className="mainCont">
            <div className="container">
                <h1>О напитках</h1>
            </div>
            {drink.map((element =>{
                const {id, title, image, description, showMore} = element;
                return(<div className="history-card" key={id}>
                    <div>
                        <img className="history-image" src={image} alt="glass"/>
                    </div>
                    <div className="history-info">
                        <h2 className="title">{title}</h2>
                        <p>{showMore ? description : description.substring(0,320)+ '...'} <button className="btn" onClick={()=>showTextClick(element)}>{showMore ?'Показать меньше': 'Показать больше'}</button> </p>
                    </div>
                    <div className="btnClose">
                        <button onClick={()=> {remoteHistory(id)}} className='close'>❌</button>
                    </div>
                </div>)
            }))}
        </div>
    )
}

export default History;