export async function getData(URL: string) {
  const response = await fetch(URL, {});
  return await response.json();
}
