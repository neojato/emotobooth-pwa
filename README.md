# emotobooth-pwa

PWA for GCP EmotoBooth. Use your mobile device to snap photos and uploads to a given Emotobooth instance.

Not an official Google product.

## Setup
1. Copy ```config.js.template``` to ```config.js``` and populate fields
   with URL and username/password of your Emotobooth instance.
1. Install dependencies.

   ```$ npm install```

## Build & development
Run `grunt build` for building and `grunt serve` for preview.

## Deploy
1. Run `firebase init` and either create a new project or tie it to an existing one
1. Run `firebase deploy` to serve the contents of the `dist` directory
