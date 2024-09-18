export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  console.log("res", res);

  if (!res.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  return res.json();
}
