
# [ThunderFlurry](http://github.com/thunderflurry/thunderflurry) ![Github version](https://img.shields.io/github/release/thunderflurry/thunderflurry.svg?label=Current%20Version)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSQJ6ULDHJFXG "Donate once-off to this project using Paypal")
 [![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/checkouts/81a12ff3dc09c93289315684c9e80825 "Donate once-off to this project using BitCoin")

ThunderFlurry is a nodejs based web server providing management of motion picture productions. It is currently under development and has not been released.

### Collaborate With Us

We use Slack for communications. Your input on this project is extremely valuable to us, so please join the conversation today!

[![Slack Invites](https://img.shields.io/badge/%23Slack-Collaborate%20With%20Us-blue.svg)](https://thunderflurry.signup.team/)
[![Join the chat at https://gitter.im/ThunderFlurry/thunderflurry](https://badges.gitter.im/ThunderFlurry/thunderflurry.svg)](https://gitter.im/ThunderFlurry/thunderflurry?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![first-timers-only](http://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](http://www.firsttimersonly.com/)

### Browser Support

We support most browsers, which is the point of using our module in the first place :-)

* Internet Explorer 9+
* Edge
* Firefox 0.8+
* Chrome 1+
* Safari 3+
* Opera 8+ (including Opera Next)


### Building the code

#### Required Tools
- Node
    - Development requires Node 6.9+
    - Building is tested with Node 6.9 on Windows, Mac OS, and Ubuntu
    - Compiled Server requires Node 6.9+
    - Compiled Server is tested with:
        - Node 6.9 on Windows, Mac OS, Ubuntu
        - Node 6.9 on Amazon EBS with a EC2 micro installation
- NPM (prefer 3.10.8+)
- Grunt

This list is currently in flux as the foundation is released.

#### Optional Tools
- [WebStorm](http://jetbrains.com/webstorm) (Project Editor)

check out the source code
``` bash

#create your project directory
$ mkdir thunderflurry

#change to the directory you made
$ cd thunderflurry

#clone this repository
$ git clone https://github.com/thunderflurry/thunderflurry.git .

# BUILD using npm and grunt:
$ npm install

# If you want to send us changes, you should fork
# the project into your own account first, and use
# that URL to clone it.

# If you fork it later you can just change the origin by:

# move the old origin out of the way. You could delete it if you want.
$ git remote rename origin upstream

# add your repo url as the origin:
# e.g. git@github.com:victoriafrench/thunderflurry.git
$ git remote add origin <your-repo-url>

# to run the project from npm:
$ npm run

# open your web browser and visit http://localhost:3000

```

### License

ThunderFlurry is licensed under the [Apache 2.0 license](./LICENSE.md). Copyright and related rights for sample code as defined in the project's LICENSE.md file are waived via [CC0](https://tldrlegal.com/l/cc0-1.0).

### Project Dashboard [![Build Status](https://travis-ci.org/ThunderFlurry/thunderflurry.svg)](https://travis-ci.org/ThunderFlurry/thunderflurry) [![Build status](https://ci.appveyor.com/api/projects/status/1qntrvsgmtls9sc8?svg=true)](https://ci.appveyor.com/project/victoriafrench/thunderflurry)

You can see issues, pull requests, backlog items, etc. in the [OneGet Dashboard](https://waffle.io/thunderflurry/thunderflurry)

| Stage | Stats |
| ------- | ---------------------------|
|Pending|[![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=triage&title=Triage)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=Bug&title=Bug)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=Discussion&title=Discussion)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=enhancement&title=New%20Feature)](http://waffle.io/thunderflurry/thunderflurry) |
|Development|[![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=ready&title=Ready%20For%20Dev)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/thunderflurry/thunderflurry)|
|QA|[![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=qa-ready&title=QA%20Ready)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=testing&title=QA%20Testing)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=pull-failed&title=Failed%20QA)](http://waffle.io/thunderflurry/thunderflurry) [![Stories in Progress](https://badge.waffle.io/thunderflurry/thunderflurry.svg?label=pull-ready&title=Passed%20QA)](http://waffle.io/thunderflurry/thunderflurry)|

Throughput Graph

[![Throughput Graph](https://graphs.waffle.io/thunderflurry/thunderflurry/throughput.svg)](https://waffle.io/thunderflurry/thunderflurry/metrics)


#### Branches

There are currently three branches in the git repository:

| Branch/Tag | Purpose |
| ------- | ---------------------------|
|`master`|  The `master` branch is where the daily builds are made from.  |
|`greenkeeper-*`| Automated branch created by [greenkeeper](http://greenkeeper.io) to tell us to update a dependency in the project |
|`qa`| Branch specific to qa testing. |
|`gh-pages`| Git hub pages storage. |
|`cloud`| Branch of what is running in the cloud which may have modifications not part of the project. |
|`spike/*`| Experiments that are being run. |

### Contributing [![CLA assistant](https://cla-assistant.io/readme/badge/ThunderFlurry/thunderflurry)](https://cla-assistant.io/ThunderFlurry/thunderflurry)

To push contributions to us, we require that all contributors [sign our Contributor License Agreement (CLA)](https://cla-assistant.io/ThunderFlurry/thunderflurry). All pull-requests are checked against the signature database before being accepted.

The following flow is used to contribute to this project. No person has direct access to push code.

Your first step is to fork the code to your github account. Then clone your fork.

``` bash

# create your project directory
$ mkdir thunderflurry

# change to the directory you made
$ cd thunderflurry

# clone this repository
$ git clone https://github.com/<YOUR GITHUB NAME>/thunderflurry.git .

# add us as the upstream remote server
$ git remote add upstream https://github.com/thunderflurry/thunderflurry.git

# try to never make changes in your master, so lets create a branch to work in
$ git checkout -b <working branch name>

# now make the changes you want
# when you are ready to send them back flatten your checkins to a new branch for us
# make sure we are on the master branch
$ git checkout master

# let's make sure we have the latest code updates
$ git merge upstream/master

# we are going to create a pull request branch from this updated code
$ git checkout -b <push branch name>

# now we pull your new code in as a single commit
$ git merge --squash <working branch name>

# if there are errors they need to be fixed and checked in.
# make sure everything compiles and runs
$ npm install
$ npm build
$ npm test

# if all works then lets push the code to github
$ git push origin <push branch name>

# visit your github account fork and there will be a green button to make a pull request.
# click it and your done!

# to remove the branches
$ git checkout master
$ git branch -D <working branch name>
$ git branch -D <push branch name>

# once we have accepted your pr you can update your system.
$ git checkout master
$ git merge upstream/master
$ git push origin master

# now your changes have come back merged with ours.

```


### Team Members

| Contributor | Details |
| ------- | ---------------------------|
|[![photo](https://avatars3.githubusercontent.com/u/763805?v=3&s=24) @victoriafrench](https://github.com/victoriafrench)|  Program Manager on ThunderFlurry and original developer/creator. |

### Special Thanks

We would like to give a shout-out to **JetBrains** for providing [WebStorm](https://www.jetbrains.com/webstorm/) licenses to our project! Big Huge Hugs!

[BrowserStack](http://browserstack.com) had provided us with a valuable testing account for this project. We greatly appreciate their support and hope you check them out!

[![WebStorm](https://thunderflurry.github.io/images/sponsors/webstorm.png)](https://twitter.com/WebStormIDE)
[![BrowserStack](https://thunderflurry.github.io/images/sponsors/browserstack.png)](https://twitter.com/browserstack)

### Platinum Sponsors

[![Cinecove](https://thunderflurry.github.io/images/sponsors/cinecove.png)](https://twitter.com/cinecove)

### Gold Sponsors

[![Devil Bunny Productions](https://thunderflurry.github.io/images/sponsors/devilbunnyproductions.png)](https://twitter.com/devilbunnyfilms)
[![White Mouse Productions](https://thunderflurry.github.io/images/sponsors/whitemousepictures.jpeg)](https://twitter.com/whitemousefilms)


### Bronze Sponsors

[![Rabid Rabbit Entertainment](https://thunderflurry.github.io/images/sponsors/rabidrabbit.jpg)](https://www.facebook.com/RabidRabbitEntertainment/)


### Silver Sponsors

[![Fluffy D. Bunny](https://thunderflurry.github.io/images/sponsors/fluffydbunny.png)](https://twitter.com/fluffydbunny)
[![Bill McCarthy](https://thunderflurry.github.io/images/sponsors/billmccarthy.png)](https://twitter.com/Dig_Bill)


[![Analytics](https://ga-beacon.appspot.com/UA-75301203-2/thunderflurry/readme.md)](https://github.com/igrigorik/ga-beacon)


