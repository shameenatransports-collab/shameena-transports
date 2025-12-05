import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="default" size="lg" className="gap-2">
                <Home className="h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
