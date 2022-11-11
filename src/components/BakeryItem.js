// TODO: create a component that displays a single bakery item

function BakeryItem(props){
    return(
 
        <div className="BakeryItem">
            <img src= {props.item.image} />
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <div>{props.item.price}</div>
            <div className="priceButton">
                
                <div><button class="button" onClick={() => {props.addToCart(props.item)}}>Add to Cart</button></div>
            </div>
        </div> 

    );
}
 export default BakeryItem;
