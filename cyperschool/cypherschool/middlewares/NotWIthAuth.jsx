import { useRouter } from "next/router";
import Preloader from "../pages/components/Preloader"
import useAuthenticated from "../hooks/useAuthentication"

const NotAuthMiddleware = ({ children }) => {
    const router = useRouter();
  
    const { isLoading, authenticated: isAuthenticated } = useAuthenticated();
  
    if (isLoading) return <Preloader />;
  
    if (!isAuthenticated && !isLoading) return <>{children}</>;
  
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  
    return <Preloader />;
  };
  
  export default NotAuthMiddleware;