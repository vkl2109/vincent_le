import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppShell } from '@mantine/core';
import { Outlet } from "react-router-dom";
import ErrorPage from "./Routes/ErrorPage";
import LandingPage from "./Routes/LandingPage";

function RootLayout() {

  return (
    <AppShell
    >
      <AppShell.Main justify="center" align="center" w="full" h="full">
        <Outlet />
      </AppShell.Main>
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
