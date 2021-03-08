import React from 'react';
import Helmet from 'react-helmet';
import SideBar from '../../components/SideBar';

import { Container } from './styles';

const Categories: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Travelers | Categorias</title>
      </Helmet>
      <SideBar />
    </Container>
  );
};

export default Categories;
