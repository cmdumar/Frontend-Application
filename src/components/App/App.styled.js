import styled from 'styled-components';

const TopNav = styled.nav`
  display: flex;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: #272e71;
  img {
    width: 140px;
  }
`;

const Container = styled.main`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 150px 1fr;
  height: 100%;
  max-width: 1024px;
  margin-top: 30px;
  padding: 0 2rem;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export { TopNav, Container, Content };