import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import fetchProduct from '../actions/product';
import logo from '../assets/logo.svg';
import './App.scss';
import Sidebar from '../components/Sidebar';
import Routes from '../components/Routes';

function App({ product, fetching, errors }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  console.log('Product', product);
  console.log('loading', fetching);
  console.log('Error', errors);

  return (
    <>
      <nav className="top-nav">
        <img src={logo} alt="Logo" />
      </nav>
      <main className="container">
        <Sidebar />
        <section className="main-content">
          <div className="grid">
            <Routes />
          </div>
        </section>
      </main>
    </>
  );
}

const mapStateToProps = ({product, fetching, errors}) => ({
  product,
  fetching,
  errors,
});

export default connect(mapStateToProps)(App);
