// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}

	interface SvxModule {
		default: Constructor<import('svelte').SvelteComponent>;
	}

	type SvxResolver = Promise<SvxModule>;
}
