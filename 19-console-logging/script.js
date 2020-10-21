/**
 * CONSOLE LOGGING
 *
 * Det finns flera olika 'nivåer' av loggningar till konsollen.
 *
 * `.debug()` - debug loggning, ser visuellt ut som en vanlig `.log()` utan färgkodning
 * `.info()` - informativ loggning, färgkodas oftast med en cirkel med ett "i" i mitten
 * `.log()` - loggning utan färgkodning eller metadata
 * `.warn()` - varning att något *kan* ha gått snett, färgkodas oftast med mörkgul bakgrund
 * `.error()` - varning att något *HAR* gått snett, färgkodas oftast med mörkröd bakgrund
 *
 */

const makeBadStuffHappen = () => {
	console.error("Bad stuff made ✅.");
}

console.debug("This is a debug entry to the console.");
console.info("This is an informational log to the console.");
console.log("This is an ordinary log to the console.");
console.warn("This is a warning that something bad MAY have happened.");
console.error("This is a error stating that something TRULY BAD has happened.");

makeBadStuffHappen();
