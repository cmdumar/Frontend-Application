import { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProduct from './actions/product';
import logo from './assets/logo.svg';
import './App.scss';

function App({fetchProduct, product, fetching, errors}) {

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  console.log(product);
  console.log(fetching);
  console.log(errors);

  return (
    <>
      <nav className="top-nav">
        <img src={logo} alt="Logo" />
      </nav>
      <main className="container">
        <nav className="side-nav"> 
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
          </ul>
        </nav>
        <section className="main-content">
          <div className="grid">
            <div className="product-details">
              <div className="product-img">
                <img src="#" alt="Product" />
              </div>
              <div className="main-info">
                product info
              </div>
              <div className="tab">
                tab
              </div>
            </div>
            <div className="user-info">
              <div className="user-data">
                user
              </div>
              <div className="map">
                map
              </div>
            </div>
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

export default connect(mapStateToProps, { fetchProduct })(App);
