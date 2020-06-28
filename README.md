<h1 align="center">
    Jupiter GUI (EasyDMFollowers-UI)
</h1>

<p align="center">
  <a href="https://github.com/lelouch77/edmf-ui-v2/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Jupiter GUI is released under the MIT license." /></a>
  <a href="https://github.com/lelouch77/edmf-ui-v2/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>
  <a href="https://twitter.com/intent/follow?screen_name=jupiter_edmf"><img src="https://img.shields.io/twitter/follow/jupiter_edmf.svg?label=Follow%20@jupiter_edmf" alt="Follow @jupiter_edmf" /></a>
</p>

<h4 align="center">
    Contributors
</h4>
<p align="center">
  <a href="https://github.com/vbisrikkanth">
    <img src="https://github.com/vbisrikkanth.png?size=50">
  </a>
  <a href="https://github.com/lelouch77">
    <img src="https://github.com/lelouch77.png?size=50">
  </a>
  <a href="https://github.com/akshayr96">
    <img src="https://github.com/akshayr96.png?size=50">
  </a>
  <a href="https://github.com/kgkrishnavbi">
    <img src="https://github.com/kgkrishnavbi.png?size=50">
  </a>
</p>

## Contents

- [Introduction](#-introduction)
- [Background](#-background)
- [Architecture](#-architecture)
- [Features](#-features)
- [Usage](#-usage)
- [License](#-license)

## 🎉 Introduction

**Jupiter GUI (EasyDMFollowers-UI)** is a native application built using electron for Windows and MacOS. Jupiter GUI is powered by the Open-Source **Jupiter Core (EasyDMFollowers)** library which is a published NPM package. More details on Jupiter Core can be found [here](https://github.com/vbisrikkanth/easydmfollowers).

## 💡 Background

The inspiration for this library came from the bounty contest [here](https://github.com/balajis/twitter-export) hosted by [@balajiS](https://twitter.com/balajis/status/1272199847324471298?s=08). We built this library to submit our entry to the bounty contest.

## 🧱 Architecture

![Jupiter Core and UI Architecture](architecture.png?raw=true 'Jupiter Core and UI Architecture')

A decoupled architecture where we have an adapter for a given social media platform (Twitter) and connection to external databases through Sequelize ORM enables us to have flexibility with the DB engine used.

**Benefits of this Architecture:**

- Any database supported by Sequelize can be used
- Adapters for other social media platforms can be easily developed
- This library shared as an NPM package can be imported to build a native Windows/MacOS app or can be extended into a server with Express or Hapi to be further used by front-end webapps built on React, Angular, etc.

## 💎 Features

Jupiter GUI comes packed with the following features:

- [x] Fetch followers from Twitter (75000 followers/15 minutes)
- [x] Create Segments(lists) of followers based on filter criteria (Filter followers with >= 5000 followers or >= 200 tweets)
- [x] Segments can have multiple `AND` or `OR` based filters
- [x] Create (Mass DM) Campaigns on selected segments with ranking by followers count, friends count, tweets and retweets.
- [x] Set weights (Number of messages to be sent in a day) for each campaign
- [x] Schedule your campaign to send MassDMs at a specific time everyday
- [x] Send test DMs to upto 5 users from the campaign settings before the campaign kicks off
- [x] Track statistics like number of DMs sent from the app dashboard

## ⚙️ Usage

##### Requirements

Twitter API keys with access permission set to 'Read, write and Direct Messages'. You can register for a twitter developer account [here](https://developer.twitter.com/)

##### Running the App

The runtime Electron app for both Windows and MacOS can be found in the `dist` folder. Download the files and run them like any normal desktop application. No setup needed.

##### Dev Setup

Since this is an electron app, native build tools for Windows and/or MacOS and `yarn` are prerequisites for compiling and running the dev app.

1. Clone this repository into your local system
2. Perform `yarn install` in the root directory and in the `app` directory to install `electron` dependencies
3. Run `yarn dev`

## 📄 License

**Jupiter GUI** is MIT Licensed, as found in the [LICENSE](blob/master/LICENSE) file.
