import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import feedback from './feedback'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, feedback, order ], 
}
