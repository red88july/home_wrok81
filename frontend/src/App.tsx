import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import AppToolbar from './components/AppToolbar/AppToolbar.tsx';
import InputForm from './components/InputForm/InputForm.tsx';
import theme from './theme.ts';

function App() {

  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container maxWidth="lg">
            <InputForm/>
          </Container>
        </CssBaseline>
        </ThemeProvider>
      </main>
    </>
  )
}

export default App
