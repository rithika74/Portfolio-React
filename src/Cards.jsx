import React from 'react'
import img1 from './p1.png';
import img2 from './p2.png';
import img3 from './p3.png';
import img4 from './p4.png'
import Work from './Work';

function Cards() {
  const cardsData = [
    {

      imgSrc: img1,
      title: "Double Cheese",
      buttonText: "Github",
      link: 'https://github.com/rithika74/Responsive'
    },
    {

      imgSrc: img2,
      title: "Planty'x",
      buttonText: "Github",
      link: '#'
    },
    {

      imgSrc: img3,
      title: "Landing Page",
      buttonText: "Github",
      link: 'https://github.com/rithika74/Landing-Page.git'
    },
    {
      imgSrc: img4,
      title: "ToDo List",
      buttonText: "Github",
      link: "https://github.com/rithika74/To-Do.git"
    }
  ];
  return (
    <>
      <section >
        <div style={{ marginTop: '100px', fontSize: '36px', fontWeight: 'bolder', textAlign: 'center' }}>Projects</div>
        <div className='work'>
          {cardsData.map(card => (
            <Work
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Cards