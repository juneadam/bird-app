// React components for the state bird pokedex app

// ------------ Utility Components ------------

const Card = (props) => {

    return (
        <div className="card">

        </div>
    )
}

const Row = (props) => {

    return (
        <div className="row">
            
        </div>
    )
}

// ------------ Photo, Noise, and Name components ------------

const BirdPhoto = (props) => {
    let imgSrc = props.ImgSrc;
    return (
        <div id="bird-pic">
            <img src={imgSrc}/>
        </div>
    )
}

const BirdNoise = (props) => {

    return (
        <div id="bird-noise">
            <audio controls autoPlay muted>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
        </div>
    )
}

const BirdNames = (props) => {

    return (
        <div id="bird-names-component">
            <div id="bird-name">
                <strong>Articuno</strong>
            </div>
            <div id="latin">
                <i>Flappius snowflakeum</i>
            </div>
        </div>
    )
}

// ------------ Ability and Type components/wrappers ------------

const Type1 = (props) => {

    return (
        <div className="icon" id="ice">
            <img src="/static/icons/ice.svg" />
        </div>
    )
}

const Type2 = (props) => {

    return (
        <div className="icon" id="flying">
            <img src="/static/icons/flying.svg" />
        </div>
    )
}

const TypesWrapper = (props) => {

    return (
        <div id="types">
            <Type1 />
            <Type2 />
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

    return (
        <div id="type-ability-wrapper">
            <TypesWrapper />
            <AbilityWrapper />
        </div>
    )
}

// ------------ Description components ------------

const Description = (props) => {
    return (
        <div>
            <div id="description">
                It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it. 
            </div>
        </div>
    )
}

const Height = (props) => {

    return (
        // <Card>
            <div id="height">
                <div className="card-header">
                    Height
                </div>
                <ul>
                    <li>1.7 m</li>
                </ul>
            </div>
        // </Card>
    )
}

const Weight = (props) => {

    return (
        // <Card>
            <div id="weight">
                <div className="card-header">
                    Weight
                </div>
                <ul>
                    <li>55.4 kg</li>
                </ul>
            </div>
        // </Card>
    )
}

const Wingspan = (props) => {

    return (
        // <Card>                         
            <div id="wingspan">
                <div className="card-header">
                    Wingspan
                </div>
                <ul>
                    <li>5.3 m</li>
                </ul>
            </div>
        // </Card>
    )
}

const DeetsWrapper = (props) => {
    return (
        <div id="deets-wrapper">
            <Height />
            <Weight />
            <Wingspan />
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
    let wrapperImgSrc = props.wrapperImgSrc;

    return (
    <div id="overflow-wrapper">
        <BirdPhoto ImgSrc={wrapperImgSrc} />
        <BirdNames />
        <BirdNoise />
        <TypeAbilityWrapper />
        <Description />
        <DeetsWrapper />
        <RegionMap />
    </div>
    )
}


const App = () => {
    
    return (
        <div>
            <h2>Hello, Bird.</h2>
            <OverflowWrapper wrapperImgSrc="/static/img/Articuno.png" />
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);