import { useState } from 'react';
import { useSelector } from 'react-redux';
import Attributes from './Attributes';

function Details() {
  const [tab, setTab] = useState('desc');
  const product = useSelector(state => state.product);

  const handleTab = e => {
    setTab(e.target.value);
  }

  return (
    <div className="product-details">
      <div className="product-img">
        <img src={product.picture} alt="Product" />
      </div>
      <div className="main-info">
        <p>{product.name} | <span>{product.type && product.type.name}</span> </p>
      </div>
      <div className="tab">
        <button className={tab === 'desc' ? 'active' : ''} onClick={handleTab} value="desc" type="button">Description</button>
        <button className={tab === 'attr' ? 'active' : ''} onClick={handleTab} value="attr" type="button">Attributes</button>
      </div>
      <div className="tab-content">
        {tab === 'desc' && <p>{product.description}</p>}
        {tab === 'attr' && <Attributes attr={product} />}
      </div>
    </div>
  );
}

export default Details;
