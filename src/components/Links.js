import React, { useState } from 'react';
import './Links.css';

function App() {
  const [activeTab, setActiveTab] = useState('Links');

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    fontFamily: 'inherit',
    color: '#fff',
    margin: '0',
    padding: '0',
    textAlign: 'center',
    backgroundColor: '#000',
  };

  const tabsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  };

  const tabButtonStyle = (isActive) => ({
    width: '200px',
    padding: '15px 30px',
    fontSize: '1.2rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: isActive ? '#000' : '#000',
    color: '#fff',
    borderRadius: '5px',
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: '1px solid #fff',
  });

  const contentStyle = {
    width: '90%',
    maxWidth: '500px',
  };

  const buttonListStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const buttonStyle = {
    margin: '10px 0',
    width: '200px', // Ensures all buttons have the same width
    padding: '15px 30px',
    fontSize: '1.2rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: '5px',
  };

  const headingStyle = {
    fontWeight: 'bold',
  };

  // Styles to hide header and footer on this page
  const headerStyle = {
    display: 'none', // Hide header
  };

  const footerStyle = {
    display: 'none', // Hide footer
  };

  return (
    <div style={containerStyle}>
      {/* Hidden Header */}
      <header style={headerStyle}>
        <h1>Header Content</h1>
      </header>

      <nav style={tabsStyle}>
        <button
          style={tabButtonStyle(activeTab === 'Links')}
          onClick={() => setActiveTab('Links')}
        >
        Links
        </button>
        <button
          style={tabButtonStyle(activeTab === 'shop')}
          onClick={() => setActiveTab('shop')}
        >
          Shop
        </button>
      </nav>

      <main style={contentStyle}>
        {activeTab === 'Links' && (
          <div>
            <h2 style={headingStyle}>Links</h2>
            <ul style={buttonListStyle}>
              <li>
                <button
                  style={buttonStyle}
                  onClick={() => window.open("https://www.instagram.com/thosynpax", "_blank")}
                >
                  Instagram
                </button>
              </li>
              <li>
                <button
                  style={buttonStyle}
                  onClick={() => window.open("https://www.linkedin.com/in/thosynpax", "_blank")}
                >
                  LinkedIn
                </button>
              </li>
              <li>
                <button
                  style={buttonStyle}
                  onClick={() => window.open("https://medium.com/@thosynpax", "_blank")}
                >
                  Medium
                </button>
              </li>
              <li>
                <button
                  style={buttonStyle}
                  onClick={() => window.open("https://twitter.com/thosynpax", "_blank")}
                >
                  Twitter
                </button>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'shop' && (
          <div>
            <h2 style={headingStyle}>Shop</h2>
            <p>Coming Soon</p>
            {/* 
                <div style={productListStyle}>
                    <div style={productStyle}>
                        <h3>Product 1</h3>
                        <img src="/path-to-product1-image.jpg" alt="Product 1" style={imageStyle} />
                        <p>Description of Product 1.</p>
                        <button>Buy Now</button>
                    </div>
                    <div style={productStyle}>
                        <h3>Product 2</h3>
                        <img src="/path-to-product2-image.jpg" alt="Product 2" style={imageStyle} />
                        <p>Description of Product 2.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            */}
          </div>
        )}
      </main>

      {/* Hidden Footer */}
      <footer style={footerStyle}>
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export default App;
