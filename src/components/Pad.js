import React from 'react';
import { ON, DRUM, NAMES} from '../constans/constans.js';
import { mapStateToProps, mapDispatchToProps } from '../containers/AppContainer.js';
import { connect } from 'react-redux';


class Pad extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    playSound = () => {
        if(this.props.power === ON) {
            const audio = this.audioRef.current;
            audio.volume = this.props.volume/100; // Ustaw głośność tuż przed odtworzeniem
            audio.play();

            const actualPlay = NAMES.find((name) => this.props.padId === name[0]);
            if (this.props.bank && this.props.bank === DRUM) {
                this.props.setNewInfo(`Now play: ${actualPlay[2]}`);
            } else {
                this.props.setNewInfo(`Now play: ${actualPlay[1]}`);
            }
        }
    }

    handleKeyPress = (event) => {
        if (event.key.toUpperCase() === this.props.padId) {
            this.playSound();
        }
    }

    render() {
        let src;
        if (this.props.bank && this.props.bank === DRUM) {
            src = this.props.padSrcSecond;
        } else {
            src = this.props.padSrc;
        }

        return (
        <div className="drum-pad" onClick={this.playSound} >
          <audio ref={this.audioRef} src={src} className="clip" id={this.props.padId}/>{this.props.padId}
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pad);