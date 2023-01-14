import { lazy, Suspense } from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import { isAuth } from "~/lib/firebase";
import Payment from "~/screens/payment/Payment";
import Rooms from "~/screens/rooms/Rooms";
import RoomsDetail from "~/screens/rooms/RoomsDetail";
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
      path: "/rooms",
      children: [
        {
          index: true,
          element: <Rooms />,
        },
        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: "/roomsdetail",
      children: [
        {
          index: true,
          element: <RoomsDetail />,
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
    {
      path: "/payment",
      children: [
        {
          index: true,
          element: <Payment />,
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
