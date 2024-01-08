import { Request, Response } from "express"
import { port } from "./modules/port"
import { service } from "./modules/service"

export const microservice = {
  new: async (callback: (req: Request, res: Response) => void) => {
    return await service.new((req, res) => callback(req, res))
  },

  get: async (input: {
    service: {
      port: number
    },
    time: number
  }) => {
    return await service.get(input)
  },

  test: () => {
    for (let i = 0; i < 500000; ++i) {
      console.log(port.generate())
    }
  }
}