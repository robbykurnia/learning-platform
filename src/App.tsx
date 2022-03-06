import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'src/pages/Home';
import ClassDetail from 'src/pages/ClassDetail';
import Header from 'src/components/Header';
import styled from 'styled-components';

const Container = styled.div`
margin-top: 60px;
color: #1A2027;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ClassDetail />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
