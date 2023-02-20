import { useState } from "react";
import { dataWishList } from "./dataWishList";
import './App.css';


function WishList(){
const [gift, setGift]= useState(0);
const {id, image, title} = dataWishList[gift];
const previousGift = ()=>{
    setGift((gift => {
        gift --;
        if(gift<0) {
            return dataWishList.length -1;
        }
        return gift;
    }))
}

const nextGift =() =>{
    setGift((gift => {gift ++;
        if(gift > dataWishList.length -1){
            gift = 0;
        }
    return gift;}))
}

    return(
        <div className="container-slide">
            <div className="container-btn">
                <button className="btn-back" onClick={previousGift}>back</button>
            </div>
            <div className="container-wish">
                <img className="giftImage" src={image} alt='gift' width='400px' height='600px'/>
                <h3>{title}</h3>
            </div>
            <div className="container-btn">
                <button className="btn-back" onClick={nextGift}>next</button>
            </div>
        </div>
    )
}

export default WishList;