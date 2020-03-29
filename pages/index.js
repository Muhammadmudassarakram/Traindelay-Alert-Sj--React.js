import React from 'react';
import Link from 'next/link';

/*const Index = () => {
  return (
    <div>
      <p>Hello Next.js Dumb function</p>
    </div>
  );
};
export default Index;*/
/*
function Index() {
  return (
    <div>
      <p>Hello Next.js simple function</p>
    </div>
  );
}

export default Index;

*/

/*const Index = function() {
  return (
    <div>
      <p>Hello Next.js simple function with assignment</p>
    </div>
  );
};

export default Index;
*/

class Index extends React.Component {
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
export default Index;
