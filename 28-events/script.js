/**
 * EVENTS
 *
 * Det finns en del andra events vi kan använda förutom `click`.
 *
 * copy - reagerar på när man markerat innehåll och trycker Copy eller Ctrl/Cmd-C.
 * mousemove - reagerar på när man flyttar muspekaren över ett element
 * scroll - reagerar på när man scrollar i elementet
 * wheel - ungefär som scroll, men måste använda scrollhjulet på en mus
 */

document.querySelector('button').addEventListener('click', e => {
	console.log("You've clicked the wrong button!");
	console.log('click:', e);
	document.querySelector('div.alert').classList.remove('hide');
});

document.querySelector('#box-click').addEventListener('click', e => {
	document.querySelector('#box-click').innerHTML = `<span>The position of your click was x: ${e.offsetX}, y: ${e.offsetY}</span>`;
});

document.querySelector('#box-pointer').addEventListener('mousemove', e => {
	document.querySelector('#box-pointer').innerHTML = `<span>The position of your pointer is x: ${e.offsetX}, y: ${e.offsetY}</span>`;
});

window.addEventListener('scroll', e => {
	const bodyScrollHeight = document.querySelector('body').scrollHeight - window.innerHeight;
	console.log("they see me scrollin'", Math.round(window.scrollY / bodyScrollHeight * 100));
});
