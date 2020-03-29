import React from 'react';
import About from './about';

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
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/cv'>Cv</a>
          <a href='/hobbies'>Hobbies</a>
          <a href='/blog'>Blog</a>
        </ul>
      </React.Fragment>
    );
  }
}
export default Index;
