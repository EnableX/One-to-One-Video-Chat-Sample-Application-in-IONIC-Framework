# 1-to-1 RTC: A Sample ionic App with EnableX Cordova Toolkit

This is a Sample ionic App demonstrates the use of EnableX (https://www.enablex.io) platform Server APIs and Cordova Toolkit.  It allows developers to ramp up on app development by hosting on their own devices. 

This App creates a virtual Room on the fly  hosted on the Enablex platform using REST calls and uses the Room credentials (i.e. Room Id) to connect to the virtual Room as a mobile client.  The same Room credentials can be shared with others to join the same virtual Room to carry out a RTC (Real Time Communication) session. 

> EnableX Developer Center: https://developer.enablex.io/

## 1. How to get started

### 1.1 Pre-Requisites

#### 1.1.1 App Id and App Key 

* Register with EnableX [https://www.enablex.io] 
* Login to the EnableX Portal
* Create your Application Key
* Get your App ID and App Key delivered to your Email


#### 1.1.2 Sample ionic Application 

* Clone or download this Repository [https://github.com/EnableX/One-to-One-Video-Chat-Sample-Application-in-IONIC-Framework] 

#### 1.1.3 Test Application Server

You need to setup an Application Server to provision Web Service API for your ionic Application to communicate enabling Video Session. 

To help you to try our ionic Application quickly, without having to setup Applciation Server, this Application is shipped pre-configured to work in a "try" mode with EnableX hosted Application Server i.e. https://demo.enablex.io. 

Our Application Server restricts a single Session Duation to 10 minutes, and allows 1 moderator and note more than 3 Participant in a Session.

Once you tried EnableX ionic Sample Application, you may need to setup your own  Application Server and verify your Application to work with your Application Server.  More on this, read Point 2 later in the Document.



#### 1.1.4 Configure Cordova Sample Client 

* Open the ionic sample App
* Go to home.page.ts and change the following:
    ``` 
    /* To try the app with Enablex hosted service you need to set the kTry = true */
        var kTry      = true;
    /*Your webservice host URL, Keet the defined host when kTry = true */
          var kBasedURL = "https://demo.enablex.io/";
    /*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/
    
    /*Use enablec portal to create your app and get these following credentials*/
          var kAppId    = "AppId";
          var kAppkey   = "AppKey";

    ``

 Note: The distributable comes with demo username and password for the Service.

#### 1.1.5 To install the EnableX Cordova plugin

* Run the following command in the root of your project:
    
    `ionic cordova plugin add enablex-cordova-plugin@latest`

#### 1.1.6 To remove Enalex Cordova plugin

* Run the the following command in the root of your project:

    `ionic cordova plugin remove enablex-cordova-plugin`

### 1.2 Walkthrough Cordova Sample Application 

#### 1.2.1 Pre-Requisites:

Make sure You have Cordova 3.5.0 or greater installed. If you haven't, take a look at the [Cordova instructions](http://cordova.apache.org/docs/en/3.5.0/guide_cli_index.md.html) Page.

1. Install [node.js](https://nodejs.org/)

2. Install ionic: `npm install -g @ionic/cli`
3. Create a project - ` ionic start ProjectName blank `

3. Install and update [Xcode](https://developer.apple.com/xcode/) (you will need a Mac)

4. Install and update [Android Studio](https://developer.android.com/studio/index.html)

#### 1.2.2 Run The Application:

##### Note: Please make sure to run the commands in the same order as below

1. Clone this repo

2. In your terminal, change your directory to the root of the sample project you want to run.

3. Run the command:

        npm install
    to install required node modules

4. Run the command:

       ionic cordova platform add ios    //to add iOS your project
        ionic cordova platform add android // to add android project


5. Run the command to enable multidex.
    ```
    ionic cordova plugin add cordova-plugin-enable-multidex 
    ```

6. Run the command
    ```
    ionic cordova run ios  // to run iOS project
    ionic cordova run android // to run Android project
    ```

### 1.3 Test

#### 1.3.1 Open the App

* Open the App in your Device. You get a form to enter Credentials i.e. Name & Room Id.
* You need to create a Room by clicking the "Create Room" button.
* Once the Room Id is created, you can use it and share with others to connect to the Virtual Room to carry out a RTC Session either as a Moderator or a Participant (Choose applicable Role in the Form).

Note: Only one user with Moderator Role allowed to connect to a Virtual Room while trying with EnableX Hosted Service. Your Own Application Server may allow upto 5 Moderators.

Note:- If you used any emulator/simulator your local stream will not create. It will create only on real device.

## 2 Setup Your Own Application Server

You may need to setup your own Application Server after you tried the Sample Application with EnableX hosted Server. We have differnt variant of Appliciation Server Sample Code, pick one in your preferred language and follow instructions given in respective README.md file.

*NodeJS: [https://github.com/EnableX/Video-Conferencing-Open-Source-Web-Application-Sample.git]
*PHP: [https://github.com/EnableX/Group-Video-Call-Conferencing-Sample-Application-in-PHP]

Note the following:

* You need to use App ID and App Key to run this Service.
* Your Cordova Client End Point needs to connect to this Service to create Virtual Room and Create Token to join session.
* Application Server is created using EnableX Server API, a Rest API Service helps in provisioning, session access and pos-session reporting.  

To know more about Server API, go to:
https://developer.enablex.io/latest/server-api/


## 3 Cordova Toolkit

This Sample Applcation uses EnableX Cordova Toolkit to communicate with EnableX Servers to initiate and manage Real Time Communications. You might need to update your Application with latest version of EnableX cordova Toolkit time as and when a new release is avaialble.   

## 4 Demo

EnableX provides hosted Vemo Application of different use-case for you to try out.

1. Try a quick Video Call: https://try.enablex.io
2. Try Apps on Demo Zone: https://portal.enablex.io/demo-zone/
3. Try Meeting & Webinar:  https://www.enablex.io/ucaas/
