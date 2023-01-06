import React from 'react'
import styled from 'styled-components'

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Orderconfirmation() {
  const [color, setColor] = React.useState('#000000');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
    <OrderConfirmation>
     <h1 style={{ textShadow: `3px 3px 0 ${color}` }}>Thank you for buying from youssef store</h1>
    </OrderConfirmation>
    
    </div>
  )
}

export default Orderconfirmation

const OrderConfirmation=styled.div`
  padding:20% 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:red;
  font-size: 1.7em;
  font-weight: bold;
  
`;