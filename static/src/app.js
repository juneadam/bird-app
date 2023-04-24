// React components for the state bird pokedex app

// ------------ Utility Components ------------

// const Card = (props) => {

//     return (
//         <div className="card">

//         </div>
//     )
// }

// const Row = (props) => {

//     return (
//         <div className="row">
            
//         </div>
//     )
// }

// ------------ Photo, Noise, and Name components ------------

const BirdPhoto = (props) => {
    let imgSrc = props.ImgSrc;
    console.log(imgSrc)
    return (
        <div id="bird-pic">
            <img src={imgSrc}/>
        </div>
    )
}

const BirdNoise = (props) => {
    let call = props.call

    return (
        <div id="bird-noise">
            <audio controls autoPlay muted>
            <source src={call} type="audio/ogg" />
            {/* <source src="horse.mp3" type="audio/mpeg" /> */}
            Your browser does not support the audio element.
            </audio>
        </div>
    )
}

const BirdNames = (props) => {
    let name = props.birdName
    let latin = props.birdLatin

    return (
        <div id="bird-names-component">
            <div id="bird-name">
                <strong>{name}</strong>
            </div>
            <div id="latin">
                <i>{latin}</i>
            </div>
        </div>
    )
}

// ------------ Ability and Type components/wrappers ------------

const Type1 = (props) => {
    let BirdType1 = props.typesWrapperBirdType1

    return (
        <div className="icon" id={BirdType1}>
            <img src={"/static/icons/" + BirdType1 + ".svg"} />
        </div>
    )
}

const Type2 = (props) => {
    let BirdType2 = props.typesWrapperBirdType2

    return (
        <div className="icon" id={BirdType2}>
            <img src={"/static/icons/" + BirdType2 +".svg"} />
        </div>
    )
}

const TypesWrapper = (props) => {
    let typesWrapperBirdType1 = props.type1
    let typesWrapperBirdType2 = props.type2

    return (
        <div id="types">
            <Type1 typesWrapperBirdType1={typesWrapperBirdType1} />
            <Type2 typesWrapperBirdType2={typesWrapperBirdType2} />
        </div>
    )
}

const Ability = (props) => {

    return (
    <React.Fragment>
        <div id="ability-title">
            <strong>Pressure</strong>
        </div>
        <div id="ability-text">
            <i>Puts other Pokémon under pressure, causing them to expend more PP to use their moves. </i>
        </div>
    </React.Fragment>
    )
}

const AbilityWrapper = (props) => {

    return (
        <div id="ability-box">
            <Ability />
        </div>
    )
}

const TypeAbilityWrapper = (props) => {
    let wrapperBirdType1 = props.bird_type1
    let wrapperBirdType2 = props.bird_type2
    let wrapperAbility = props.ability

    return (
        <div id="type-ability-wrapper">
            <TypesWrapper type1={wrapperBirdType1} type2={wrapperBirdType2}/>
            <AbilityWrapper  />
        </div>
    )
}

// ------------ Description components ------------

const Description = (props) => {
    let description = props.description

    return (
        <div>
            <div id="description">
                {description} 
            </div>
        </div>
    )
}

const Height = (props) => {
    let height=props.height

    return (
        <div className="card">
            <div id="height">
                <div className="card-header">
                    Height
                </div>
                <ul>
                    <li>{height}</li>
                </ul>
            </div>
        </div>
    )
}

const Weight = (props) => {
    let weight = props.weight

    return (
        <div className="card">
            <div id="weight">
                <div className="card-header">
                    Weight
                </div>
                <ul>
                    <li>{weight}</li>
                </ul>
            </div>
        </div>
    )
}

const Wingspan = (props) => {
    let wingspan = props.wingspan

    return (              
        <div className="card">        
            <div id="wingspan">
                <div className="card-header">
                    Wingspan
                </div>
                <ul>
                    <li>{wingspan}</li>
                </ul>
            </div>
        </div> 
    )
}

const DeetsWrapper = (props) => {
    let deetsWrapperHeight = props.deetsWrapperHeight
    let deetsWrapperWeight = props.deetsWrapperWeight
    let deetsWrapperWingspan = props.deetsWrapperWingspan

    return (
        <div id="deets-wrapper">
            <Height height={deetsWrapperHeight} />
            <Weight weight={deetsWrapperWeight} />
            <Wingspan wingspan={deetsWrapperWingspan} />
        </div>
    )
}

// ------------ Map components ------------

const RegionMap = (props) => {

    return (
        <div id="region-map">
            <img src="/static/img/Kanto_Seafoam_Islands.webp" />
        </div>
        )
}

// ------------ App and Overflow components ------------

const OverflowWrapper = (props) => {
    let overflowWrapperBirdDeets = props.overflowWrapperBirdDeets;

    return (
    <div id="overflow-wrapper">
        <BirdPhoto ImgSrc={overflowWrapperBirdDeets["image"]} />
        <BirdNames birdName={overflowWrapperBirdDeets["name"]} birdLatin={overflowWrapperBirdDeets["latin"]} />
        <BirdNoise call={overflowWrapperBirdDeets["call"]} />
        <TypeAbilityWrapper bird_type1={overflowWrapperBirdDeets["bird_type1"]} bird_type2={overflowWrapperBirdDeets["bird_type2"]} ability={overflowWrapperBirdDeets["ability"]} />
        <Description description={overflowWrapperBirdDeets["description"]} />
        <DeetsWrapper deetsWrapperHeight={overflowWrapperBirdDeets["height"]} deetsWrapperWeight={overflowWrapperBirdDeets["weight"]} deetsWrapperWingspan={overflowWrapperBirdDeets["wingspan"]}/>
        <RegionMap />
    </div>
    )
}


const App = () => {

    const [birdDeets, setBirdDeets] = React.useState({})

    const fetchBirdDeets = () => {
        fetch('/bird-request.json')
        .then((response) => response.json())
        .then((newBirdDeets) => {
            setBirdDeets(newBirdDeets);
        })
    };

    React.useEffect(fetchBirdDeets, [])
    
    return (
        <div>
            <h2>Hello, Bird.</h2>
            <OverflowWrapper overflowWrapperBirdDeets={birdDeets} />
            <button type="button" id="new_bird">
                New Bird
            </button>
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);