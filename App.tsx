import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Group } from '@/screens/group';
import theme from '@/theme';
import { ActivityIndicator, ActivityIndicatorBase } from 'react-native';



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Group /> : <ActivityIndicator />}
      </ThemeProvider>
    </>
  );
}
