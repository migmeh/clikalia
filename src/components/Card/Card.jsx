import React from 'react';
import './Card.scss';

export default class Card extends React.Component {
    parseName = (name) => (
        name.charAt(0).toUpperCase() + name.slice(1)
    );

    parseNumberID = (n) => {
        if (n < 1000 && n >= 100) {
            return n
        } else if (n <= 99 && n > 9) {
            return "0" + n;
        } else {
            return "00" + n;
        }
    }

    parseTypes = (types) => {
        if (types.length === 1) {
            return <span className={"card-type "+ types[0].type.name.toLowerCase() }>
                {types[0].type.name.toUpperCase()}
            </span>
        } else {
            return (types.map((poketype, index) => {
                return <span key={"card-type "+ poketype.type.name.toLowerCase()} className={"card-type "+ poketype.type.name.toLowerCase()}>
                    {poketype.type.name.toUpperCase()}
                </span>
            }
        ))
        }
    }

    render () {
        return (
            <div className="card" key={this.props.name} onClick={() => this.props.showModal(this.props.name)}>
                {this.props.sprites && this.props.types &&
                <div>
                    <div className="card-text"><span>{this.parseName(this.props.name)}</span></div>
                    <div className="number-text "><span>{this.parseNumberID(parseInt(this.props.id, 10))}</span></div>

                    <img className="card-img-top" alt="pkmn-sprite" src={this.props.sprites.front_default}/>

                    <div className="footer-text">

                        <div className="card-type">{this.parseTypes(this.props.types)}</div>
                    </div>
                </div>}
            </div>
        );
    }
}
