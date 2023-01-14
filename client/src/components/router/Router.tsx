import { lazy, Suspense } from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { isAuth } from "~/lib/firebase";
import Dashboard from "../../screens/dashboard/dashboard";
import PersonalInfo from "../form/PersonalInfo";

const Loading = () => (
  <p className="p-4 w-full h-full text-center">Loading...</p>
);

const IndexScreen = lazy(() => import("~/screens/Index"));
const Page404Screen = lazy(() => import("~/screens/404"));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const connected = isAuth();
  const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: "/home",
      // element: <DashboardHeader />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: "/form",
      // element: <DashboardHeader />,
      children: [
        {
          index: true,
          element: <PersonalInfo />,
        },
        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
