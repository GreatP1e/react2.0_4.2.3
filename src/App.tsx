import { useEffect } from "react";
import { AppShell, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./modules/header";
import { Main } from "./modules/main";
import { useAppDispatch } from "./hooks/reduxHooks";
import { fetchVacancies } from "./reducer/thunk";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchVacancies());
  }, []);
  return (
    <MantineProvider theme={theme}>
      <AppShell bg="myBackgroundColor" w="100vw">
        <Header />
        <Main />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
