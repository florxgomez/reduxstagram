import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
    </div>
)

export default Header;