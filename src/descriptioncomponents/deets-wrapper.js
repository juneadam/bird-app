// React module for wrapper component that contains cards for height, weight, and wingspan cards for bird JSON data

import './deets-wrapper.css';
import DeetsCard from "./deets-card";

const DeetsWrapper = (props) => {

    let deetsObj = props.deets;
    console.log(`this is the deets object ${props.deets}`);

    let cardArray = [];

    for (const [key, value] of Object.entries(deetsObj)) {
        console.log(`${key} : ${value}`)
        cardArray.push(<DeetsCard key={key} header={key} data={value} />)
        }

    return (
        <div id="deets-wrapper">
            {cardArray}
        </div>
    )
}

export default DeetsWrapper;