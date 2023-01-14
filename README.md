# nuit-isen-stks
Subject: Hotel management and booking software
Duration: 1 night

Our solution => Sugar Hotel <3

<img width="1494" alt="image" src="https://user-images.githubusercontent.com/82362374/212487763-1ea24eda-1f9a-4dbe-88ee-0526e2a6abe8.png">
<img width="1490" alt="image" src="https://user-images.githubusercontent.com/82362374/212487780-7d5e3e44-e507-4ee3-ad73-2171c9c87f34.png">
<img width="1493" alt="image" src="https://user-images.githubusercontent.com/82362374/212487810-f1ff88fb-cd9f-4cfc-9ea2-2c43773f9b64.png">
<img width="1511" alt="image" src="https://user-images.githubusercontent.com/82362374/212487820-e86c37be-e519-43a6-aed0-48a859da35a9.png">


## Architecture:

<img width="652" alt="image" src="https://user-images.githubusercontent.com/82362374/212407137-3e9023fd-7309-417c-80f9-6a79262fc65e.png">


## Clouds

For the cloud we are using GCP

To init the cloud env you need to setup first your cluster kubernetes on gcp then 

`gcloud init` to setup gcloud on your local computer and don't forger to connect your google cloud kubernetes to your local one with :

```
gcloud container clusters get-credentials staging
gcloud container clusters get-credentials production
```

Once it's setup you can easly switch between 

## Environements

3 environments are available:
- prod
- staging
- local

To run the local env you need no to `yarn install` in each micro services, once it's done you can launch the `dev` script at the root of the repo.

To trigger the pipeline of the staging env you can use `skaffold run -p staging`

To trigger the pipeline of the prod env you can use `skaffold run -p production`

<img width="508" alt="image" src="https://user-images.githubusercontent.com/82362374/212363233-be6a8483-b956-4b83-8f27-36932e080540.png">


## Tech

- For the front it's react + vite + tailwind + daisyui + apollo
- For the back it's nodeJS + mongoDB + graphQL

Eslint and prettier are setup for each microservice, to format document you need to do `cmd + s` or `ctrl + s`
There is also config to setup your vscode in `./vscode`
