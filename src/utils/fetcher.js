export default async function fetcher(...args) {
  const res = await fetch(...args)
  const json = await res.json()

  if (json.data) return json.data
  return json
}
