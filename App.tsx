import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from '@theme/index'
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

