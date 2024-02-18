import dotenv from 'dotenv'
dotenv.config()

import { users } from "./app/users";
import { microservice } from "./microservicelib"

;(async () => {
  // ?: users list get :? //
  const usersList = await microservice.get(await users.get())
  // ?: users sort by balance :? //
  const sortedUsers = await microservice.get(await users.sort(usersList.response, 15000))
  // ?: response console log :? //
  console.log(sortedUsers.response)
})()