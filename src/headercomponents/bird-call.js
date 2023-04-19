// module to handle the bird call from the JSON file

const BirdCall = (props) => {
    let call = props.call

    return (
        <div id="bird-call">
            <audio controls autoPlay muted>
            <source src={call} type="audio/ogg" />
            {/* <source src="horse.mp3" type="audio/mpeg" /> */}
            Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default BirdCall