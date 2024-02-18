import { microservice } from "../../microservicelib"
import { database } from "../../mockdata/database"

export const get = async () => {
  const service = await microservice.new(async (req, res) => {
    // ?: Database request logic :? //
    return res.json(await database.getUsers())
  })
  return service
}