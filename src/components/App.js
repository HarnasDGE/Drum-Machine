import '../App.css';
import React from 'react';
import Pad from './Pad.js';
import Info from './Info.js';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../containers/AppContainer.js';
import { DRUM, HEATER } from '../constans/constans.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.powerClick = this.powerClick.bind(this);
    this.bankClick = this.bankClick.bind(this);
    this.volumeChanger = this.volumeChanger.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.power !== this.props.power) {
      this.props.setNewInfo(`Power: ${this.props.power}`);
    }
    if (prevProps.bank !== this.props.bank) {
      this.props.setNewInfo(`Now: ${this.props.bank}`);
    }
  }

  volumeChanger(event) {
    this.props.setNewVolume(event.target.value);
    this.props.setNewInfo(`Volume: ${this.props.volume}`);
  }
  

  powerClick() {
    this.props.togglePowerStatus();
  }

  bankClick() {
    const newBank = this.props.bank === HEATER ? DRUM : HEATER;
    this.props.toggleBankStatus(newBank);
  }

render() {
  return (
    <div id="drum-machine">
      <div id="drum">
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" padSrcSecond="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" padId="Q"  />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" padSrcSecond="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" padId="W" />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" padSrcSecond="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" padId="E"  />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" padId="A" />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" padId="S" />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" padId="D" />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" padId="Z"/>
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" padId="X" />
        <Pad padSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" padId="C" />
      </div>
      <div id="display">
        <div id="volume-container">
          <label htmlFor="volume">Volume</label>
          <input type="range" min="0" max="100" name="volume" id="volume" value={this.props.volume} onChange={this.volumeChanger}/>
        </div>
        <div id="select-container">
          <div className="control">
            <p>Power</p>
            <div className="select" id="power" onClick={this.powerClick} style={this.props.power === "OFF" ? {justifyContent: "left", opacity: 0.6} : {justifyContent: "right", opacity: 1}}>
              <div className="selectInner"></div>
            </div>
          </div>
          <div className="control">
            <p>Bank</p>
            <div className="select" id="bank" onClick={this.bankClick} style={this.props.bank === HEATER ? {justifyContent: "right"} : {justifyContent: "left"}}>
              <div className="selectInner"></div>
            </div>
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

