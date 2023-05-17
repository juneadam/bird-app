// module to handle the bird call from the JSON file
import "./bird-call.css";


const BirdCall = (props) => {
    let call = props.call

    return (
        <div id="bird-call">
            <audio controls>
            <source src={call} />
            
            </audio>
        </div>
    )
}

export default BirdCall;