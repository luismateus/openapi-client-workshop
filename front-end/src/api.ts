import { DefaultApi } from './gen/apis'
import { Configuration } from './gen/runtime'

const config = new Configuration({
  basePath: 'http://localhost:4000', // <-- replace with your real backend URL
})

export const api = new DefaultApi(config)
