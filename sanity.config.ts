import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas'
const config = defineConfig({
    projectId: "am6iwdpt",
    dataset: "production",
    title: "samity-my-super-blog",
    apiVersion: "2023-08-03",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;