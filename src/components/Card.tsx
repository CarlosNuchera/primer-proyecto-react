import { Fragment, ReactNode } from 'react';

interface CardProps {
  children: ReactNode; //El children es un string que se va a mostrar dentro de la tarjeta
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className='card' style={{ width: '350px' }}>
      <div className='card-body'>{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string; //El simbolo de ? indica que es opcional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <Fragment>
      <h5 className='card-title'>{title}</h5>
      <p className='card-text'>{text}</p>
    </Fragment>
  );
}

export default Card;
