export const load = async ({ url }) => {
	const slides: Record<string, App.SvxResolver> = import.meta.glob('/src/lib/slides/*.svx', {
		eager: true
	});

	return {
		pathname: url.pathname,
		numSlides: Object.keys(slides).length,
		slides: new Map(
			Object.entries(slides).map(([key, value]) => [key.replace(/.+?(\d+)\.svx$/, '$1'), value])
		)
	};
};
