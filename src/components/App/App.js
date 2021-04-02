import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchProduct from '../../actions/product';
import logo from '../../assets/logo.svg';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import Routes from '../../components/Routes';
import { TopNav, Container, Content } from './App.styled'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <TopNav>
        <img src={logo} alt="Logo" />
      </TopNav>
      <Container>
        <Sidebar />
          <Content>
            <Routes />
          </Content>
      </Container>
    </>
  );
}

export default App;
