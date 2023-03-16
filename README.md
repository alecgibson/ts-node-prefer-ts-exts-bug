# ts-node-prefer-ts-exts-bug

## Repro steps

1. Clone this repo
1. `npm i`
1. `npm test`
1. Note 100% coverage, including `packages/object-id/index.ts`
1. `npm run build`
1. `npm test`
1. Now note less coverage: `packages/object-id/index.ts` is uncovered, because `packages/object-id/index.js` is being
   used instead
1. Reset using `npm run build:clean`, and coverage returns to 100%
