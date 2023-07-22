"use client";
import axios from "axios";
import { useState } from "react";
import { ProgressBar, DashboardComponent } from "@/components";
import Image from "next/image";
import logo from "../../public/logo.png"

export default function Home() {
  const baseUrl = 'http://127.0.0.1:5000/get_tendancy';
  const [tendancy, setTendancy] = useState<number>(0);
  const [link, setLink] = useState<string>("")

  const requestData = {url: "https://forum.gnosis.io/t/5896/posts.json"} 

  const getTendancy = () => {
    axios.post(baseUrl, requestData)
    .then(function (response) {
      setTendancy(response.data["tendancy"]);
      console.log(response.data["success"]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

//   const axios = require('axios');

// const query = () => {
//   // Replace YOUR_API_KEY with your actual API key
// const apiKey = "b5e99accff911dca620016bb69c6c241827c4e5551024dfc4cfe301fe5e32872";

// // GraphQL query for accounts
// const query = `query {
//   proposals (
//     where: {
//       state: "open"
//     },
//   ) {
//     id
//     title
//     body
//     choices
//     start
//     end
//     snapshot
//     state
//     scores
//     scores_by_strategy
//     scores_total
//     scores_updated
//     author
//     space {
//       id
//       name
//     }
//   }
// }`

// // Variables for the query
// const variables = {
//   "chainId": "eip155:100"
// }

// // Make the API request using Axios
// axios.post('https://hub.snapshot.org/graphql', {
//   query: query,
// }, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(response => {
//     console.log(response.data);
//     // Process the response data here
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });}


  return (
    <main className="bg-[#D0CAB9] h-screen">
      {/* <div>Merhaba</div>
      <div>{tendancy}</div>
      <input type="text" onChange={(e) => {
        setLink(e.currentTarget.value)
        console.log(link)
      }}/>
      <button onClick={() => {
        getTendancy()
      }}>GET</button>
      <DashboardComponent percentage={tendancy} title="Deneme 1" description="Oylamanın forumdaki ağırlık yönü"/>
      <button onClick={() => {
        query()
      }}>POST</button> */}
      <nav className="bg-[#486858] h-[119px] w-full flex">
        <Image src={logo} alt={"Logo"} className="my-7 mx-auto"/>
      </nav>
      <ul className="w-2/3 bg-[#F6F2E7] mx-auto mt-64 flex flex-row">
        <li className="w-full">Gnosis DAO</li>
        <li className="w-full">Nouns DAO</li>
        <li className="w-full">Arbitrum</li>
        <li className="w-full">Optimism</li>
        <li className="w-full">Aave</li>
      </ul>
    </main>
  );
}
