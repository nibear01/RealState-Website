/* eslint-disable react/prop-types */
const Card = (props) => {
    // console.log(props);
    const { title, price, location, image, description } = props.elem
    // console.log(price);
    return (
        <div className="card">
            <div className="card-banner">
                <figure className="img-holder">
                    <img src={image} 
                    alt={description} 
                    className="img-cover"/>
                </figure>
                </div>
                <div className="property-description">
                    <h4>{title}</h4>
                    <p>{price}</p>
                    <address>
                        {location}
                    </address>
                </div>
        </div>
    )
}

export default Card;