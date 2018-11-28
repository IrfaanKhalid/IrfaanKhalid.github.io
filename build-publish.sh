# Generate dist/ folder
yarn run generate

# Copy static assets
cp static/resume.pdf dist/ && cp static/favicon.png dist/

# Push for deployment
git add -A
git commit -m "Updates"
git push