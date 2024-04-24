import React, { useState } from 'react';
import { Button, Modal, Progress } from 'antd';
import './App.css';
import logoImage from './make-my-trip-1-260x146-removebg-preview.png'; // Import your image here

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [abcId, setAbcId] = useState('');
  const [xyzId, setXyzId] = useState('');
  const [folderName, setFolderName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Simulating data saving process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setProgressPercent(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setOpenModal(true);
          setIsSubmitted(false);
          setProgressPercent(0);
        }, 500); // Delay for smooth transition
      }
    }, 500); // Progress update interval
  };

  const handleModalOk = () => {
    setOpenModal(false);
  };

  const handleModalCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <img src={logoImage} alt="Logo" style={{ position: 'absolute', left: '10px', top: '10px' }} /> {/* Add your image here */}
      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label style={{marginLeft:"-54px"}}>Start Date :</label>
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)}
            disabled={isSubmitted}
            required 
            style={{width:"100px"}}
            
          />
        </div>
        <div className="input-group">
          <label style={{marginLeft:"-54px"}}>End Date :</label>
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)}
            disabled={isSubmitted}
            required 
            style={{width:"100px"}}
          />
        </div>
        <div className="input-group">
          <label>ABC ID :</label>
          <input 
            type="number" 
            value={abcId} 
            onChange={(e) => setAbcId(e.target.value)}
            disabled={isSubmitted}
            required 
          />
        </div>
        <div className="input-group">
          <label>XYZ ID :</label>
          <input 
            type="number" 
            value={xyzId} 
            onChange={(e) => setXyzId(e.target.value)}
            disabled={isSubmitted}
            required 
          />
        </div>
        <div className="input-group">
          <label>Folder Name:</label>
          <input 
            type="text" 
            value={folderName} 
            onChange={(e) => setFolderName(e.target.value)}
            disabled={isSubmitted}
            required 
          />
        </div>
        <Button type="primary" htmlType="submit" disabled={isSubmitted}>
          Submit
        </Button>
      </form>
      <Modal
        title="Work in Progress"
        visible={isSubmitted}
        closable={false}
        footer={null}
      >
        <Progress percent={progressPercent} />
      </Modal>
      <Modal
        title="Data Saved Successfully"
        visible={openModal}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Data saved successfully!</p>
      </Modal>
    </div>
  );
}

export default App;
