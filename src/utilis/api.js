export async function getData(url, method:String, body, token?) {
  const res = await fetch(url, method, body, token)

  if(!res.ok) {
    throw new Error("Couldn't get data")
  }
  return res.json
}
