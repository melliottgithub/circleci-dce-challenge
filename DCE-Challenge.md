# DCE Challenge

Hi!

This repository contains a trivial application designed to give you something to work with in order to explore CircleCI.

Although this application is written in go, no ability to write go is assumed for the sake of this exercise.

Whilst working with the go toolchain at the command line is ultimately going to be necessary, those without any experience should be able to manage through some basic research alongside the pointers we've included below.

Working with new technologies is bread and butter for our team, so an ability to independently research, learn and troubleshoot is essential!

## Pre-requisites

You may find it useful to have go installed locally as you explore this application. The official docs provide instructions on running go locally: https://go.dev/doc/install

## Building

Here are some helpful pointers on how to interact with this application at the command line:

Build the application:

`go build`

Run the application:

`go run main.go`

Run the application's test suite:

`gotestsum` or `go run gotest.tools/gotestsum@latest` if `gotestsum` is not in your path.

(You can also just use `go test`, however we prefer using [gotestsum](https://github.com/gotestyourself/gotestsum))

Note that the test suite is just an example to give us something that feels real enough to run and optimise in a pipeline, rather than actually testing the application provided.