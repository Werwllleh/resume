import Preview from "../pages/Preview";
import Resume from "../pages/Resume";

export const pageRoutes = [
  {
    path: "/preview",
    element: Preview,
    breadcrumb: "Preview",
  },
  {
    path: "/resume",
    element: Resume,
    breadcrumb: "Resume",
  },
];
