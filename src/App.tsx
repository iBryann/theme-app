// import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './styles/App';
// import { Dark, Light } from './styles/theme';
import { themeTest } from './styles/theme/themes/themeTest';

export const App = () => {
  // const [theme, setTheme] = useState(Dark);

  // function toggleTheme() {
  //   setTheme(p => p.title === 'light' ? Dark : Light);
  // }

  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(theme.title));
  // }, [theme.title]);

  return (
    <ThemeProvider theme={themeTest}>
      <Container>
        <header>
          {/* <h2>Header - {theme.title}</h2>

          <button onClick={toggleTheme}>{theme.title}</button> */}

          <h2>Header</h2>

          <button>Tema</button>
        </header>

        <main>
          <h2>Content</h2>
        </main>
      </Container>
    </ThemeProvider>
  );
};