// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	type seed = {
		id:string,
		name:string,
		color?:string,
		growthRate:number, // 1
		initialAge:number, // 0
	}
}

export {};
