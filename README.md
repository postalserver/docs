# View the site
👉 See the live documentation site at https://docs.postalserver.io

# Postal Server Documentation
[Postal is a complete and fully featured mail server](https://postal.atech.media/) for use by websites & web servers. Think Sendgrid, Mailgun or Postmark but open source and ready for you to run on your own servers. Postal was developed by aTech Media to serve its own mail processing requirements and we have since decided that it should be released as an open source project for the community. It was originally launched by us as AppMail but renamed to Postal as part of making it open source as we felt the name was more suitable.

## The purpose of this repository
This repository hosts the documentation for Postal only. If you are looking for the Github repo for the application source code, [go to the open source repository for Postal →](https://github.com/postalserver/postal)

## Contribution Instructions
Contributions are welcome! Please open up a pull request that clearly describes your intentions.

This site runs on [Nuxt Content](https://content.nuxtjs.org/). Please review their docs for how this framework works.

# Local Development Setup
Follow these steps to get the site running on your local machine.

### Prerequisites
- Node installed with a working [NVM installation](https://github.com/nvm-sh/nvm)
- [PNPM installed](https://pnpm.io/installation) for package management

### Prepare your system
Assuming you have NVM installed, ensure you're using the project's Node version.

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

### Install dependencies
Install the Node dependencies using PNPM.
```bash
pnpm install
```
### Start the development web server
Start the development server on http://localhost:3000

> [!NOTE]
> If you see a warning about a "Missing `NUXT_UI_PRO_LICENSE`", you can ignore that message. This is only used in production.

```bash
pnpm dev
```

Your local development environment is now running. You can view the site at http://localhost:3000. Any changes you make to the content will be automatically reflected in the browser once you save the file.