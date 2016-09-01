# Crysis

Crysis is an emergency response application intended for professional settings. It streamlines the process of preparing for an emergency, and communicates crucial information to all members should it become necessary. All data is entered into the desktop application, while alerts are shared through mobile devices.

# Crysis [Mobile]

[Crysis Mobile Demo](https://youtu.be/ncHUnFmI5k0)

# Crysis [Desktop]

# Developer Documentation

Tools used:
  - React
  - React-Redux
  - Webpack
  - Babel
  - React-Router
  - React-Native
  - Node
  - Express
  - Sequelize
  - PostgreSQL
  - Bootstrap
  - Travis-Cl

# Frontend

Mobile File Structure

Crysis
├── android
│   ├── app
│   │  ├── src
│   │  │  └── main
│   │  │      ├── java
│   │  │      │   └── com
│   │  │      │       └── crysis
│   │  │      │           ├── MainActivity.java
│   │  │      │           └── MainApplication.java
│   │  │      ├── res
│   │  │      │   ├── mipmap-hdpi
│   │  │      │   │    └── ic_launcher.png
│   │  │      │   ├── mipmap-mdpi
│   │  │      │   │    └── ic_launcher.png
│   │  │      │   ├── mipmap-xhdpi
│   │  │      │   │    └── ic_launcher.png
│   │  │      │   ├── mipmap-xxhdpi
│   │  │      │   │    └── ic_launcher.png
│   │  │      │   └── values
│   │  │      │       ├── strings.xml
│   │  │      │       └── styles.xml
│   │  │      └── AndroidManifest.xml
│   │  ├── BUCK
│   │  ├── build.gradle
│   │  └── proguard-rules.pro
│   ├── gradle
│   │  └── wrapper
│   │     ├── gradle-wrapper.jar
│   │     └── gradle-wrapper.properties
│   ├── keystores
│   │  ├── BUCK
│   │  └── debug.keystores.properties
│   ├── build.gradle
│   ├──  gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── ios
│   ├── crysis
│   │  ├── Base.lproj
│   │  │   └── LaunchScreen.xib
│   │  ├── Images.scassets
│   │  │   └── Applcon.appiconset
│   │  │      └── Contents.json
│   │  ├── AppDelegate.h
│   │  ├── AppDelegate.m
│   │  ├── Info.plist
│   │  └── main.m
│   ├── crysis.xcodeproj
│   │  ├── xcshareddata
│   │  │   └── xcschemes
│   │  │      └── crysis.xcscheme
│   │  └── project.pbxproj
│   └── crysisTests
│      ├── crysisTests.m
│      └── Info.plist
└── src
    ├── Components
    │  ├── Attendance.js
    │  ├── Checkin.js
    │  ├── EmployeeEntry.js
    │  ├── Home.js
    │  ├── Loading.js
    │  └── Login.js
    ├── helpers
    │  ├── helperAPI.js
    │  ├── helperLocalStorage.js
    │  ├── helperPushNotification.js
    │  └── url.js
    └── red.png


# Backend

Server
├── controllers
│   ├── adminLogin.controller.js
│   ├── alert.controller.js
│   ├── createAdmin.controller.js
│   ├── createOrganization.controller.js
│   ├── deviceToken.controller.js
│   ├── emergency.controller.js
│   ├── indexAPI.js
│   ├── mobileLogin.controller.js
│   ├── organization.controller.js
│   ├── statusUpdate.controller.js
│   ├── user.controller.js
│   └── webLogin.controller.js
├── db
│   ├── db.js
│   └── dummyData.js
├── env
│    └── example.config.js
├── keys
│   ├── dummy.cert.pem
│   └── dummy.key.pem
├── router
│   ├── router.js
│   └── testRouter.js
├── utils
│   ├── applepushHelper.js
│   ├── dbhHelper.js
│   ├── fnhHelper.js
│   └── middleware.js
└── server.js

REST/CRUD Outline

GET
────
  - /alert -- retrieves emergency status
  - /emergency -- retrieves all information about specific emergency
  - /organization -- retrieves all information about specific organization
  - /statusUpdate -- retrieves an employee's status during an emergency
  - /user -- retrieves all information regarding specific employee

POST
────
  - /adminLogin -- authenticates administrator login information
  - /createAdmin -- inputs new administrator into database
  - /createOrganization -- inputs new organization into database
  - /emergency -- inputs new emergency information into database
  - /mobileLogin -- authenticates employee login information on mobile device
  - /user -- inputs new employee information into database

PUT
────
  - /alert -- triggers emergency and sends push notifications
  - /deviceToken -- updates user information in database with device token information
  - /emergency -- updates information in database related to specific emergency
  - /organization -- updates information in database related to specific organization
  - /statusUpdate -- updates employee's status during emergency
  - /user -- updates employee information in database

DELETE
────
  - /emergency -- deletes specific emergency from database
  - /organization -- deletes specific organization from database
  - /user -- deletes specific employee from database

# Database

Crysis uses a PostgreSQL database with three tables (Employee, Organization, and Emergency). Every employee belongs to one organization, and every organization is connected to specific emergencies. Interfacing with the Node.js/Express server is done via Sequelize.
