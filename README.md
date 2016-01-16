# Idle (work in progress...)

 - Mobile game written in react.js and es2015
 - Strategic / simulation game

### Current status:

- Basic map editor implemented

## Requirements

Install `bower`, `gulp`, `phonegap`:
```
npm install -g bower gulp phonegap
```

## Prepare

Install the modules:
```
npm install
```
```
bower install
```
Create the app boilerplate:
```
phongap create dist
```
    
## Preview

Preview the app on Google Chrome (require the extension 'Ripple Emulator' installed):
```
gulp
```

## Build

Prepare the App:
```
gulp build
```
Login to build.phonegap.com with your Adobe credentials:
```
phonegap remote login
```
Build the app for the Android platform:
```
phonegap remote build android
 ```
Download the .apk file from build.phonegap.com

## Phonegap Reference

| Action | Command |
|--------|---------|
| create app | phonegap create dist com.example.test test |
| install plugins | config.xml |
| login | phonegap remote login |
| build | phonegap remote build android |