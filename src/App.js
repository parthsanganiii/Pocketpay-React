import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Landing from "./Component/Landing/Landing";
import Services from "./Component/Services/Services";
import About from "./Component/About/About";
import Price from "./Component/Pricing/Price";
import Contact from "./Component/ContactUs/Contact";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy"
import Term from "./Component/Terms/Term";
import Blog from "./Component/Blog/Blog";
import Login from "./Component/Login/Login";
import Regi from "./Component/Login/Regi";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Navbar />
          <Landing />
          <Footer />
        </>
    },
    {
      path: "services",
      element:
        <>
          <Navbar />
          <Services />
          <Footer />
        </>
    },
    {
      path: "pricing",
      element:
        <>
          <Navbar />
          <Price />
          <Footer />
        </>
    },
    {
      path: "about",
      element:
        <>
          <Navbar />
          <About />
          <Footer />
        </>
    },
    {
      path: "contact",
      element:
        <> <Navbar />
          <Contact />
          <Footer />
        </>
    },
    {
      path: "privacyPolicy",
      element:
        <>  <Navbar />
          <PrivacyPolicy />
          <Footer />
        </>
    },
    {
      path: "terms",
      element:
        <> <Navbar />
          <Term />
          <Footer />
        </>
    },
    {
      path: "blog",
      element:
        <> <Navbar />
          <Blog />
          <Footer />
        </>
    },
    {
      path: "blog",
      element:
        <> <Navbar />
          <Blog />
          <Footer />
        </>
    },
    {
      path: "blog",
      element:
        <> <Navbar />
          <Blog />
          <Footer />
        </>
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "regi",
      element: <Regi />
    }
  ])

  return (
    <>

      <RouterProvider router={router} />
      {/* <Landing/> */}
      {/* <Services/> */}
      {/* <About/> */}
      {/* <Price/> */}
      {/* <Contact/> */}
      {/* <PrivacyPolicy/> */}
      {/* <Term/> */}
      {/* <Blog/> */}
      {/* <Login/> */}
      {/* <Regi/> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
