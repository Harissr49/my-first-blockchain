import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

// Components
import Home from './components/Home';
import Navigation from './components/Navigation';
import Search from './components/Search';

// ABIs
import Escrow from './abis/Escrow.json';
import RealEstate from './abis/RealEstate.json';

// Config

import hb11 from './assets/hb11.jpg';
import hb14 from './assets/hb14.jpg';
import hb16 from './assets/hb16.jpg';
import hb17 from './assets/hb17.jpg';
import hb18 from './assets/hb18.jpg';
import hb20 from './assets/hb20.jpg';
import hb24 from './assets/hb24.jpg';
import hb27 from './assets/hb27.jpg';
import hb28 from './assets/hb28.jpg';
import hb29 from './assets/hb29.jpg';

import hb25 from './assets/hb25.jpg';

import hb26 from './assets/hb26.jpg';
import hb30 from './assets/hb30.jpg';
import hb31 from './assets/hb31.jpg';
import hb32 from './assets/hb32.jpg';
import hb33 from './assets/hb33.jpg';







import config from './config.json';

function App() {
  const [provider, setProvider] = useState(null)
  const [escrow, setEscrow] = useState(null)

  const [account, setAccount] = useState(null)

  const [homes, setHomes] = useState([])
  const [home, setHome] = useState({})
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const realEstate = new ethers.Contract(config[network.chainId].realEstate.address, RealEstate, provider)
    const totalSupply = await realEstate.totalSupply()
    const homes = []

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i)
      const response = await fetch(uri)
      const metadata = await response.json()
      homes.push(metadata)
    }

    setHomes(homes)

    const escrow = new ethers.Contract(config[network.chainId].escrow.address, Escrow, provider)
    setEscrow(escrow)

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);
    })
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  const togglePop = (home) => {
    setHome(home)
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <Search/>

      <div className='cards__section'>

        <h3>Homes For You</h3>

        <hr />

        <div className='cards'>
          {homes.map((home, index) => (
            <div className='card' key={index} onClick={() => togglePop(home)}>
              <div className='card__image'>
                <img src={home.image} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>{home.attributes[0].value} ETH</h4>
                <p>
                  <strong>{home.attributes[2].value}</strong> bds |
                  <strong>{home.attributes[3].value}</strong> ba |
                  <strong>{home.attributes[4].value}</strong> sqft
                </p>
                <p>{home.address}</p>
              </div>
            </div>
            
          ))}
           <div className='card' id ="1">
              <div className='card__image'>
                <img src={hb24} alt="Home" />

              </div>
              <div className='card__info'>
                <h4>7 ETH</h4>
                <p>
                  <strong>5</strong> bds |
                  <strong>5</strong> ba |
                  <strong>7000</strong> sqft
                </p>
                <p>558000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb25} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>12 ETH</h4>
                <p>
                  <strong>7</strong> bds |
                  <strong>7</strong> ba |
                  <strong>8000</strong> sqft
                </p>
                <p>778000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb26} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>10 ETH</h4>
                <p>
                  <strong>5</strong> bds |
                  <strong>5</strong> ba |
                  <strong>7000</strong> sqft
                </p>
                <p>557000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb11} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>12 ETH</h4>
                <p>
                  <strong>17</strong> bds |
                  <strong>17</strong> ba |
                  <strong>10000</strong> sqft
                </p>
                <p>171710000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb17} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>15 ETH</h4>
                <p>
                  <strong>9</strong> bds |
                  <strong>9</strong> ba |
                  <strong>10000</strong> sqft
                </p>
                <p>9910000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb18} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>20 ETH</h4>
                <p>
                  <strong>18</strong> bds |
                  <strong>18</strong> ba |
                  <strong>12000</strong> sqft
                </p>
                <p>181812000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb20} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>7 ETH</h4>
                <p>
                  <strong>7</strong> bds |
                  <strong>4</strong> ba |
                  <strong>7000</strong> sqft
                </p>
                <p>747000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb27} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>30 ETH</h4>
                <p>
                  <strong>9</strong> bds |
                  <strong>9</strong> ba |
                  <strong>90000</strong> sqft
                </p>
                <p>999000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb16} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>10 ETH</h4>
                <p>
                  <strong>8</strong> bds |
                  <strong>7</strong> ba |
                  <strong>7000</strong> sqft
                </p>
                <p>877000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb28} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>80 ETH</h4>
                <p>
                  <strong>10</strong> bds |
                  <strong>10</strong> ba |
                  <strong>19000</strong> sqft
                </p>
                <p>101019000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb14}alt="Home" />
              </div>
              <div className='card__info'>
                <h4>20 ETH</h4>
                <p>
                  <strong>5</strong> bds |
                  <strong>5</strong> ba |
                  <strong>9000</strong> sqft
                </p>
                <p>559000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb29} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>79 ETH</h4>
                <p>
                  <strong>10</strong> bds |
                  <strong>10</strong> ba |
                  <strong>18,700</strong> sqft
                </p>
                <p>101018,700</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb30} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>60 ETH</h4>
                <p>
                  <strong>7</strong> bds |
                  <strong>7</strong> ba |
                  <strong>18,500</strong> sqft
                </p>
                <p>648</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb31} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>65 ETH</h4>
                <p>
                  <strong>15</strong> bds |
                  <strong>7</strong> ba |
                  <strong>20000</strong> sqft
                </p>
                <p>15720000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb32} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>20 ETH</h4>
                <p>
                  <strong>6</strong> bds |
                  <strong>2</strong> ba |
                  <strong>5000</strong> sqft
                </p>
                <p>125000</p>
              </div>
            </div>
            <div className='card'>
              <div className='card__image'>
                <img src={hb33} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>35 ETH</h4>
                <p>
                  <strong>10</strong> bds |
                  <strong>5</strong> ba |
                  <strong>10000</strong> sqft
                </p>
                <p>1210000</p>
              </div>
             
            </div>
        </div>
        <div>
                <Footer/>
              </div>


      </div>

      {toggle && (
        <Home home={home} provider={provider} account={account} escrow={escrow} togglePop={togglePop} />
      )}

    </div>
  );
}

export default App;
