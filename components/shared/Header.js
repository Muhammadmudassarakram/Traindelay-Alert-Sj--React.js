import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/cv'>
            <a>Cv</a>
          </Link>
          <Link href='/hobbies'>
            <a>Hobbies</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </ul>
      </React.Fragment>
    );
  }
}

export default Header;
