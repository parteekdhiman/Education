import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

const queryClient = new QueryClient();

// Create router with future flags
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ScrollToTop>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      ),
    },
    {
      path: "/about",
      element: (
        <ScrollToTop>
          <AboutPage />
        </ScrollToTop>
      ),
    },
    {
      path: "/courses",
      element: (
        <ScrollToTop>
          <CoursesPage />
        </ScrollToTop>
      ),
    },
    {
      path: "/courses/:courseId",
      element: (
        <ScrollToTop>
          <CourseDetailPage />
        </ScrollToTop>
      ),
    },
    {
      path: "/contact",
      element: (
        <ScrollToTop>
          <ContactPage />
        </ScrollToTop>
      ),
    },
    {
      path: "*",
      element: (
        <ScrollToTop>
          <NotFound />
        </ScrollToTop>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
