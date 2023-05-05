// React module for the state/region component 
import "./state.css";


const State = (props) => {
    return (
        <div id="state">
            Region: <strong className="state">{props.state}</strong>
        </div>
    )
}

export default State;