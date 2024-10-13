import { ThemeProvider } from 'styled-components';

import { Group } from '@/screens/group';
import theme from '@/theme';



export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Group />
      </ThemeProvider>
    </>
  );
}
