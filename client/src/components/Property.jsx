import data from '../Api/data.json'
import Card from './Card'

const Property = () => {
    return (
        <div className="property">
                <div className="property-container">
                    <div className="property-div-one">
                        <div className="property-div-one-inner">
                            <h2 className="property-title">Best Homes in the city</h2>
                            <p className="property-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo a atque maxime asperiores. Mollitia magnam eveniet officiis cupiditate expedita rerum dicta perferendis! Ullam architecto numquam voluptas iure tempora saepe.</p>
                        </div> 
                        <a className="add-btn" href="addProperty.html">Add New property</a>
                    </div>
                    
                    <div className="property-lists"> 
                        {
                            data.map((elem) => (
                                <Card key={elem.id} elem = {elem}/> 
                            ))
                        }
                    </div>
                </div>
             </div>
    )
}

export default Property;