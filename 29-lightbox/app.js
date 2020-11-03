/**
 * Lightbox.
 *
 */

/*
Två möjliga tillvägagångssätt

1a. Hämta ut alla `a.photo`, loopa över dem och lägg till en
click-EventListener för varje element.

1b. Hämta ut `.photos`-elementet och lägg till en click-EventListener
på den. I EventListener:n, kolla om det som klickades på är
en IMG.

2. Hämta ut IMG's förälder (A-tagg) href och sätt på `#lightbox-wrapper img` src-attribut.

3. Lägg till klassen `show` på `#lightbox-wrapper`.

4. (Lägg till en click-EventListener på `#lightbox-wrapper` som tar bort `show`-klassen.)

5. 🌟 Om du kan fixa så man kan ha en caption på varje bild och den visas. Naturligtvis
via JavaScript, lägg inte till en caption i själva bildfilen :P.
*/

const lightboxWrapper = document.querySelector('#lightbox-wrapper');
const lightboxImg = document.querySelector('#lightbox-wrapper img');
const lightboxCaption = document.querySelector('#lightbox-wrapper .caption');

/*
// 1a. Hämta ut alla `a.photo`, loopa över dem och lägg till en
// click-EventListener för varje element.
document.querySelectorAll('a.photo').forEach(link => {
	link.addEventListener('click', e => {
		// stop browser from following the link and hence leaving the page
		e.preventDefault();

		// console.log("you clicked on:", e.target);
		// console.log("that elements parent is:", e.target.parentElement);
		// console.log("the parent's link is:", e.target.parentElement.href);

		// retrieve URL to large image from parent element's href-attribute
		const large_img = e.target.parentElement.href;

		// set URL to large image on lightbox's image-element's src-attribute
		lightboxImg.setAttribute('src', large_img);

		// finally, add class `show` to `#lightbox-wrapper`
		lightboxWrapper.classList.add('show');
	});
});
*/

// 1b. Hämta ut `.photos`-elementet och lägg till en click-EventListener
// på den.
document.querySelector('.photos').addEventListener('click', e => {
	// prevent default action for click-events
	e.preventDefault();

	// I EventListener:n, kolla om det som klickades på är en IMG.
	if (e.target.tagName === "IMG") {
		// 2. Hämta ut IMG's förälders (A-tagg) href
		// och sätt på `#lightbox-wrapper img` src-attribut.
		lightboxImg.setAttribute('src', e.target.parentElement.href);

		// 5. 🌟 Om du kan fixa så man kan ha en caption på varje bild och den visas. Naturligtvis
		// via JavaScript, lägg inte till en caption i själva bildfilen :P.
		lightboxCaption.innerText = e.target.parentElement.dataset.caption;

		// 3. Lägg till klassen `show` på `#lightbox-wrapper`.
		lightboxWrapper.classList.add('show');
	}
});

// 4. (Lägg till en click-EventListener på `#lightbox-wrapper` som tar bort `show`-klassen.)
lightboxWrapper.addEventListener('click', () => {
	// hey lightboxWrapper, remove that `show` class
	lightboxWrapper.classList.remove('show');

	// empty lightboxImg src-attribute
	lightboxImg.setAttribute('src', '');
});

