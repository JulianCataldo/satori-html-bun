# satori-html-bun

```bash
bun install
```

---

```bash
bun run start-tsx
```

Yields:

```
{
  type: 'div',
  props: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%'
    },
    children: [ [Object] ]
  }
}
```

---

```bash
bun run start-bun
```

Yields:

```
                                             ^
TypeError: undefined is not an object (evaluating 't.type')
      at S (/Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/selector.js:1:5712)
      at /Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/selector.js:1:6194
      at /Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/selector.js:1:4783
      at /Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/selector.js:1:4896
      at visit (/Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/index.js:1:2539)
      at visit (/Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/index.js:1:2643)
      at C (/Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/selector.js:1:4861)
      at /Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/ultrahtml/dist/transformers/inline.js:2:514
      at html (/Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/node_modules/satori-html/dist/index.js:68:5)
      at /Volumes/n_1024a-Projects/Repositories/__repros/satori-html-bun/index.ts:3:16
```
