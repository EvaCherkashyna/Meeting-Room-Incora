import {useAuth} from "hooks";
import {Navigate, Outlet} from "react-router-dom";


export const AuthRoute = () => {
    const access = useAuth();
    return <Navigate to={'/rooms'} state={{ replace: true }}/>;
}
// !access ? <Outlet /> : 