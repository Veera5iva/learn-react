import { useEffect, useState } from 'react'
import './App.css'
import {InputBox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const[from, setFrom] = useState("usd");
  const[to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

    const swap = () => {

      setFrom(to);
      setTo(from);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
    }

    useEffect(() => {
      setConvertedAmount(amount * currencyInfo[to]);
    }, [amount, currencyInfo, to, from])
  
  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  return (
    <div className='h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://r4.wallpaperflare.com/wallpaper/163/392/912/map-wold-map-technology-world-wallpaper-d8c6edc810508cc8901c51ae183254ea.jpg)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount.toFixed(2)}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
            </div>

            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-customGray text-white px-3 py-1'
              onClick={swap}
              >Swap</button>
            </div>

            <div className='w-full mb-1'>
              <InputBox
              label="To"
              amount={convertedAmount.toFixed(2)}
              amountDisabled
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}

              selectedCurrency={to}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-customGray text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          
          </form>
        
        </div>

      </div>

    </div>
  )
}

export default App
