pnpm i

docker-compose -f docker-compose.yml up

pnpm db:push
pnpm db:studio

 npx inngest-cli@latest dev