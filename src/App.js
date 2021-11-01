import React from 'react';
import { Container } from './components/styles/Container.styled'
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import content from './bd/content';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
