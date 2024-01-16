import { html, parse } from "ultrahtml";

import inlineCSS from "ultrahtml/transformers/inline";

const doc = parse(html`<div>Hello world</div>`);

// THIS
const inliner = inlineCSS({ useObjectSyntax: true });

// Without `{ useObjectSyntax: true }` is fine

inliner(doc);
