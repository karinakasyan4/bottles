import { useState } from "react";
import { data } from "./data";
import Bottles from "./Bottles";
import Buttons from "./Buttons";

function Home(){
    const [bottles, setBottles] = useState(data);


    const chosenBottles = (searchTearm) => {
        const newBottles = data.filter(element => element.searchTerm === searchTearm);
        setBottles(newBottles);
    }


    return(
        <div>
            <div className="cont">
                <h1>Уже есть в коллекции</h1>
            </div>
            <Buttons filteredBottles = {chosenBottles}/>
            <Bottles anyBottles = {bottles}/>
        </div>
    )
}

export default Home;