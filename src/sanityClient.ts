import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url' // Импортируем билдер картинок

export const client = createClient({
  projectId: 'mmj0io8n', // Твой ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

// --- ДОБАВЬ ЭТОТ БЛОК ---
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}