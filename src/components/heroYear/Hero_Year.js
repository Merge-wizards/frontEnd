import React from 'react';

export default function HeroImage() {
  return (
    <div style={{padding:'20px',backgroundColor:'rgb(24, 24, 24)'} }>
    <header>
      <div
        className='p-5 text-center bg-image' 
        style={{ backgroundImage: "url('https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg')", height: 600 ,backgroundPosition:'center'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Best Games Collaction</h1>
              <h4 className='mb-3'>From Merged Wizards Team To You</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
}