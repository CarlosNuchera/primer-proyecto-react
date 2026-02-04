import Card, { CardBody } from './components/card';
import List from './components/List';

function App() {
  const list = ['Goku', 'Tanjiro', 'Eren'];
  const handleSelect = (elemento: string) => {
    console.log('Elemento seleccionado:', elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log('Mostrando elemento copia:', elemento);
  };
  return (
    <Card>
      <CardBody title='Hola Mundo' text='Este es el texto' />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
