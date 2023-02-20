function Buttons({filteredBottles}){
    return(
        <div className="cont">
            <button className="change" onClick={()=> filteredBottles('wine')}>Вино</button>
            <button className="change" onClick={()=> filteredBottles('champange')}>Шампанское</button>
            <button className="change" onClick={()=> filteredBottles('whiskey')}>Виски</button>
            <button className="change" onClick={()=> filteredBottles('vodka')}>Водка</button>
            <button className="change" onClick={()=> filteredBottles('cognac')}>Коньяк</button>
            <button className="change" onClick={()=> filteredBottles('metaxa')}>Метакса</button>
            <button className="change" onClick={()=> filteredBottles('absinth')}>Абсент</button>
            <button className="change" onClick={()=> filteredBottles('rum')}>Ром</button>
            <button className="change" onClick={()=> filteredBottles('schnaps')}>Шнапс</button>
            <button className="change" onClick={()=> filteredBottles('gin')}>Джин</button>
            <button className="change" onClick={()=> filteredBottles('tequila')}>Текила</button>
            <button className="change" onClick={()=> filteredBottles('liquor')}>Ликёр</button>
            <button className="change" onClick={()=> filteredBottles('mezcal')}>Мескаль</button>
            <button className="change" onClick={()=> filteredBottles('balm')}> Бальзам</button>
        </div>
    )
}

export default Buttons;