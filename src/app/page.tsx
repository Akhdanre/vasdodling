// Import the Link component from Next.js
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to My App</h1>
      <p>Click the button below to go to the canvas app.</p>
      {/* Link to the Canvas page */}
      <Link href="/canvas">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Go to Canvas App</button>
      </Link>
    </div>
  );
};

export default HomePage;
