import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'

export default defineConfig(() => {
  return {
    root: '.',
    input: {
      path: './openapi.yaml',
    },
    output: {
      path: './src',
    },
    plugins: [
      pluginOas(
        {
          generators: [],
          validate: true,
        },
      ),
      pluginTs(
        {
          output: {
            path: 'models',
          },
        },
      ),
    ],
  }
})