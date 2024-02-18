import { microservice } from "../../microservicelib"
import { database } from "../../mockdata/database"
import { IUser } from "../types/user"

export const sort = async (users: IUser[], sortCondition: number) => {
  const service = await microservice.new(async (req, res) => {
    // ?: any sort logic :? //
    const sorted = users.filter(user => user.balance > sortCondition)
    return res.json(sorted)
  })
  return service
}