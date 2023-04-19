// module for displaying bird name data from JSON file

const BirdName = (props) => {
    let name = props.name

    return (
        <h1 className="bird-name">{name}</h1>
    )
}

export default BirdName