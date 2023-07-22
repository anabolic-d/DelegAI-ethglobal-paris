"use client";
import axios from "axios";
import { useState } from "react";
import { ProgressBar, DashboardComponent } from "@/components";

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

  const axios = require('axios');

const query = () => {
  // Replace YOUR_API_KEY with your actual API key
const apiKey = "b5e99accff911dca620016bb69c6c241827c4e5551024dfc4cfe301fe5e32872";

// GraphQL query for accounts
const query = `query {
  proposals (
    where: {
      state: "open"
    },
  ) {
    id
    title
    body
    choices
    start
    end
    snapshot
    state
    scores
    scores_by_strategy
    scores_total
    scores_updated
    author
    space {
      id
      name
    }
  }
}`

// Variables for the query
const variables = {
  "chainId": "eip155:100"
}

// Make the API request using Axios
axios.post('https://hub.snapshot.org/graphql', {
  query: query,
}, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    console.log(response.data);
    // Process the response data here
  })
  .catch(error => {
    console.error('Error:', error);
  });}


  return (
    <main>
      <div>Merhaba</div>
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
      }}>POST</button>
    </main>
  );
}
