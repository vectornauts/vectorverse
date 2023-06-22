# VectorVerse NextJS Development

## Getting Started
First install NodeJS 18
```shell
cd ~
curl -s https://deb.nodesource.com/setup_18.x | sudo bash
sudo apt install nodejs -y
node -v
```

### Connect your local repo to Vercel
```bash
cd client
npm install -g vercel
vercel link
? Set up “~/vectorverse/client”? [Y/n] Y
? Which scope should contain your project? 
○ ----------- 
● vectornauts
? Link to existing project? [y/N] y
? What’s the name of your existing project? vectorverse
✅  Linked to vectornauts/vectorverse (created .vercel)
vercel env pull .env
Vercel CLI 30.2.3
> Downloading `development` Environment Variables for Project vectorverse
✅  Created .env file  [74ms]
```


### Install the dependencies
To install the necessary packages and build the prisma db client, from the **client** directort run:
```shell
cd client
npm install --legacy-peer-deps (or yarn install)
npx prisma generate
```

### Run the App
```shell
npm run dev
```
