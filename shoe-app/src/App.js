import './App.css';
import React, { useState } from 'react';

function ShoeApp() {
  const [shoeName, setShoeName] = useState('');
  const [shoeSizeNation, setShoeSizeNation] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const sizeOptions = {
    CM: ['220', '230', '240'],
    EU: ['36', '37', '38'],
    US: ['5', '6', '7'],
    UK: ['4', '5', '6']
  }
  const [shoeInfo, setShoeInfo] = useState(null);

  const handleShoeNameChange = (event) => {
    setShoeName(event.target.value);
  };

  const handleShoeSizeChange = (event) => {
    setShoeSize(event.target.value);
  };

  const handleShoeSizeNationChange = (event) => {
    setShoeSizeNation(event.target.value);
  }

  const handleSubmit = () => {
  };

  return (
    <div>
      <h1>Shoe Information</h1>
      <label>
        Shoe Name:
        <input type="text" value={shoeName} onChange={handleShoeNameChange} />
      </label>
      <br />
      <label>
        Shoe Size:
        <select value={shoeSizeNation} onChange={handleShoeSizeNationChange}>
          <option value="CM">CM</option>
          <option value="EU">EU</option>
          <option value="US">US</option>
          <option value="UK">UK</option>
        </select>
        <select value={shoeSize} onChange={handleShoeSizeChange}>
          <option value="">Select Size</option>
          {sizeOptions[shoeSizeNation] &&
            sizeOptions[shoeSizeNation].map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {shoeInfo && (
        <div>
          <h2>{shoeInfo.name}</h2>
          <img src={shoeInfo.image} alt="Shoe" />
          <p>Lowest Price: {shoeInfo.lowestPrice}</p>
          <p>Price Links:</p>
          <ul>
            {shoeInfo.priceLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShoeApp;
