# payment-page
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Sample [Node.js](https://nodejs.org/en/) app built on the [Express.js](https://expressjs.com/) framework that masks payment details using the ChargeIO.js tokenization library and submits charge requests to the AffiniPay Payment Gateway

## Overview
This is a simple node app for accepting credit card payments on a website. Here's what it does:

1.  Provides a form for collecting credit card details and a payment amount.
2.  Exchanges credit card details for a one-time token without passing sensitive data through the local web server.
3.  Posts the one-time token and payment amount to an endpoint on the local web server using a callback ([public/javascripts/event-handler.js](./public/javascripts/event-handler.js)).
4.  Submits a charge request to the [AffiniPay Payment Gateway](https://developers.affinipay.com/reference/api.html#PaymentGatewayAPI) using the one-time token and payment amount.

## Security
This app requires AffiniPay Payment Gateway API keys, which include a public and [test- or live-mode](https://developers.affinipay.com/basics/account-management.html#test-live-creds) secret key.

-   **Public key:** The ChargeIO.js tokenization library needs to know your merchant identity to create payment tokens. You identify yourself by providing your public key, which is safe to expose in web pages (as opposed to your secret key, which must be safeguarded).
-   **Secret key:** Used to authenticate requests from your web server to the AffiniPay Payment Gateway when running charges and performing other operations.

    >Your secret keys provide access to sensitive operations affecting payments and therefore must be closely guarded. Never expose these keys in any publicly-accessible web pages, JavaScript, etc.

## Installation
This app is written in Node.js, which must be installed prior to use. Node.js includes the Node Package Manager (NPM), which is used for installing dependencies.

1.  Clone the repository:
    >```
    > $ git clone git@github.com:jeff-matthews/payment-page.git
    >```

2.  Open a terminal and navigate to the new directory:
    >```
    > $ cd payment-page
    > ```

3.  Install dependencies:
    >```
    >$ npm install
    >```

## Configuration
1.  Log in to the AffiniPay web app.
2.    [Obtain](https://developers.affinipay.com/guides/payment-form-getting-started.html#obtain-credentials) your AffiniPay Payment Gateway API keys.
3.  Enter your public key in the [`views/layout.pug`](./views/layout.pug) template to initialize the ChargeIO.js library:
    >```
    > script.
    >  ChargeIO.init({public_key: '<add-your-key-here>'});
    >```

4.  Add your live- or test-mode secret key to your web server. [TODO]

## Usage
1.  Start the server:
    >```
    >$ npm start
    >```
    > Use `DEBUG=app.js:* npm start` to launch the app in [debug](https://www.npmjs.com/package/debug) mode.

2.  Open a web browser and go to [http://localhost:3000](http://localhost:3000).
3.  Enter payment details in the form.
4.  Click **Submit**.

## Contributions
Contributions in the form of GitHub pull requests are welcome. Please adhere to the following guidelines:
  - Before embarking on a significant change, please create an issue to discuss the proposed change and ensure that it is likely to be merged.
  - Follow the coding conventions used throughout the project, including 2-space indentation and no unnecessary semicolons. Many conventions are enforced using eslint.
  - Any contributions must be licensed under the MIT license.

## License
[MIT](./LICENSE) © Jeff Matthews
