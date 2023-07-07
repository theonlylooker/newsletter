import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewsletterForm } from "./modules/newsletter-form/newsletter-form";
import { NewsletterSuccess } from "./modules/newsletter-success/newsletter-success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsletterForm />,
    children: [
      {
        path: "/success",
        element: <NewsletterSuccess />,
      },
    ],
  },
]);

export const MyRouterProvider = () => {
  return <RouterProvider router={router} />;
};
