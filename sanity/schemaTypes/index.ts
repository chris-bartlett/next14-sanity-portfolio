import { type SchemaTypeDefinition } from 'sanity'
import { projectsType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectsType],
}
