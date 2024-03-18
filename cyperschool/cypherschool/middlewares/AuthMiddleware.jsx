import { useRouter } from "next/router";
import Preloader from "../pages/components/Preloader"
import useAuthenticated from "../hooks/useAuthentication"

const AuthMiddleware = ({ children }) => {
    const router = useRouter();
    const { authenticated, isLoading } = useAuthenticated();
    if (isLoading) {
        return <Preloader />
    }
    if (authenticated) return <>{children}</>;
    if (!authenticated && !isLoading) {
        router.push("/");
    }
    return <Preloader />
} 

export default AuthMiddleware