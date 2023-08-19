# Jamstack Website Tools Overview

This repository contains tools that may prove helpful when doing [Jamstack](https://jamstack.org) (or similar) static site development.

---

## Table of Contents

- [Tools](#tools)
- [Related Repositories](#related-repositories)
- [License](#license)

---

## Tools

### Thumbnail Generator

This is a simple thumbnail generator written in [Node.js](https://nodejs.dev/en/).

More details can be found in the [README.md](v1/thumbnail/README.md) for that tool.

# Related Repositories

This repository is part of a small group of repositories that are used together in order to deploy a simple 11ty Jamstack website.  Here is the list of related repositories:

1. [Jamstack Website boilerplate](https://github.com/ngamradt/boilerplate-jamstack-website): This repository is the core repository that stitches everything together.  It houses the following components:
    - The main AWS CodePipeline that will deploy all infrastructure and the Jamstack website itself.
    - All needed CloudFormation templates to create the required infrastructure.
    - The 11ty liquid templates for the structure of the website.
    - The supporting CSS and JavaScript files for the Jamstack site.
    - All of the source content files for each blog post.
2. [Jamstack Website Tools](https://github.com/ngamradt/boilerplate-jamstack-website-tools) (this repository): This repository has any supporting tools for the Jamstack website.
3. [Jamstack Website Build](https://github.com/ngamradt/boilerplate-jamstack-website-build): This repository has the Lambda function that is used to produce the 11ty dynamic pages.
4. [Jamstack Website Static Resources](https://github.com/ngamradt/boilerplate-jamstack-website-static): This repository has all large static files that are used either by the site in general, or by the individual posts.  These files are kept separate in order to keep the build process fast and easy.

These repositories are part of my ["Blog on a Budget" series](https://nealgamradt.com/posts/2023/06/blog-on-a-budget-overview/index.html).  View that blog post series for more details on how these repositories all work together.

# License

This repository is released under [the MIT license](https://en.wikipedia.org/wiki/MIT_License).  View the [local license file](./LICENSE).