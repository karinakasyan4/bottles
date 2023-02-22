function Bottles({anyBottles}){
    return(
        <div className="products">
            {anyBottles.map((element => {
                const {id, bottleName, bottleImage, bottleCountry, bottleInfo} = element;
                return(
                    <div className="product-card" key={id}>
                        <img className="bottleCard" src={bottleImage} width='300px' height='400px' alt='bottle'/>
                        <div className="infoCard">
                            <h2 className="bottleName">{bottleName}</h2>
                            <h3>{bottleCountry}</h3>
                            <h4>{bottleInfo}</h4>
                        </div>
                    </div>
                )
            }))}

        </div>
    )
}

export default Bottles;