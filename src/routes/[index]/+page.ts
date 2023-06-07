export const load = async ({ parent, params }) => {
	const slide = (await parent()).slides.get(params.index);
	const component = (await slide)?.default;
	return { component };
};
