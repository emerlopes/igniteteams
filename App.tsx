import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Group } from '@/screens/group';
import theme from '@/theme';
import { Loading } from '@/components/loading';



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Group /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
