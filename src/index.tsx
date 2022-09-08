import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer, Model } from "miragejs"

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Aluguel",
          type: "withdraw",
          category: "Moradia",
          amount: 750,
          createdAt: new Date("2022-07-07 23:00:00"),
        },
        {
          id: 2,
          title: "Criptoativos",
          type: "deposit",
          category: "Renda",
          amount: 2040.54,
          createdAt: new Date("2022-10-07 23:17:05"),
        },    
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {

      
      return this.schema.all("transaction");
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);