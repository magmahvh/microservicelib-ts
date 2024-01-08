import { ports } from '../cache/ports'
import { debug } from '../debug'

const MIN_PORT = 11111
const MAX_PORT = 65535 

export const port = {
  generate: () => {
    const startTime = debug.time.start()
    ;
      let speculativePort = Math.floor(Math.random() * (MAX_PORT - MIN_PORT + 1) ) + MIN_PORT
      let alreadyUsedPortAttempt = 0
      while (ports.get().includes(speculativePort)) {
        alreadyUsedPortAttempt++
        speculativePort = Math.floor(Math.random() * (MAX_PORT - MIN_PORT + 1) ) + MIN_PORT
        if (alreadyUsedPortAttempt > MAX_PORT + MIN_PORT) throw `Port stack is full (${ports.get().length}/${MAX_PORT - MIN_PORT})`
      }

      let alreadyUsedPorts = ports.get()
      alreadyUsedPorts.push(speculativePort)
      ports.set(alreadyUsedPorts)
    ;
    const endTime = debug.time.end(startTime)
    return { port: speculativePort, time: endTime }
  }
}