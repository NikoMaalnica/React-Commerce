import './styles/App.scss';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='content'>
        <ItemListContainer greeting="BIENVENIDO A PC-SHOP"/>
        <AppContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;