import '../styles/globals.css'
import Navbar from '../components/navbar';
import Layout from '../components/layout'
import { HamProvider } from "../context/ham_data";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import Alert from '/components/Alert.jsx';
//import { userService } from 'services/user.service';
// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
 
  const [toggle, setToggle]= useState(null);

    const tic=(st)=>{
setToggle(st)
    }

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);



    // function authCheck(url) {
    //     // redirect to login page if accessing a private page and not logged in 
    //     setUser(userService.userValue);
    //     const publicPaths = ['/','/account/login', '/account/register'];
    //     const path = url.split('?')[0];
    //     if (!userService.userValue && !publicPaths.includes(path)) {
    //         setAuthorized(false);
    //         router.push({
    //             pathname: '/account/login',
    //             query: { returnUrl: router.asPath }
    //         });
    //     } else {
    //         setAuthorized(true);
    //     }
    // }

  
  return (
   <HamProvider>
     <Navbar user={user}></Navbar>
       <Layout>
      <Component {...pageProps} />
    </Layout>
   </HamProvider> 
  )

}