// thinking_revised: hello, final pass. The batch of orders is one small question;
// it takes a single slot, then clones itself into a whole calendar of slots.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : resolve(here, configured);

const joke = "I put a 'quick question' in the calendar. It now has a calendar of its own.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
console.log(`${Buffer.byteLength(joke, 'utf8')} bytes`);
