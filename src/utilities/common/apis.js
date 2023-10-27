import { fetchRequest } from './fetchRequest'
const HOST = import.meta.env.VITE_HOST
export const setBlogs = () => {
  fetchRequest(HOST)
}
