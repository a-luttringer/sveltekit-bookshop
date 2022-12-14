export const prerender = true;

async function loadPage(url, { fetch }) {
	const res = await fetch(url);

	if (res.ok) {
		return {
			props: await res.json()
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load ${url}`)
	};
}

export async function load({ fetch }) {
	return await loadPage('/index.json', { fetch });
}
