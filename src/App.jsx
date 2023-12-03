import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { 
  AppShell, 
  rem 
} from '@mantine/core';
import { Outlet } from "react-router-dom";
import { 
  Footer, 
  Header 
} from "./Components"
import { 
  ErrorPage, 
  LandingPage, 
  PortfolioPage,
  AboutPage,
} from "./Routes";

function RootLayout() {

  return (
    <AppShell
      header={{ height: rem(100)}}
      footer={{ height: rem(75)}}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
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
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
