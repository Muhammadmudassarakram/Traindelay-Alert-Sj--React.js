import React from 'react';
import Header from '../components/shared/Header';

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
        <Header />
      </React.Fragment>
    );
  }
}
export default Index;
