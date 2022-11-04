Welcome 👋

Pull the latest changes and switch to branch `day2`:

```
git pull
git switch day2
```

#### `001-landing`

- To launch locally: `yarn && yarn start`
- To run a tunnel to the web: `yarn build && yarn serve-to-web`
- To deploy to (your) Netlify (via [Netlify CLI](https://docs.netlify.com/cli/get-started/)): `yarn build && netlify deploy -d dist --prod`

#### `002-spa`

- To launch locally: `yarn && yarn start`
- To run a tunnel to the web: `yarn build && yarn serve-to-web`
- To deploy to (your) Netlify (via [Netlify CLI](https://docs.netlify.com/cli/get-started/)): `yarn build && netlify deploy -d build --prod`

#### How to measure your local changes in...

##### WebPageTest

1. Build the app for production (if you try to optimize a dev build, you’ll be chasing wrong stuff): `yarn build`
2. Expose the app to the web:
   - Run a tunnel: `yarn serve-to-web`
   - Or deploy to Netlify (via [Netlify CLI](https://docs.netlify.com/cli/get-started/)): `netlify deploy -d dist --prod`
3. Go to [WebPageTest.org](https://webpagetest.org)
4. Open Advanced Configuration → Advanced (yes, another one) and set the “User Agent String” field to `custom-user-agent` (or anything else non-standard). This is needed to bypass the [`localtunnel`](https://github.com/localtunnel/localtunnel)’s “Click this button to continue” page.

   You can skip this step if you deployed the app to Netlify.

5. If you try to test the `002-spa` app, the app will require you to sign in to GitHub. To skip this step, hard-code your GitHub token in the app:

   - Once you’ve signed into the app locally, run `localStorage.getItem('github_token')`
   - Copy the resulting value
   - Go to the `AuthWrapper.js` component and replace this line:

     ```js
     const storedToken = localStorage.getItem("github_token");
     ```

     with this:

     ```js
     const storedToken = "<THE VALUE YOU COPIED>";
     ```

   - (Don’t forget to re-build after this.)

##### PageSpeed Insights

1. Build the app for production (if you try to optimize a dev build, you’ll be chasing wrong stuff): `yarn build`
2. Expose the app to the web:
   - Or deploy to Netlify (via [Netlify CLI](https://docs.netlify.com/cli/get-started/)): `netlify deploy -d dist --prod`
   - (The `localtunnel` tunnel won’t work because it shows a “Click this button to continue” page. You can try [a paid `ngrok`](https://ngrok.com/) instead.)
3. Go to PageSpeed Insights and run the test there

##### Lighthouse

1. Build the app for production (if you try to optimize a dev build, you’ll be chasing wrong stuff): `yarn build`
2. Serve the app locally: `yarn serve`
3. Open the url in Chrome
4. Go to Chrome DevTools → Lighthouse and run a test

##### Performance Insights

1. Build the app for production (if you try to optimize a dev build, you’ll be chasing wrong stuff): `yarn build`
2. Serve the app locally: `yarn serve`
3. Open the url in Chrome
4. Go to Chrome DevTools → three-dot menu → More Tools → Performance Insights and run a test
