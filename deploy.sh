#!/usr/bin/env sh

# abort on errors
set -e

# if you are deploying to a custom domain
echo 'slab.usc.edu' > CNAME

git init
git add -A
git commit -m 'updated public site'

# if you are deploying to https://<USERNAME>.github.io
 git push -f git@github.com:neural-modeling-and-interface-lab/on-memory-neurotechnologies.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
