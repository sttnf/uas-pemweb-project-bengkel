type Route = {
  path: string;
  title: string;
  protected?: boolean;
};

type Routes = {
  home: Route;
  login: Route;
  dashboard: {
    root: Route;
    appointments: Route;
    customers: Route;
    inventory: Route;
    analytics: Route;
    settings: Route;
  };
};

export const routes: Routes = {
  home: {
    path: "/",
    title: "Home",
  },
  login: {
    path: "/login",
    title: "Login",
  },
  dashboard: {
    root: {
      path: "/dashboard",
      title: "Dashboard",
      protected: true,
    },
    appointments: {
      path: "/dashboard/appointments",
      title: "Appointments",
      protected: true,
    },
    customers: {
      path: "/dashboard/customers",
      title: "Customers",
      protected: true,
    },
    inventory: {
      path: "/dashboard/inventory",
      title: "Inventory",
      protected: true,
    },
    analytics: {
      path: "/dashboard/analytics",
      title: "Analytics",
      protected: true,
    },
    settings: {
      path: "/dashboard/settings",
      title: "Settings",
      protected: true,
    },
  },
} as const;
