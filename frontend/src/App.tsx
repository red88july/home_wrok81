import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import AppToolbar from './components/AppToolbar/AppToolbar';
import InputForm from './components/InputForm/InputForm';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import theme from './theme.ts';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Container maxWidth="lg">
              <QueryClientProvider client={queryClient}>
                <InputForm/>
              </QueryClientProvider>
            </Container>
          </CssBaseline>
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;