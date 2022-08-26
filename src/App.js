import React from 'react';
import Banner from './component/Banner';
import Header from './component/Header';
import styled from 'styled-components';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;
