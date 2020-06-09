# Site

www.theaustinbentley.com

## S3 Bucket deploy

1. Remove everything inside `theaustinbentley.com` object
2. Create a new folder named `Portfolio`
3. `npm run predeploy`
4. `npm run deploy`
5. Copy `/static` folder into `/Portfolio/`
6. Rerun Cloudfront distribution

Note: It can take up to 24 hours for cloudfront to serve the new files.
