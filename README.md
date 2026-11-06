Animated message
================

Type a message and watch it animate as SVG, at
[animated-message.mikemjharris.com](https://animated-message.mikemjharris.com).

A static site: the message lives in the link (`?message=...`) and is drawn in the browser.

```
npm install
npm run build    # static files in dist/
npm start        # build, then serve dist/ on http://localhost:8000
```

Pushing to `main` deploys to S3 + CloudFront with GitHub Actions
(infrastructure in [mikemjharris/infra](https://github.com/mikemjharris/infra)).
