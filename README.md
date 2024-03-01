# View the Site
👉 See the live documentation site at https://docs.postalserver.io

# Postal Server Documentation
Postal is a complete and fully-featured mail server for use by websites and web servers. Think of Sendgrid, Mailgun, or Postmark, but open source and ready for you to run on your own servers. Postal was developed by aTech Media to serve its own mail processing requirements, and we have since decided that it should be released as an open-source project for the community. It was originally launched by us as AppMail but was renamed to Postal as part of making it open source because we felt the name was more suitable.

## The Purpose of This Repository
This repository hosts the documentation for Postal only. If you are looking for the GitHub repository for the application source code, [go to the open-source repository for Postal →](https://github.com/postalserver/postal)

## Contribution Instructions
Contributions are welcome! Please open up a pull request that clearly describes your intentions.

This site runs on [Nuxt Content](https://content.nuxtjs.org/). Please review their documentation to understand how this framework works.

# Local Development Setup
Follow these steps to get the site running on your local machine.

### Prerequisites
- Node 18 or newer 
- [PNPM installed](https://pnpm.io/installation) for package management.

We advise you to use [NVM](https://github.com/nvm-sh/nvm) to manage node versions and enable PNPM using corepack.

<details>
<summary>NVM Setup</summary>

**Change to the project directory**
```bash
cd /path/to/postal-docs
```

**Install the correct Node version**
```bash
nvm install
```

**Use the correct Node version**
```bash
nvm use
```


</details>


<details>

<summary>Enable PNPM</summary>

### Corepack

PNPM is available by default; you just need to enable corepack.

```bash
corepack enable pnpm
```

</details>




### Prepare Your System


**Change to the project directory**
```bash
cd /path/to/postal-docs
```
### Install Dependencies
Install the Node dependencies using PNPM.
```bash
pnpm install
```
### Start the Development Web Server
Start the development server on http://localhost:3000

> [!NOTE]
> If you see a warning about a "Missing `NUXT_UI_PRO_LICENSE`", you can ignore that message. This is only used in production.

```bash
pnpm dev
```

Your local development environment is now running. You can view the site at http://localhost:3000. Any changes you make to the content will be automatically reflected in the browser once you save the file.

## How to Edit the Docs Content?
This documentation uses [Nuxt Content](https://content.nuxtjs.org/) and works on the following key concepts:
- Content is stored as markdown files in the `/content` folder.
- Pages are sorted by the number at the beginning of their MD file. 
- Pages need to have a title and description as their metadata.
- You can use any Nuxt UI and [Nuxt UI Pro prose component](https://ui.nuxt.com/pro/prose/callout). 


#### Example:
```
---
title: Feature List
description: 'This is a list of features (in no particular order) of things that Postal can do.'
---

# Feature List
Here you can write your content. 
...