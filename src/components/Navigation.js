import { ethers } from 'ethers';
import logo from '../assets/fos.jpg';
const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <ul className='nav__links'>
                <li><a href="https://ubyer.netlify.app">Buy</a></li>
                <li><a href="https://isnpector.netlify.app">Rent</a></li>
                <li><a href="https://esller.netlify.app">Sell</a></li>
                <br>
                </br>
               <h1 class="ti">DIGGI DOCC</h1> 
                <br>
                </br>
            </ul>
            
            <div className='nav__brand'>
                <img src={logo} alt="logo"  />

            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;