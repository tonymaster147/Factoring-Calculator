// Inject the server-rendered app markup into dist/index.html so the tool UI
// and explanatory copy are present in the HTML that search engines fetch.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).

import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INDEX = resolve(ROOT, 'dist/index.html')
const SSR_DIR = resolve(ROOT, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(SSR_DIR, 'entry-server.js')).href)

const template = await readFile(INDEX, 'utf8')
if (!template.includes('<!--app-html-->'))
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')

await writeFile(INDEX, template.replace('<!--app-html-->', render()))
await rm(SSR_DIR, { recursive: true, force: true })
console.log('Prerendered app HTML into dist/index.html')
