

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from 'axios'

import Layout from "../components/layout";
// import excuteQuery from '../../lib/db'

export default function Supplier({data}) {

return (
   <div className="flex  flex-wrap items-center justify-around sm:w-full mt-6 ">
      {data? data.map((dt, i )=>{
      
      return (
  //     <a href="https://nextjs.org/docs"
  //     className=" flex flex-col flex-wrap justify-center items-center p-6 m-4  text-left border w-96 rounded-xl hover:text-emerald-600 focus:text-blue-600">
  //     <h3 className="text-2xl font-bold">{dt.Name} &rarr;</h3>
  //     <p className=" mt-4 text-xl">
  //  {dt.District}
  //     </p>
  //     <img src="https://via.placeholder.com/300"></img>
  //   </a>
  <div key={i}  className="flex i mb-6 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80">
  <div className=" rounded-lg shadow-lg bg-white max-w-sm opacity-80 hover:opacity-70   ">
    <a href="#!" className=" flex tems-center justify-center overflow-hidden " >
      <img className= " delay-100 transition-all rounded-t-lg hover:scale-125" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{dt.Name}</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
        
        )
      
      
      }):"loading bitch ......."}
       </div>
)
  }

  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await  axios.get('http://localhost:8000/api/suppliers')
   
     const data = res.data
  console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }

  Supplier.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
