// React module for reusable card for height, weight, and wingspan data points from JSON data

import './deets-card.css';

const DeetsCard = (props) => {
    return(
        <div className="deets-card" id={"deets-card-" + props.header}>
            <div className="deets-header">
                <b>{props.header}</b>
            </div>
            <div className="deets-body">
                <i>{props.data}</i>
            </div>
        </div>
    )
}

export default DeetsCard;