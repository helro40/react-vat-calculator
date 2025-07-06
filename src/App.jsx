import { useState } from 'react' 
import './App.css' 

function App() { 

  const VAT_RATE = 0.07; // 7% VAT rate
  const [vat, setVat] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vatafter, setVatafter] = useState(0);

  function handleChange(event) {
    let value = event.target.value; // Get the value from the input field
    setPrice(value);
    setVat(value * VAT_RATE);
  }
  function handleDiscountChange(event) {
    let value = event.target.value; // Get the value from the input field
    setDiscount(value);
    setVatafter((price - value) * VAT_RATE); // Calculate VAT based on the discounted price
  }

  return ( 
    <>
       <h2>Calculator</h2>
       <div>
        Price:
        <input 
        type="number"  
        placeholder="Enter price" 
        onChange={handleChange} />
        <div>
          Discount:
          <input
          type="number"
          placeholder="Enter discount"
          onChange={handleDiscountChange}
          />
        </div>
        <div>
          Gross Price: {price-discount}<br/>
          VAT: {vatafter.toFixed(2)}<br/>
          
        </div>
        
      </div> 
    </>
  ) 

} 

export default App 

 
