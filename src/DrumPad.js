import React from 'react';

const DrumPad = props => {
  return (
    <div id={props.pad.id}>
        <span className="drum-pad" id={props.pad.sound} onClick={() => {props.drumClick(props.pad.letter)}}>
        {props.pad.letter}
        <audio className='clip' id={props.pad.letter} src={"./audio/" + props.pad.sound + ".wav"}></audio>
        </span>
    </div>
  );
}

export default DrumPad