import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import './index.css';

const pads = [
  {
    letter: "Q",
    sound: "Bass-Drum-1",
    id: "Sound1"
  },{
    letter: "W",
    sound: "Clap-1",
    id: "Sound2"
  },{
    letter: "E",
    sound: "Cowbell-1",
    id: "Sound3"
  },{
    letter: "A",
    sound: "Crash-Cymbal-1",
    id: "Sound4"
  },{
    letter: "S",
    sound: "Dry-Kick",
    id: "Sound5"
  },{
    letter: "D",
    sound: "E-Mu-Proteus-FX-Wacky-Crash-Cymbal",
    id: "Sound6"
  },{
    letter: "Z",
    sound: "E-Mu-Proteus-FX-Wacky-Kick",
    id: "Sound7"
  },{
    letter: "X",
    sound: "Boom-Kick",
    id: "Sound8"
  },{
    letter: "C",
    sound: "Hip-Hop-Snare-1",
    id: "Sound9"
  }
];

//const keys = ["q","w","e","a","s","d","z","x","c"]
const keyCodes = [ 81, 87, 69, 65, 83, 68, 90, 88, 67 ]

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.drumClick = this.drumClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.state = {
      display: "Drum Machine"
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  playSound(element) {
    element.currentTime = 0;
    element.play();
    element.parentElement.classList.add('playing');
    document.getElementById('display').classList.add('playing2');
    setTimeout(function() {
      element.parentElement.classList.remove('playing');
      document.getElementById('display').classList.remove('playing2');
    }, 100);
    this.setState({
    display: element.parentElement.id
    });

  }

  onKeyDown(e) {
    if(keyCodes.includes(e.keyCode)) {
      this.playSound(document.getElementById(e.key.toUpperCase()));
    }
  }

  drumClick(letter) {
    this.playSound(document.getElementById(letter));
  }

  render() {
    return (
      <div id="drum-machine">
        <Display display={this.state.display} />
        <div id="drum-pad-wrap">
          {pads.map((pad, index) =>
            <DrumPad pad={pad} drumClick={this.drumClick} key={index} />
          )}
        </div>
      </div>
    );
  }
}

export default DrumMachine