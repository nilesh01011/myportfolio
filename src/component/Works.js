import React, { useState } from 'react';
import styled from 'styled-components';
import './projects_done/works.css';
import WorksContain from './projects_done/WorksContain';

function Works() {
  const [works, setWorks] = useState(WorksContain);

  const filterWorks = (getItems) => {
    if (getItems === 'All') {
      setWorks(WorksContain);
      return;
    }

    const ShowItems = WorksContain.filter((getIt) => {
      return getIt.category === getItems;
    });

    setWorks(ShowItems);

    let Btn = document.querySelectorAll('#myBtnContainer li');

    Btn.forEach((li) => {
      li.addEventListener('click', () => {
        ActiveClass();
        li.classList.add('active');
      });
    });

    function ActiveClass() {
      Btn.forEach((li) => {
        li.classList.remove('active');
      });
    }
  };

  return (
    <WorksContainer id='projects'>
      <h1>Latest Works</h1>

      <nav>
        <ul id='myBtnContainer' className='list-unstyled d-flex my-5 flex-wrap'>
          <li className='active' onClick={() => filterWorks('All')}>
            All
          </li>
          <li onClick={() => filterWorks('Clone')}>UI Clone</li>
          <li onClick={() => filterWorks('Templates')}>Templates</li>
          <li onClick={() => filterWorks('Landing Page')}>Landing Pages</li>
          <li onClick={() => filterWorks('E-commerce')}>E-commerce</li>
          <li onClick={() => filterWorks('Chat-App')}>Chat-App</li>
        </ul>
      </nav>

      <div id='Work_container' className=' container-fluid px-0'>
        <div className='row px-0'>
          {works.map((elem) => {
            const { id, name, image, category, links } = elem;
            return (
              <div
                key={id}
                className='column templates col-lg-3 pb-3 col-md-4 col-sm-6 col-12'
              >
                <div className='image'>
                  <img
                    src={image}
                    alt={category}
                    loading='lazy'
                    decoding='async'
                  />
                  <div className='liveView'>
                    <a href={links} target='_blank' rel='noreferrer'>
                      View Project
                    </a>
                  </div>
                </div>
                <div className='content text-light d-flex justify-content-between mt-3 px-2'>
                  <p>{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WorksContainer>
  );
}

export default Works;

const WorksContainer = styled.div`
  margin-top: 1rem;
  & h1 {
    color: #fff;
    width: fit-content;
    position: relative;
    padding-left: 15px;

    @media screen and (max-width: 576px) {
      & {
        margin-bottom: 2.5rem;
      }
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      width: 105%;
      border-radius: 3px;
      background: linear-gradient(
        324deg,
        rgba(240, 178, 175, 1) 20%,
        rgba(251, 131, 158, 1) 80%
      );
      z-index: -1;
    }
  }

  & #Work_container {
    & .column {
      & .image {
        position: relative;
        box-shadow: 0 0 2px #000;

        & .liveView {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.4);
          visibility: hidden;
          transition: 0.1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
          user-select: none;

          & a {
            padding: 0.4rem 0.8rem;
            border-radius: 5px;
            background: linear-gradient(
              324deg,
              rgba(240, 178, 175, 1) 20%,
              rgba(251, 131, 158, 1) 80%
            );
            color: #fff;
            font-weight: 400;
            font-size: 14px;
            text-decoration: none;
            transform: scale(0);
            transition: 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            box-shadow: 0 0 2px #000;
          }
        }

        &:hover {
          & .liveView {
            visibility: visible;

            & a {
              transform: scale(1);
            }
          }
        }
      }
    }
  }
`;
