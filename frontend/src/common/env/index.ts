import { IEnv } from '@/@types/IEnv'

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

const Env = {
  internalEndpointUrl:
    process.env.internalEndpointUrl ?? 'http://localhost:3000',
  externalEndpointUrl:
    process.env.externalEndpointUrl ?? 'http://localhost:9000',
} as IEnv

console.log('Env:', Env)

export default Env
