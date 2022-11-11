// TODO: create a component that displays a single bakery item

function BakeryItem(props){
    return(
 
        <div className="BakeryItem">
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <img src= {props.item.image} />
            <button onClick={() => {props.addToCart(props.item)}}>addToCart</button>
        </div> 

    );
}
 export default BakeryItem;
