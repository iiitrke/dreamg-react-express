####server Run
npm run dev

npm install --save @types/node

https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript

Create a file in the base called types/express/index.d.ts. And in it write:

declare namespace Express {
interface Request {
yourProperty: <YourType>;
}
}
and include it in tsconfig.json with:

{
"compilerOptions": {
"typeRoots": ["./types"]
}
}
Then yourProperty should be accessible under every request:
