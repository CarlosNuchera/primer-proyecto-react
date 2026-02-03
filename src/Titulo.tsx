function Titulo() {
  const usuario = 'Soy Carlos Nuchera Bolaños';
  if (usuario !== '') {
    return <h1>Hola {usuario}</h1>;
  }
  return <p>Hola {'Mundo'}</p>;
}

export default Titulo;
