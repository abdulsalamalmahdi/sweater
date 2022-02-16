import '../styles/globals.css'
import Navbar from '../components/navbar';
import Layout from '../components/layout'
import { HamProvider } from "../context/ham_data";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import Alert from '/components/Alert.jsx';
import { userService } from 'services/user.service';
// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
 
  const [toggle, setToggle]= useState(null);

    const tic=(st)=>{
setToggle(st)
    }

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      // on initial load - run auth check 
      authCheck(router.asPath);

      // on route change start - hide page content by setting authorized to false  
      const hideContent = () => setAuthorized(false);
      router.events.on('routeChangeStart', hideContent);

      // on route change complete - run auth check 
      router.events.on('routeChangeComplete', authCheck)

      // unsubscribe from events in useEffect return function
      return () => {
          router.events.off('routeChangeStart', hideContent);
          router.events.off('routeChangeComplete', authCheck);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        setUser(userService.userValue);
        const publicPaths = ['/','/account/login', '/account/register'];
        const path = url.split('?')[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/account/login',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

  
  return (
   <HamProvider>
     <Navbar user={user}></Navbar>
       <Layout>
      <Component {...pageProps} />
    </Layout>
   </HamProvider> 
  )

}