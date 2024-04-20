import React, { useState } from 'react';
import rosie from './rosie.svg'
import daisy from './daisy.svg'


function App() {
  const [image, setImage] = useState(null);

  const handleButtonClick = (imageName) => {
    // Depending on the button clicked, set the appropriate image
    if (imageName === 'Rosie') {
      setImage(rosie);
    } else if (imageName === 'Daisy') {
      setImage(daisy);
    }
  };

  return (
    <div>
      <text>Hello Christine, check out your cats!</text>
      <div>
      <button onClick={() => handleButtonClick('Rosie')}>Rosie</button>
      <button onClick={() => handleButtonClick('Daisy')}>Daisy</button>
      </div>
      {/* Render the image if it's set */}
      <div>{image && <img src={image} alt="Dog" style={{ marginTop: '10px' }}/>}</div>
    </div>
    
  );
}

export default App;
