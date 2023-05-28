<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<h2 class="text-8xl">🦄</h2>
	<h1 class="text-center gradient-heading text-2xl">Prinsessen rir på en <br /> enhjørning!!</h1>
</div>

<style>
	@keyframes ride {
		0% {
			translate: 0;
		}
		50% {
			translate: -100vw;
		}
		50.01% {
			translate: 100vw;
		}
		100% {
			translate: 0;
		}
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}
	h2 {
		position: relative;
		animation: bounce 500ms ease-in-out infinite, ride 4s linear infinite;
	}

	h2:after {
		position: absolute;
		content: '👧🏽';
		font-size: 60px;
		right: -35px;
		top: 25px;
	}
</style>
