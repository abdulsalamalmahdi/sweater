import '../styles/globals.css'
import Layout from '../components/layout'
import { HamProvider } from "../context/ham_data";
import { useState } from 'react';
// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
 
  const [toggle, setToggle]= useState(null);

    const tic=(st)=>{
setToggle(st)
    }
  
  return (
   <HamProvider>
       <Layout>
      <Component {...pageProps} />
    </Layout>
   </HamProvider> 
  )

}