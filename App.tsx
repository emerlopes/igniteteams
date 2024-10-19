import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from '@/screens/groups';
import theme from '@/theme';
import { Loading } from '@/components/loading';
import { NewGroup } from '@/screens/newgroup';
import { Players } from '@/screens/players';



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

        {/* {fontsLoaded ? <NewGroup /> : <NewGroup />} */}
        {/* {fontsLoaded ? <Groups /> : <Loading />} */}
        {fontsLoaded ? <Players /> : <Players />}
      </ThemeProvider>
    </>
  );
}
