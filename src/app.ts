import { microservice } from "./microservicelib";

;(async () => {
  let getsuccess = 'test response'
  const service = await microservice.new((req, res) => {
    return res.json(getsuccess)
  })
  
  const get = await microservice.get(service)
  console.log(get.response)
})()