# View the site
👉 See the live documentation site at https://docs.postalserver.io


# Postal Server Documentation
[Postal is a complete and fully featured mail server](https://postal.atech.media/) for use by websites & web servers. Think Sendgrid, Mailgun or Postmark but open source and ready for you to run on your own servers. Postal was developed by aTech Media to serve its own mail processing requirements and we have since decided that it should be released as an open source project for the community. It was originally launched by us as AppMail but renamed to Postal as part of making it open source as we felt the name was more suitable.

## The purpose of this repository
This repository hosts the documentation for Postal only. If you are looking for the Github repo for the application source code, [go to the open source repository for Postal →](https://github.com/postalserver/postal)

## Contribution Instructions
Contributions are welcome! Please open up a pull request that clearly describes your intentions.

This site runs on [Nuxt Content](https://content.nuxtjs.org/). Please review their docs for how this framework works.

### Installing on your local machine

If you'd like to run this site locally on your machine, follow these steps:

#### Docker usage
In an effort to keep our Node versions the same, we have a `docker-compose.yml` file that will prepare your development environment for you. We encourage you to use this even if you have NPM installed on your machine. This will guarantee we have the same version across everyone's computer.

#### Setup

Install dependencies:

```bash
docker compose run node yarn install
```

#### Running the docs site in development

```bash
docker compose pull && docker compose up
```

Wait for your machine to complete the build, then your development copy will be available at http://localhost:3000

### Managing content

#### Content Location
All content is located under the `/content` folder, followed by the language. You will find the markdown files in there.

#### Organizing Pages
Everything is organized by ["front matter" and Nuxt Content](https://content.nuxtjs.org/themes/docs#front-matter).

Make sure you are setting your `position` and `category` fields correctly. For example:
```yaml
---
title: My 2nd Page Title
description: ''
position: 1.1
category: My Category
---
```
The above result would look like this:
<p align="center">
	<img src="https://raw.githubusercontent.com/postalserver/docs/main/static/docs-category-and-postion.png">
</p>

