// module for displaying bird name data from JSON file

import './bird-name.css';

const BirdName = (props) => {
    let name = props.name

    return (
        <h1 className="bird-name">{name}</h1>
    )
}

export default BirdName