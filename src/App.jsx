import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppShell } from '@mantine/core';
import { Outlet } from "react-router-dom";
import ErrorPage from "./Routes/ErrorPage";
import LandingPage from "./Routes/LandingPage";
import Footer from "./Components/Footer"
import { rem } from "@mantine/core";

function RootLayout() {

  return (
    <AppShell
      footer={{ height: rem(50)}}
    >
      <AppShell.Main justify="center" align="center" w="full" h="full">
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
