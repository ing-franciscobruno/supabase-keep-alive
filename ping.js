import fetch from 'node-fetch';

const targets = [
	{
		name: 'Bruno Cercos',
		url: process.env.SUPABASE_IMAGE_URL_1,
	},
	{
		name: 'Portfolio',
		url: process.env.SUPABASE_IMAGE_URL_2,
	},
];

async function pingImage(target) {
	try {
		const res = await fetch(target.url);
		console.log(
			`[${new Date().toISOString()}] ${target.name} → Status: ${
				res.status
			}`
		);
		if (res.ok) {
			console.log(`${target.name} → Imagen accedida correctamente`);
		} else {
			console.error(
				`${target.name} → Error al acceder: ${res.statusText}`
			);
		}
	} catch (err) {
		console.error(`${target.name} → Error:`, err.message);
	}
}

(async () => {
	for (const target of targets) {
		await pingImage(target);
	}
})();
