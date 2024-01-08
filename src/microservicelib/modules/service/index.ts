import express, { Express, Request, Response } from 'express'
import { port } from '../port'
import { debug } from '../../debug';

export const service = {
  new: async (callback: (req: Request, res: Response) => void) => {
    const startTime = debug.time.start()
    ;
      const serviceApp: Express = express()
      const servicePort = port.generate()
      serviceApp.use(express.json())
      serviceApp.use('/', (req: Request, res: Response) => callback(req, res))
      serviceApp.listen(servicePort.port)
    ;
    const endTime = debug.time.end(startTime)
    console.log(`new microservice start on port ${servicePort.port} (${servicePort.time}ms - ${endTime}ms)`)
    return {
      service: {
        port: servicePort.port
      },
      time: endTime
    }
  },

  get: async (input: {
    service: {
      port: number
    },
    time: number
  }) => {
    const startTime = debug.time.start()
    ;
      const request = await fetch(`http://localhost:${input.service.port}/`, {
        method: 'GET'
      })
      const body = await request.json()
    ;
    const endTime = debug.time.end(startTime)
    console.log(`new request on port ${input.service.port} (${endTime}ms)`)
    return {
      response: body,
      time: endTime
    }
  }
}