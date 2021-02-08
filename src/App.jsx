import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting={'¡Hola!, este es el listado de productos'} />
    </>
  );
}

export default App;
