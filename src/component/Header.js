import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  function SideBarOpen() {
    let SideBar = document.querySelector('#SideBar'),
      OverLay = document.querySelector('#OverLay'),
      menu_logo = document.querySelector('#menu'),
      body = document.querySelector('body'),
      CrossIcons = document.querySelector(
        '#SideBar .topsHeader .buttons .CrossIcons'
      );

    SideBar.style.left = '0';
    OverLay.style.clipPath = 'circle(150% at 0 100%)';
    menu_logo.classList.add('active');
    body.classList.add('overflow-hidden');
    CrossIcons.classList.add('active');

    if (CrossIcons.classList.contains('active')) {
      setTimeout(() => {
        CrossIcons.classList.add('activeMenu');
      }, 2200);
    }
  }
  // =====NavBar Color Changes=====
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);
  return (
    <HeaderContainer className={color ? 'header_bg' : 'transparent'}>
      <div className='logo'>
        <a href='/'>
          <span>N</span>
          <span>R</span>
        </a>
      </div>
      <div id='menu' className='menu_logo' onClick={SideBarOpen}>
        <span className='span1'></span>
        <span className='span2'></span>
        <span className='span3'></span>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  z-index: 10;
  transition: all 0.4s ease-in-out;
  // max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  & .logo {
    font-weight: 800;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid #f9839e;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    user-select: none;

    & a {
      text-decoration: none;

      & span:nth-child(2),
      & span:nth-child(1) {
        font-weight: 900;
        position: relative;
        color: #f9839e;
        font-size: 21px;
      }

      & span:nth-child(2) {
        right: 3px;
      }

      & span:nth-child(1) {
        left: 3px;
      }
    }
  }

  & .menu_logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid #f9839e;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    transform: translateY(0%);
    overflow: hidden;

    &.active {
      transition: all 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      transform: translateY(-200%);
    }

    & span:nth-child(1),
    & span:nth-child(2),
    & span:nth-child(3) {
      height: 3px;
      width: 60%;
      margin: 0 auto;
      border-radius: 5px;
      background: #f9839e;
      display: block;
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transition: all 0.5s ease-in-out;
    }

    & span:nth-child(2) {
      margin: 4px 0;
    }

    &.threeline span:nth-child(2) {
      transform: translateX(150%);
      transition: all 0.1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }

    &.threeline span:nth-child(1) {
      transition: all 0.1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      transform: translateY(230%) rotate(45deg);
      width: 24px;
    }

    &.threeline span:nth-child(3) {
      transition: all 0.1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      transform: translateY(-230%) rotate(-45deg);
      width: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    & {
      padding: 1.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      padding: 1rem 1.5rem;
    }
  }
`;
