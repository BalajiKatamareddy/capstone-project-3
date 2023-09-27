function Productcard({title, price, image, category})
{
    return(
        <div className="card">
            <img src={image}/>
            <p>{title}</p>
            <p>{price}</p>
            <p>{category}</p>
        </div>
    )
}
export default Productcard;