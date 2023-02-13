# Epic Movie Quotes

In Epic Movie Quotes App you can find quotes of movies.

##

## Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Resources](#resources)

##

## Prerequisites

- npm@8

##

## Tech Stack

- [React@18.x](https://reactjs.org/) - front-end library
- [Nextjs@13.x](https://nextjs.org/) - front-end library
- [Tailwind Css@3.x](https://tailwindcss.com/docs/installation) - package for styling
- [React Hook Form@7.x](https://legacy.react-hook-form.com/) - package for validating forms
- [Pusher@5.x](https://pusher.com/) - pusher is a hosted API service which makes adding real-time data and functionality to web and mobile applications seamless
- [Cookies Next@2.x](https://www.npmjs.com/package/cookies-next) - package for working cookies on nextjs
- [React Infinite Scroll Component@2.x](https://www.npmjs.com/package/react-infinite-scroll-component) - library provides a component that will trigger an event when the user scrolls to the bottom of the page
- [Redux Toolkit@1.x](https://redux-toolkit.js.org/) - set of tools that helps simplify Redux development
- [Laravel Echo@1.x](https://www.npmjs.com/package/laravel-echo) - library that makes it painless to subscribe to channels and listen for events broadcast by your server-side broadcasting driver
- [Typescript@4.x](https://www.typescriptlang.org/) - typescript is a syntactic superset of JavaScript which adds static typing

##

## Getting Started

1. First of all you need to clone Epic Movie Quotes repository from github:

```bash
 git clone https://github.com/RedberryInternship/temo-jincharadze-epic-movie-quotes-front.git

```

2. Next step requires you to run composer install in order to install all the dependencies:

```bash
 npm install
```

4. Now we need to set our env file. Go to the root of your project and execute this command.

```bash
cp .env.example .env
```

5. Now you should provide .env file the necessary environment variable:

```bash
NEXT_PUBLIC_SERVER_API_URL = *******
DOMAINS = *******

NEXT_PUBLIC_PUSHER_APP_KEY=*******
NEXT_PUBLIC_PUSHER_APP_CLUSTER=*******
```

##

## Development

You can run development server by executing:

```bash
npm run dev
```

##

## Resources

- [Figma design](https://www.figma.com/file/5uMXCg3itJwpzh9cVIK3hA/Movie-Quotes-Bootcamp-assignment?node-id=5134%3A33290&t=g8Re9fGoWibBsQsL-0) - Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.
- [Semantic commits](https://redberry.gitbook.io/resources/other/git-is-semantikuri-komitebi) - Git commits were done with the following information provided in this article.
- [Assignment](https://redberry.gitbook.io/assignment-iv-movie-quotes-1/) This assignment was done with the following requirements provided in this assignment description.
