import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for live updates and draft mode
  token: process.env.NEXT_SANITY_API_READ_TOKEN,
})