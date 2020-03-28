import React from 'react';
import '../assets/styles/components/CardConteiner.scss';

const CardConteiner = ({children}) => (
  <section className='card-conteiner'>
    {children}
  </section>
)

export default CardConteiner;
