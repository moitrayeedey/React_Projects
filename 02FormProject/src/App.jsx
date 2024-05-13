import { useState } from "react"

function App() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [details, setDetails] = useState("");
  const [payment, setPayment] = useState("");
  const [mode, setMode] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }
  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  }
  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  }
  const handleModeChange = (e) => {
    setMode(e.target.value);
  }
  return (
    <div>
      <h2> Form Project </h2>

      <input value={name} onChange={handleNameChange}/>
      <p>Name : {name}</p>

      <input value={quantity} onChange={handleQuantityChange}/>
      <p>Quantity : {quantity}</p>

      <textarea value={details} placeholder="Enter delivery options" onChange={handleDetailsChange}/>
      <p>Delivery Instruction : {details}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="UPI">UPI</option>
      </select>
      <p>Payment Mode : {payment}</p>

      <label>
        <input type="radio" value="Pick Up" checked={mode === "Pick Up"} onChange={handleModeChange}/>
        Pick Up
      </label> <br/>
      <label>
        <input type="radio" value="Delivery" checked={mode === "Delivery"} onChange={handleModeChange}/>
        Delivery
      </label>
      <p>Mode : {mode}</p>
    </div>
  )
}

export default App
