import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello, inbox: the boss's thought arrives from the boss himself (me).
// This batch of orders fits into one quiet slot I reserved for myself.
const text = "I forwarded the CEO's 'quick thought' to myself so I could read it at my own pace.";

const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), text, 'utf8');
console.log(`${Buffer.byteLength(text, 'utf8')} bytes`);
