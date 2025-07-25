import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
/* yani map qilinganda commentga olinganlarni hammmasi utils 
folder ichidagi routes.tsx ichidan olinadi. masalan: pages/sign-up",
 pages/sign-in", pages/home"
*/
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import SignIn from "./pages/sign-in";
// import SignUp from "./pages/sign-up";
import { authed_route, unauthed_route } from "./utils/routes";
import { Toaster } from "@/components/ui/sonner";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useWishlistCache } from "./services/wishlist";
import OAuthSuccess from "./components/sign-up/oauth-success";

const App = () => {
  const isAuthenticated = useIsAuthenticated(); // ruyxatdan utilgan bulganligi uchun
  useWishlistCache();

  return (
    <div className="w-full">
      <Toaster />
      <Navbar />
      <Routes>
        {(isAuthenticated ? authed_route : unauthed_route).map(
          (route, index) => {
            return <Route key={index} {...route} />; // yani biz buyerda map orqali ro'yxatdan  utmaganganlarni ishatdik.
          }
        )}

        {/* {authed_route.map((route) => {
          return <Route key={route.id} {...route} />; // yani biz buyerda map orqali ro'yxatdan utganlarni ishatdik.
        })} */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
