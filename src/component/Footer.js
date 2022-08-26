import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer id='contact_us'>
      <h2>Stay Connected</h2>
      <div id='footer' className='contact_para'>
        <p>Maharashtra, Mumbai</p>
        <h5>nrrathodnr818@gmail.com</h5>
        <p>(+91) 9359872268</p>
      </div>
      <div id='social_links'>
        <a
          href='https://github.com/nilesh01011'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'></i>
        </a>
        {/* <a href='facebook'>
          <i className='fab fa-facebook'></i>
        </a>
        <a href='instagram'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='linked'>
          <i className='fab fa-linkedin'></i>
        </a> */}
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  background: #17191c;

  & h2 {
    margin-bottom: 1rem;
  }

  & h2,
  & h5 {
    font-weight: 500 !important;
  }

  & h5 {
    margin: 10px 0;
  }

  & p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  & .contact_para {
    text-align: center;
    margin: 15px 0;

    & p {
      margin-bottom: 0;
    }
  }
`;
