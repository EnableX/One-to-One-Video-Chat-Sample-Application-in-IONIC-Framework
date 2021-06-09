import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { from } from 'rxjs';
import { NavController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';



/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry      = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
  var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/

/*Use enablec portal to create your app and get these following credentials*/
    var kAppId    = "App_ID";
    var kAppkey   = "App_key";

 @Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
  })
  // private navCont : NavController
export class HomePage  {
  userName: string = "";
  roomID : string = "";
  constructor(public navCont : NavController , public httpClient : HttpClient) {}
  createRoom(){
   /* let navigationExtras: NavigationExtras = {
      queryParams: {
        token: "token",
        name : "this.userName",
        role : "participant",
        user_ref : "user_ref"
      }
  };
  this.navCont.navigateForward(['confrence'],navigationExtras)*/
    
    if(this.userName.length == 0){
      alert ("Kindly Enter Your name");
      return;
    }
    var hedare = (kTry) ? { "x-app-id" : kAppId , "x-app-key" : kAppkey, "Accept" : "application/json","Content-Type" :"application/json"} : {"Accept" : "application/json","Content-Type" :"application/json"};
     let url = kBasedURL+"createRoom";
     console.log("Url Faired" + url);
     this.httpClient.post(url,{}, {headers: hedare}
    ).subscribe(data =>{
       let room = data["room"];
        let room_ID = room["room_id"];
        this.roomID = room_ID;
     }, error => {
       console.log("Hello service failed");
       console.log(error);
     });
  }
  joinRoom(){
    if(this.roomID.length == 0){
      alert ("Kindly Enter Room ID");
      return;
    }
    var loginString = {"name": this.userName, "role": "participant", "user_ref": "2236", "roomId": this.roomID };
    var hedare = (kTry) ? { "x-app-id" : kAppId , "x-app-key" : kAppkey, "Accept" : "application/json","Content-Type" :"application/json"} : {"Accept" : "application/json","Content-Type" :"application/json"};
     let url = kBasedURL+"createToken";
     console.log("Url Faired" + url);
     this.httpClient.post(url,loginString, {headers: hedare}
    ).subscribe(data =>{
      console.log("Hello service done" + data["token"]);
       let navigationExtras: NavigationExtras = {
        queryParams: {
          token: data["token"],
          name : this.userName,
          role : "participant",
          user_ref : "user_ref"
        }
    };
    this.navCont.navigateForward(['confrence'],navigationExtras)
     }, error => {
       console.log("Hello service failed");
       console.log(error);
     });
    console.log("ClickEvent Join event");
  }
}
