import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark , light } from './styles/Themes';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import Roadmap from './components/sections/Roadmap';
import About from './components/sections/About';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Team />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
