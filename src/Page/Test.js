import React from 'react';

const Test = () => {
  return (
    <div>
      <div>Teachable Machine Image Model</div>
      <button type="button" onclick="init()">
        Start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </div>
  );
};

export default Test;
