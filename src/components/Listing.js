import { useState } from 'react';
import Home from './Home';

function Listing({ homes, provider, account, escrow }) {
  const [toggle, setToggle] = useState(false);
  const [home, setHome] = useState({});

  const togglePop = (home) => {
    setHome(home);
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="cards__section">
      <h3>Homes For You</h3>
      <hr />
      <div className="cards">
        {homes.map((home, index) => (
          <div className="card" key={index} onClick={() => togglePop(home)}>
            <div className="card__image">
              <img src={home.image} alt="Home" />
            </div>
            <div className="card__info">
              <h4>{home.attributes[0].value} ETH</h4>
              <p>
                <strong>{home.attributes[2].value}</strong> bds | <strong>{home.attributes[3].value}</strong> ba | <strong>{home.attributes[4].value}</strong> sqft
              </p>
              <p>{home.address}</p>
            </div>
          </div>
        ))}
      </div>
      {toggle && <Home home={home} provider={provider} account={account} escrow={escrow} togglePop={togglePop} />}
    </div>
  );
}

export default Listing;
