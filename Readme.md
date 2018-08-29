Subschema Devel
===
[![Build Status](https://travis-ci.org/subschema/subschema-devel.svg?branch=master)](https://travis-ci.org/subschema/subschema-devel)

This project is here to make developing subschema itself more convenient.   

While most of the time, I write tests in subschema/test, to develop new
functionality it is often useful to test things in the demo. 

In this case you should use this.

I try to make writing subschema apps easy, I haven't tried so hard to make
writing subschema easy, this project is an attempt to fix this.

[demo](https://subschema.github.io)

# Requirements
*NPM 3.10.x* - There are known issues with npm2 and issues with npm 5.
```sh
  $ npm install yarn@latest -g
```
* node > 6 - Seems to be fine on node 6 and up.

# Installation
```sh
  $ git clone  git@github.com:subschema/subschema-devel.git
  $ yarn install
```
# Publishing
```sh
 $ ./node_modules/.bin/lerna --force-publish=*
 $ yarn run demo
```
