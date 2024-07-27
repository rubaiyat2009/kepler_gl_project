import React from 'react';

const CustomSidePanel = ({ onCustomAction }) => {
  const sendDataToParent = () => {
    const data = { message: 'Hello from CustomSidePanel' };
    onCustomAction(data);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data</button>
    </div>
  );
};

export default CustomSidePanel;