#import "EnxCordovaPlugin.h"

#import <Cordova/CDVAvailability.h>

@implementation EnxCordovaPlugin

    EnxRtc *mEnxRtc;
    EnxRoom *mEnxRoom;
    EnxStream *mLocalStream;
    EnxPlayerView *mlocalView;
    NSMutableDictionary *eventListional;
    float scale;
    UIView * parentView;
    UIView *mRemoteView;
    UIView *mOptionView;
    EnxStream *mOptionStream;
    EnxPlayerView *mOptionPlayer;

    CGFloat firstX;
    CGFloat firstY;
    NSString *roomMode;
- (void)pluginInitialize {
    [self getPrivacyAccess];
    if(mEnxRtc == nil){
       mEnxRtc = [[EnxRtc alloc]init];
         parentView = [self webView];
    }
    if(eventListional == nil){
        eventListional = [[NSMutableDictionary alloc]initWithCapacity:0];
    }
}
/*
  Check for Camera and mic premission.
*/
-(void)getPrivacyAccess{
    AVAuthorizationStatus vStatus = [AVCaptureDevice authorizationStatusForMediaType:AVMediaTypeVideo];
    if(vStatus == AVAuthorizationStatusNotDetermined){
        [AVCaptureDevice requestAccessForMediaType:AVMediaTypeVideo completionHandler:^(BOOL granted) {
        }];
    }
    AVAuthorizationStatus aStatus = [AVCaptureDevice authorizationStatusForMediaType:AVMediaTypeAudio];
    if(aStatus == AVAuthorizationStatusNotDetermined){
        [AVCaptureDevice requestAccessForMediaType:AVMediaTypeAudio completionHandler:^(BOOL granted) {
        }];
    }
}
/*
  Domy event
*/
-(void)getPrint:(CDVInvokedUrlCommand*)command{
  NSLog(@"my print Value");
}
//Register Event Listerenr
-(void)onRoomConnected:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRoomConnected"];
}
-(void)onRoomDisConnected:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRoomDisConnected"];
}
-(void)onEventError:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onEventError"];
}
-(void)onPublishStream:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onPublishStream"];
}
-(void)onAddedStream:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAddedStream"];
}
-(void)onSubscribeStream:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onSubscribeStream"];
}
-(void)onAudioEvent:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAudioEvent"];
}
-(void)onVideoEvent:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onVideoEvent"];
}
-(void)onNotifyDeviceUpdate:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onNotifyDeviceUpdate"];
}
-(void)onUserConnected:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onUserConnected"];
}
-(void)onUserDisConnected:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onUserDisConnected"];
}
-(void)onRoomError:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRoomError"];
}
-(void)onEventInfo:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onEventInfo"];
}
-(void)onGetTalkerCount:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onGetTalkerCount"];
}
-(void)onMaxTalkerCount:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onMaxTalkerCount"];
}
-(void)onSetTalkerCount:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onSetTalkerCount"];
}
-(void)onAckLockRoom:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAckLockRoom"];
}
-(void)onAckUnLockRoom:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAckUnLockRoom"];
}
-(void)onLockedRoom:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onLockedRoom"];
}
-(void)onUnLockedRoom:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onUnLockedRoom"];
}
-(void)onAckDropUser:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onAckDropUser"];
}
-(void)onAckDestroy:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAckDestroy"];
}
-(void)onLogUploaded:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onLogUploaded"];
}
-(void)onHardMutedAudio:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onHardMutedAudio"];
}
-(void)onHardUnMutedAudio:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onHardUnMutedAudio"];
}
-(void)onReceivedHardMuteAudio:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedHardMuteAudio"];
}
-(void)onReceivedHardUnMuteAudio:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedHardUnMuteAudio"];
}
-(void)onHardMutedVideo:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onHardMutedVideo"];
}
-(void)onHardUnMutedVideo:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onHardUnMutedVideo"];
}
-(void)onReceivedHardMuteVideo:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedHardMuteVideo"];
}
-(void)onReceivedHardUnMuteVideo:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedHardUnMuteVideo"];
}
-(void)onHardMuted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onHardMuted"];
}
-(void)onReceivedHardMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedHardMute"];
}
-(void)onHardUnMuted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onHardUnMuted"];
}
-(void)onReceivedHardUnMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedHardUnMute"];
}
-(void)onAcknowledgedSendData:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAcknowledgedSendData"];
}
-(void)onMessageReceived:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onMessageReceived"];
}
-(void)onSwitchedUserRole:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onSwitchedUserRole"];
}
-(void)onUserRoleChanged:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onUserRoleChanged"];
}
-(void)onConferencessExtended:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onConferencessExtended"];
}
-(void)onConferenceRemainingDuration:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onConferenceRemainingDuration"];
}
-(void)onBandWidthUpdated:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onBandWidthUpdated"];
}
-(void)onShareStreamEvent:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onShareStreamEvent"];
}
-(void)onCanvasStreamEvent:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onCanvasStreamEvent"];
}
-(void)onConnectionInterrupted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onConnectionInterrupted"];
}
-(void)onConnectionLost:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onConnectionLost"];
}
-(void)onOutBoundCallInitiated:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onOutBoundCallInitiated"];
}
-(void)onDialStateEvents:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onDialStateEvents"];
}
-(void)onPlayerStats:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onPlayerStats"];
}
-(void)onReconnect:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onReconnect"];
}
-(void)onUserReconnectSuccess:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onUserReconnectSuccess"];
}
-(void)onStartRecordingEvent:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onStartRecordingEvent"];
}
-(void)onRoomRecordingOn:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRoomRecordingOn"];
}
-(void)onStopRecordingEvent:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onStopRecordingEvent"];
}
-(void)onRoomRecordingOff:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRoomRecordingOff"];
}
-(void)onAcknowledgeStats:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onAcknowledgeStats"];
}
-(void)onReceivedStats:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReceivedStats"];
}
-(void)onRemoteStreamAudioMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRemoteStreamAudioMute"];
}
-(void)onAdvancedOptionsUpdate:(CDVInvokedUrlCommand*)command{
     [eventListional setObject:command.callbackId forKey:@"onAdvancedOptionsUpdate"];
}
-(void)onGetAdvancedOptions:(CDVInvokedUrlCommand*)command{
     [eventListional setObject:command.callbackId forKey:@"onGetAdvancedOptions"];
}
//New
-(void)onFileUploadStarted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileUploadStarted"];
}
-(void)onFileAvailable:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileAvailable"];
}
-(void)onInitFileUpload:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onInitFileUpload"];
}
-(void)onFileUploaded:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileUploaded"];
}
-(void)onFileUploadCancelled:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileUploadCancelled"];
}
-(void)onFileUploadFailed:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileUploadFailed"];
}
-(void)onFileDownloaded:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileDownloaded"];
}
-(void)onFileDownloadCancelled:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileDownloadCancelled"];
}
-(void)onFileDownloadFailed:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFileDownloadFailed"];
}
-(void)onInitFileDownload:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onInitFileDownload"];
}
-(void)onScreenSharedStarted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onScreenSharedStarted"];
}
-(void)onScreenSharedStopped:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onScreenSharedStopped"];
}
-(void)onCanvasStarted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onCanvasStarted"];
}
-(void)onCanvasStopped:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onCanvasStopped"];
}
-(void)onAnnotationStarted:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAnnotationStarted"];
}
-(void)onStartAnnotationAck:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onStartAnnotationAck"];
}
-(void)onAnnotationStopped:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onAnnotationStopped"];
}
-(void)onStoppedAnnotationAck:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onStoppedAnnotationAck"];
}
-(void)onRemoteStreamAudioUnMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRemoteStreamAudioUnMute"];
}
-(void)onRemoteStreamVideoMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRemoteStreamVideoMute"];
}
-(void)onRemoteStreamVideoUnMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onRemoteStreamVideoUnMute"];
}
-(void)OnCapturedView:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"OnCapturedView"];
}
-(void)onUserDataReceived:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onUserDataReceived"];
}
#pragma -mark CC Callback
-(void)onFloorRequested:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFloorRequested"];
}
-(void)onFloorRequestReceived:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFloorRequestReceived"];
}
-(void)onProcessFloorRequested:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onProcessFloorRequested"];
}
-(void)onGrantedFloorRequest:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onGrantedFloorRequest"];
}
-(void)onDeniedFloorRequest:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onDeniedFloorRequest"];
}
-(void)onReleasedFloorRequest:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onReleasedFloorRequest"];
}
-(void)onFloorCancelled:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onFloorCancelled"];
}
-(void)onFloorFinished:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onFloorFinished"];
}
-(void)onCancelledFloorRequest:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"onCancelledFloorRequest"];
}
-(void)onFinishedFloorRequest:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"onFinishedFloorRequest"];
}

//Check For obj Refrence
-(void)checkForObjectRef{
    if(mEnxRtc == nil){
       mEnxRtc = [[EnxRtc alloc]init];
        parentView = [self webView];
    }
    if(eventListional == nil){
        eventListional = [[NSMutableDictionary alloc]initWithCapacity:0];
    }
}
///Join Room Events
    -(void)joinRoom:(CDVInvokedUrlCommand*)command{
        [self checkForObjectRef];
        NSDictionary* phrase = [command.arguments objectAtIndex:0];
        NSMutableDictionary *roomDict = [phrase[@"roomInfo"] mutableCopy];
        [roomDict setObject:@"list" forKey:@"activeviews"];
         mLocalStream = [mEnxRtc joinRoom:phrase[@"token"] delegate:self PublishStreamInfo:phrase[@"publishStreamInfo"] roomInfo:roomDict advanceOptions:nil];
        mLocalStream.delegate = self;
    }

//Create LocalView
-(void)initLocalView:(CDVInvokedUrlCommand*)command{
    NSLog(@"Init local View Called");
    [eventListional setObject:command.callbackId forKey:@"initLocalView"];
    if(mLocalStream != nil){
        @try {
            NSLog(@"ParentView %@",parentView);
             NSDictionary* phrase = [command.arguments objectAtIndex:0];
            if(phrase[@"localviewOptions"] != nil){
                if(mLocalStream.enxPlayerView == nil){
                    mlocalView = [[EnxPlayerView alloc]initLocalView:CGRectZero];
                    [mLocalStream attachRenderer:mlocalView];
                    [parentView addSubview:mlocalView];
                    [parentView bringSubviewToFront:mlocalView];
                    [self addConstantForlocalView:mlocalView withDetails:phrase[@"localviewOptions"]];
                    [self triggerSuccussJSEvent:@"initLocalView" actionName:@"initLocalView" requestData:@"Success"];
                }
            }
        }@catch (NSException *exception) {
            NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
        }
    }
}
//Create RemoteView
-(void)initRemoteView:(CDVInvokedUrlCommand*)command{
    NSLog(@"Init Remote View Called");
    [eventListional setObject:command.callbackId forKey:@"initRemoteView"];
    @try {
        NSLog(@"ParentView %@",parentView);
         NSDictionary* phrase = [command.arguments objectAtIndex:0];
        if(phrase[@"remoteviewOptions"] != nil){
            if(mRemoteView == nil){
                mRemoteView =[[UIView alloc]initWithFrame:CGRectZero];
                [parentView addSubview:mRemoteView];
                [mRemoteView setBackgroundColor:[UIColor blackColor]];
                [parentView bringSubviewToFront:mRemoteView];
                [parentView bringSubviewToFront:mlocalView];
                [self addConstantForRemoteView:phrase[@"remoteviewOptions"]];
                [self triggerSuccussJSEvent:@"initRemoteView" actionName:@"initRemoteView" requestData:@"Success"];
            }
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/* Add constant For loacal view */
-(void)addConstantForlocalView:(EnxPlayerView*)view withDetails:(NSDictionary*)details{
    view.translatesAutoresizingMaskIntoConstraints = false;
                int height = 0;
                int width = 0;
               NSString *position = @"right";
                int topMargin = 20;
                int leftMargin = 20;
                int rightMargin = -20;
                int bottomMargin = -20;
               if(details[@"height"] != nil){
                   height = [details[@"height"] intValue];
               }
               if(details[@"width"] != nil){
                   width = [details[@"width"] intValue];
               }
               if(height == 0){
                   height = 130;
               }
               if(width == 0){
                   width = 100;
               }
                if(details[@"margin_top"] != nil){
                    topMargin = [details[@"margin_top"] intValue];
                }
                if(details[@"margin_left"] != nil){
                    leftMargin = [details[@"margin_left"] intValue];
                }
                if(details[@"margin_right"] != nil){
                    rightMargin = [details[@"margin_right"] intValue];
                }
                if(details[@"margin_bottom"] != nil){
                    bottomMargin = [details[@"margin_bottom"] intValue];
                }
               if(details[@"position"] != nil){
                   position = details[@"position"];
               }
            [[view.heightAnchor constraintEqualToConstant:height] setActive:true];
            [[view.widthAnchor constraintEqualToConstant:width] setActive:true];
            if([position isEqualToString:@"right"] ){
                [view.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
                [view.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
            }
            else if([position isEqualToString:@"left"] ){
                [view.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
                [view.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
            }
            else if([position isEqualToString:@"top"] ){
                [view.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
                [view.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
            }
            else if([position isEqualToString:@"bottom"] ){
                [view.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
                [view.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
            }
            else if([position isEqualToString:@"center"] ){
                [view.centerXAnchor constraintEqualToAnchor:view.superview.centerXAnchor].active = YES;
                [view.centerYAnchor constraintEqualToAnchor:view.superview.centerYAnchor].active = YES;
                
            }
        }
/*
   Add constant For Remote view
*/
-(void)addConstantForRemoteView:(NSDictionary*)details{
    mRemoteView.translatesAutoresizingMaskIntoConstraints = false;
                int height = 0;
                int width = 0;
               NSString *position = @"right";
                int topMargin = 0;
                int leftMargin = 0;
                int rightMargin = 0;
                int bottomMargin = 0;
               if(details[@"height"] != nil){
                   height = [details[@"height"] intValue];
               }
               if(details[@"width"] != nil){
                   width = [details[@"width"] intValue];
               }
                if(details[@"margin_top"] != nil){
                    topMargin = [details[@"margin_top"] intValue];
                }
                if(details[@"margin_left"] != nil){
                    leftMargin = [details[@"margin_left"] intValue];
                }
                if(details[@"margin_right"] != nil){
                    rightMargin = [details[@"margin_right"] intValue];
                }
                if(details[@"margin_bottom"] != nil){
                    bottomMargin = [details[@"margin_bottom"] intValue];
                }
               if(details[@"position"] != nil){
                   position = details[@"position"];
               }
            if(height == 0 || height >= parentView.bounds.size.height){
                    height = parentView.bounds.size.height;
                    height = height - (topMargin + bottomMargin);
            }
            if(width == 0 || width >= parentView.bounds.size.width){
                width = parentView.bounds.size.width;
                width = width - (leftMargin +rightMargin);
            }
   // [[mRemoteView.heightAnchor constraintEqualToConstant:height] setActive:true];
    //[[mRemoteView.widthAnchor constraintEqualToConstant:width] setActive:true];
    if([position isEqualToString:@"right"] ){
              [mRemoteView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              [mRemoteView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
                if(leftMargin == 0){
                    leftMargin = parentView.bounds.size.width - width;
                }
            [mRemoteView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
            if(bottomMargin == 0){
                bottomMargin = parentView.bounds.size.height - height;
            }
        [mRemoteView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
          }
          else if([position isEqualToString:@"left"] ){
              [mRemoteView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              [mRemoteView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
              if(bottomMargin == 0){
                  bottomMargin = parentView.bounds.size.height - height;
              }
              [mRemoteView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
              if(rightMargin == 0){
                  rightMargin = parentView.bounds.size.width - width;
              }
              [mRemoteView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
          }
          else if([position isEqualToString:@"top"] ){
              [mRemoteView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              [mRemoteView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
              if(bottomMargin == 0){
                  bottomMargin = parentView.bounds.size.height - height;
              }
              [mRemoteView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
              if(leftMargin == 0){
                  leftMargin = parentView.bounds.size.width - width;
              }
              [mRemoteView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
          }
          else if([position isEqualToString:@"bottom"] ){
              [mRemoteView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
              [mRemoteView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
              if(topMargin == 0){
                  topMargin = parentView.bounds.size.height - height;
              }
              [mRemoteView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              if(leftMargin == 0){
                 leftMargin = parentView.bounds.size.width - width;
              }
               [mRemoteView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
          }
}

// -(void)resizeViewRemoteConstant:(UIView*)view{
//     for(UIView *subview in view.subviews){
//         if([subview isKindOfClass:[UILabel class]]){
//             [self removeOldConstant:subview];
//             subview.translatesAutoresizingMaskIntoConstraints = false;
//             [subview.centerXAnchor constraintEqualToAnchor:subview.superview.centerXAnchor].active = YES;
//             [subview.centerYAnchor constraintEqualToAnchor:subview.superview.centerYAnchor].active = YES;
//             [view setNeedsLayout];
//         }
//         if([subview isKindOfClass:[UICollectionView class]]){
//             [self removeOldConstant:subview];
//         }
//     }
// }
// -(void)removeOldConstant:(UIView*)view
// {
//     [view.superview.constraints enumerateObjectsUsingBlock:^(__kindof NSLayoutConstraint * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
//         NSLayoutConstraint *constraint = (NSLayoutConstraint *)obj;
//         if (constraint.firstItem == view || constraint.secondItem == view) {
//                 [view.superview removeConstraint:constraint];
//         }
//     }];
//     [view removeConstraints:view.constraints];
// }
    /*Disconnect Method*/
-(void)disconnect:(CDVInvokedUrlCommand*)command{
    if(mEnxRoom != nil){
        [mEnxRoom disconnect];
    }
    else{
        
    }
}
/*Mute/unMute self Audio*/
-(void)muteSelfAudio:(CDVInvokedUrlCommand*)command{
    NSDictionary* argu = [command.arguments objectAtIndex:0];
        @try {
              BOOL flag = [argu[@"muteAudio"] boolValue];
                if(mLocalStream != nil){
                    [mLocalStream muteSelfAudio:flag];
                }
                else{
                [self reportErrorToJS:@"Object is not initialize : LocalStream"];
                }
        }@catch (NSException *exception) {
            NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
        }
}
/*Mute/unMute self Vidoe*/
-(void)muteSelfVideo:(CDVInvokedUrlCommand*)command{
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
          BOOL flag = [argu[@"muteVideo"] boolValue];
            if(mLocalStream != nil){
                [mLocalStream muteSelfVideo:flag];
            }
            else{
            [self reportErrorToJS:@"Object is not initialize : LocalStream"];
            }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/* Switch Camera*/
-(void)switchCamera:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"switchCamera"];
    if(mLocalStream != nil){
        [mLocalStream switchCamera];
        [self triggerSuccussJSEvent:@"switchCamera" actionName:@"switchCamera" requestData:@"Success"];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : LocalStream"];
    }
}
/*Hide SelfView*/
-(void)hideSelfView:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"hideSelfView"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
            BOOL flag = [argu[@"hide"] boolValue];
            mlocalView.hidden = flag;
            [self triggerSuccussJSEvent:@"hideSelfView" actionName:@"hideSelfView" requestData:@"Success"];
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Resize Local View*/
-(void)resizeLocalView:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"resizeLocalView"];
    @try {
         NSDictionary* argu = [command.arguments objectAtIndex:0];
        if(argu[@"resizeOptions"] != nil){
            [self removeAllConstanceFromLocal:argu[@"resizeOptions"]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Resize Remote View*/
-(void)resizeRemoteView:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"resizeRemoteView"];
    @try {
         NSDictionary* argu = [command.arguments objectAtIndex:0];
        if(argu[@"resizeOptions"] != nil){
            [self removeAllConstanceFromRemote:argu[@"resizeOptions"]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Remove Existing Constance from LocalPlayer*/
-(void)removeAllConstanceFromLocal:(NSDictionary*)value{
    [mlocalView.superview.constraints enumerateObjectsUsingBlock:^(__kindof NSLayoutConstraint * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSLayoutConstraint *constraint = (NSLayoutConstraint *)obj;
        if (constraint.firstItem == mlocalView || constraint.secondItem == mlocalView) {
            [mlocalView.superview removeConstraint:constraint];
        }
    }];
    [mlocalView removeConstraints:mlocalView.constraints];
    [self addConstantForlocalView:mlocalView withDetails:value];
    [self triggerSuccussJSEvent:@"resizeLocalView" actionName:@"resizeLocalView" requestData:@"Success"];
}
/*Remove Existing Constance from RemoteView*/
-(void)removeAllConstanceFromRemote:(NSDictionary*)value{
    [mRemoteView.superview.constraints enumerateObjectsUsingBlock:^(__kindof NSLayoutConstraint * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSLayoutConstraint *constraint = (NSLayoutConstraint *)obj;
        if (constraint.firstItem == mRemoteView || constraint.secondItem == mRemoteView) {
            [mRemoteView.superview removeConstraint:constraint];
        }
    }];
    [mRemoteView removeConstraints:mRemoteView.constraints];
    [self addConstantForRemoteView:value];
    for(UIView *view in mRemoteView.subviews){
        if(view != nil && view.tag == 10100000112){
            [view removeFromSuperview];
            [mRemoteView addSubview:view];
            [self setLayoutConstant:view];
            break;
        }
    }
    [mEnxRoom adjustLayout];
    [self triggerSuccussJSEvent:@"resizeLocalView" actionName:@"resizeLocalView" requestData:@"Success"];
}
/*Switch Media Device*/
-(void)switchMediaDevice:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"switchMediaDevice"];
    @try {
         NSDictionary* argu = [command.arguments objectAtIndex:0];
        if(argu[@"device"] != nil){
            if(mEnxRoom != nil){
              [mEnxRoom switchMediaDevice:argu[@"device"]];
            }
            else{
                [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*get all connected Media Device List*/
-(void)getDevices:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getDevices"];
    if(mEnxRoom != nil){
        NSArray *listOfDevice = [mEnxRoom getDevices];
        [self triggerSuccussJSEvent:@"getDevices" actionName:@"getDevices" requestData:listOfDevice];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*get Current working Media Device name*/
-(void)getSelectedDevice:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getSelectedDevice"];
    if(mEnxRoom != nil){
        NSString *currentMedia = [mEnxRoom getSelectedDevice];
        [self triggerSuccussJSEvent:@"getSelectedDevice" actionName:@"getSelectedDevice" requestData:currentMedia];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/* Get List of available user in Room*/
-(void)getUserList:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getUserList"];
    if(mEnxRoom != nil){
        NSArray *listOfUsers = [mEnxRoom getUserList];
        [self triggerSuccussJSEvent:@"getUserList" actionName:@"getUserList" requestData:listOfUsers];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/* Get Room MetaData*/
-(void)getRoomMetadata:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getRoomMetadata"];
    if(mEnxRoom != nil){
        NSDictionary *metaData = mEnxRoom.roomMetadata;
        [self triggerSuccussJSEvent:@"getRoomMetadata" actionName:@"getRoomMetadata" requestData:metaData];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get Client ID*/
-(void)getClientId:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getClientId"];
    if(mEnxRoom != nil){
        NSString *clientId = mEnxRoom.clientId;
        [self triggerSuccussJSEvent:@"getClientId" actionName:@"getClientId" requestData:clientId];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get Room ID*/
-(void)getRoomId:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getRoomId"];
    if(mEnxRoom != nil){
        NSString *roomId = mEnxRoom.roomId;
        [self triggerSuccussJSEvent:@"getRoomId" actionName:@"getRoomId" requestData:roomId];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get Client Name*/
-(void)getClientName:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getClientName"];
    if(mEnxRoom != nil){
        NSString *clientName = mEnxRoom.clientName;
        [self triggerSuccussJSEvent:@"getClientName" actionName:@"getClientName" requestData:clientName];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get local Stream IDS*/
-(void)getLocalStreamID:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getLocalStreamID"];
    if(mEnxRoom != nil){
        NSString *streamID = mEnxRoom.publishStream.streamId;
        [self triggerSuccussJSEvent:@"getLocalStreamID" actionName:@"getLocalStreamID" requestData:streamID];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get Is connected*/
-(void)isConnected:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"isConnected"];
    if(mEnxRoom != nil){
        EnxRoomStatus isConnected = mEnxRoom.status;
        BOOL connected;
        if(isConnected == EnxRoomStatusConnected){
            connected = true;
        }
        else{
           connected = false;
        }
        [self triggerSuccussJSEvent:@"isConnected" actionName:@"isConnected" requestData:[NSNumber numberWithBool:command]];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get Room Mode*/
-(void)getMode:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"getMode"];
    if(mEnxRoom != nil){
        //NSString *mode = mEnxRoom.room;
        [self triggerSuccussJSEvent:@"getMode" actionName:@"getMode" requestData:roomMode];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get Role of self*/
-(void)getRole:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getRole"];
    if(mEnxRoom != nil){
        NSString *role = mEnxRoom.userRole;
        [self triggerSuccussJSEvent:@"getRole" actionName:@"getRole" requestData:role];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get self info*/
-(void)whoAmI:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"whoAmI"];
    if(mEnxRoom != nil){
        NSDictionary *whoAMI = [mEnxRoom Whoami];
        [self triggerSuccussJSEvent:@"whoAmI" actionName:@"whoAmI" requestData:whoAMI];
    }
    else{
        [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Start Draging View*/
-(void)startDragging:(CDVInvokedUrlCommand*)command{
   [eventListional setObject:command.callbackId forKey:@"startDragging"];
    @try {
         NSDictionary* argu = [command.arguments objectAtIndex:0];
            if(argu[@"view"] != nil && argu[@"drag"] != nil){
                NSString *str = argu[@"view"];
                BOOL flag = [argu[@"drag"]boolValue];
                if([str isEqualToString:@"local"]){
                    if(mlocalView != nil){
                        [self startLocalTouchListener:flag];
                        [parentView bringSubviewToFront:mlocalView];
                    }
                    else{
                       [self reportErrorToJS:@"local view is not initialize : initLocalView "];
                    }
                }
                else{
                    if(mRemoteView != nil){
                        [self startRemoteTouchListener:flag];
                        [parentView bringSubviewToFront:mRemoteView];
                    }
                    else{
                       [self reportErrorToJS:@"remote view is not initialize : initRemoteView"];
                    }
                }
            }
            else{
               [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
            }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
-(void)startLocalTouchListener:(BOOL)flag{
    if(flag)
    {
        UIPanGestureRecognizer *localPanGuster = [[UIPanGestureRecognizer alloc]initWithTarget:self action:@selector(dragView:)];
        [mlocalView addGestureRecognizer:localPanGuster];
        [mlocalView setUserInteractionEnabled:true];
        localPanGuster = nil;
        
    }
    else{
        for (UIGestureRecognizer *gr in mlocalView.gestureRecognizers) {
          [mlocalView removeGestureRecognizer:gr];
            [mlocalView setUserInteractionEnabled:false];
        }
    }
    
}
-(void)startRemoteTouchListener:(BOOL)flag{
    if(flag)
    {
        UIPanGestureRecognizer *remotePanGuster = [[UIPanGestureRecognizer alloc]initWithTarget:self action:@selector(dragView:)];
        [mRemoteView addGestureRecognizer:remotePanGuster];
        [mRemoteView setUserInteractionEnabled:true];
        remotePanGuster = nil;
    }
    else{
        for (UIGestureRecognizer *gr in mRemoteView.gestureRecognizers) {
          [mRemoteView removeGestureRecognizer:gr];
            [mRemoteView setUserInteractionEnabled:false];
        }
    }
}
//Drag View
-(void)dragView:(UIPanGestureRecognizer*)sender{
    CGPoint translatedPoint = [(UIPanGestureRecognizer*)sender translationInView:parentView];
    if([(UIPanGestureRecognizer*)sender state] == UIGestureRecognizerStateBegan) {
        firstX = [[sender view] center].x;
        firstY = [[sender view] center].y;
    }
    translatedPoint = CGPointMake(firstX+translatedPoint.x, firstY+translatedPoint.y);
    [[sender view] setCenter:translatedPoint];
    if([(UIPanGestureRecognizer*)sender state] == UIGestureRecognizerStateEnded) {
        CGFloat finalX = translatedPoint.x + (0*[(UIPanGestureRecognizer*)sender velocityInView:[sender view]].x);
        CGFloat finalY = translatedPoint.y + (0*[(UIPanGestureRecognizer*)sender velocityInView:[sender view]].y);
        [[sender view] setCenter:CGPointMake(finalX, finalY)];
    }
}
/*Hide RemoteView*/
-(void)hideRemoteView:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"hideRemoteView"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
            BOOL flag = [argu[@"hide"] boolValue];
            mRemoteView.hidden = flag;
            [self triggerSuccussJSEvent:@"hideRemoteView" actionName:@"hideRemoteView" requestData:@"Success"];
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Hide ScreenShare*/
-(void)hideScreenShareView:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"hideScreenShareView"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        //To Do
            BOOL flag = [argu[@"hide"] boolValue];
            mOptionView.hidden = flag;
            [self triggerSuccussJSEvent:@"hideScreenShareView" actionName:@"hideScreenShareView" requestData:@"Success"];
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Hide Hide Canvas*/
-(void)hideCanvasScreen:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"hideCanvasScreen"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        //To Do
            BOOL flag = [argu[@"hide"] boolValue];
           mOptionView.hidden = flag;
            [self triggerSuccussJSEvent:@"hideCanvasScreen" actionName:@"hideCanvasScreen" requestData:@"Success"];
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Hide Current Available Talker in room*/
-(void)getTalkerCount:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getTalkerCount"];
    if(mEnxRoom != nil){
        [mEnxRoom getTalkerCount];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Hide Max possible Talker In room*/
-(void)getMaxTalkers:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getMaxTalkers"];
    if(mEnxRoom != nil){
        [mEnxRoom getMaxTalkers];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Set Talket Count in room*/
-(void)setTalkerCount:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getMaxTalkers"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                int talker = [argu[@"count"] intValue];
                [mEnxRoom setTalkerCount:talker];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Post Client Logs*/
-(void)postClientLogs:(CDVInvokedUrlCommand*)command{
    if(mEnxRoom != nil){
        [mEnxRoom postClientLogs];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Enable Logs*/
-(void)enableLogs:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"enableLogs"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            //BOOL flag = [argu[@"enable"] boolValue];
            EnxUtilityManager *logger = [EnxUtilityManager shareInstance];
            [logger startLog];
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Mute Subscribe Stream Audio*/
-(void)muteSubscribeStreamsAudio:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"muteSubscribeStreamsAudio"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            BOOL flag = [argu[@"mute"] boolValue];
            if(mEnxRoom != nil){
                [mEnxRoom muteSubscribeStreamsAudio:flag];
                [self triggerSuccussJSEvent:@"muteSubscribeStreamsAudio" actionName:@"muteSubscribeStreamsAudio" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Set Current Call to audio only */
-(void)setAudioOnlyMode:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"setAudioOnlyMode"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            BOOL flag = [argu[@"audioOnly"] boolValue];
            if(mEnxRoom != nil){
                [mEnxRoom setAudioOnlyMode:flag];
                [self triggerSuccussJSEvent:@"setAudioOnlyMode" actionName:@"setAudioOnlyMode" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Get current video Quility config */
-(void)getReceiveVideoQuality:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getReceiveVideoQuality"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSString *streamType = argu[@"streamType"];
                NSString *videoQuality = [mEnxRoom getReceiveVideoQuality:streamType];
                [self triggerSuccussJSEvent:@"getReceiveVideoQuality" actionName:@"getReceiveVideoQuality" requestData:videoQuality];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Set video Quility config */
-(void)setReceiveVideoQuality:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"setReceiveVideoQuality"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSDictionary *videoQualityOptions = argu[@"videoQualityOptions"];
                [mEnxRoom setReceiveVideoQuality:videoQualityOptions];
                [self triggerSuccussJSEvent:@"setReceiveVideoQuality" actionName:@"setReceiveVideoQuality" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Adjuest Remote View Layout*/
-(void)adjustLayout:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"adjustLayout"];
    if(mEnxRoom != nil){
        [mEnxRoom adjustLayout];
        [self triggerSuccussJSEvent:@"adjustLayout" actionName:@"adjustLayout" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*updateConfiguration for local player*/
-(void)updateConfiguration:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"updateConfiguration"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mLocalStream != nil){
                NSDictionary *configuartionOptions = argu[@"configuartionOptions"];
                [mLocalStream updateConfiguration:configuartionOptions];
                [self triggerSuccussJSEvent:@"configuartionOptions" actionName:@"configuartionOptions" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Extend Duration of confrence*/
-(void)extendConferenceDuration:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"extendConferenceDuration"];
    if(mEnxRoom != nil){
        [mEnxRoom extendConferenceDuration];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*lockRoom ongoing room*/
-(void)lockRoom:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"lockRoom"];
    if(mEnxRoom != nil){
        [mEnxRoom lockRoom];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*lockRoom ongoing room*/
-(void)unLockRoom:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"unLockRoom"];
    if(mEnxRoom != nil){
        [mEnxRoom unlockRoom];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*dropUser Any participent from ongoing room*/
-(void)dropUser:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"dropUser"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSArray *clientIds = argu[@"clientIds"];
                [mEnxRoom dropUser:clientIds];
                //[self triggerSuccussJSEvent:@"configuartionOptions" actionName:@"configuartionOptions" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*destroy current ongoing room*/
-(void)destroy:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"destroy"];
    if(mEnxRoom != nil){
        [mEnxRoom destroy];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Room Mute*/
-(void)hardMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"hardMute"];
    if(mEnxRoom != nil){
        [mEnxRoom hardMute];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Room unmute */
-(void)hardUnMute:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"hardUnMute"];
    if(mEnxRoom != nil){
        [mEnxRoom hardUnMute];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Start Recording in confrence*/
-(void)startRecord:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"startRecord"];
    if(mEnxRoom != nil){
        [mEnxRoom startRecord];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Stop Recording in confrence*/
-(void)stopRecord:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"stopRecord"];
    if(mEnxRoom != nil){
        [mEnxRoom stopRecord];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Stop captcha when in background*/
-(void)stopVideoTracksOnApplicationBackground:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"stopVideoTracksOnApplicationBackground"];
    if(mEnxRoom != nil){
        [mEnxRoom stopVideoTracksOnApplicationBackground:true];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Start captcha when in background*/
-(void)startVideoTracksOnApplicationForeground:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"startVideoTracksOnApplicationForeground"];
    if(mEnxRoom != nil){
        [mEnxRoom startVideoTracksOnApplicationForeground:true];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Enable Stats in room*/
-(void)enableStats:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"enableStats"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                BOOL flag = [argu[@"enableStats"] boolValue];
                [mEnxRoom enableStats:flag];
                //[self triggerSuccussJSEvent:@"configuartionOptions" actionName:@"configuartionOptions" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}

/*Handover self authority to other user in same room*/
-(void)switchUserRole:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"switchUserRole"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSString *clientId =argu[@"clientId"];
                [mEnxRoom switchUserRole:clientId];
                //[self triggerSuccussJSEvent:@"configuartionOptions" actionName:@"configuartionOptions" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Make out bond call to any numble*/
-(void)makeOutboundCall:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"makeOutboundCall"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSString *number =argu[@"text"];
                [mEnxRoom makeOutboundCall:number];
                //[self triggerSuccussJSEvent:@"configuartionOptions" actionName:@"configuartionOptions" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Send chat message in room*/
-(void)sendMessage:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"sendMessage"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSString *textMsg =argu[@"text"];
                BOOL isBroadCase = [argu[@"broadcast"]boolValue];
                if(!isBroadCase){
                    if(argu[@"clientIds"] != nil){
                        NSArray *clientIds = argu[@"clientIds"];
                        [mEnxRoom sendMessage:textMsg isBroadCast:isBroadCase recipientIDs:clientIds];
                    }
                    else{
                        [self reportErrorToJS:[NSString stringWithFormat:@"Invalid Receipent IDS "]];
                    }
                }
                else{
                   [mEnxRoom sendMessage:textMsg isBroadCast:isBroadCase recipientIDs:nil];
                }
                //[self triggerSuccussJSEvent:@"configuartionOptions" actionName:@"configuartionOptions" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Send any tuype of data in room*/
-(void)sendUserData:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"sendUserData"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSDictionary *msg =argu[@"message"];
                BOOL isBroadCase = [argu[@"broadcast"]boolValue];
                if(!isBroadCase){
                    if(argu[@"clientIds"] != nil){
                        NSArray *clientIds = argu[@"clientIds"];
                        [mEnxRoom sendUserData:msg isBroadCast:isBroadCase recipientIDs:clientIds];
                    }
                    else{
                        [self reportErrorToJS:[NSString stringWithFormat:@"Invalid Receipent IDS "]];
                    }
                }
                else{
                   [mEnxRoom sendUserData:msg isBroadCast:isBroadCase recipientIDs:nil];
                }
                //[self triggerSuccussJSEvent:@"sendUserData" actionName:@"sendUserData" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Set Advance option in room*/
-(void)setAdvancedOptions:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"setAdvancedOptions"];
     NSDictionary* argu = [command.arguments objectAtIndex:0];
     @try {
         if(argu != nil){
             if(mEnxRoom != nil){
                 NSArray *option = argu[@"array"];
                 [mEnxRoom setAdvanceOptions:option];
                 //[self triggerSuccussJSEvent:@"setAdvancedOptions" actionName:@"setAdvancedOptions" requestData:@"Success"];
             }else{
                [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
             }
         }else{
            [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
         }
     }@catch (NSException *exception) {
         NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
     }
}
/*Get Advance option in room*/
-(void)getAdvancedOptions:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getAdvancedOptions"];
    if(mEnxRoom != nil){
        [mEnxRoom getAdvanceOptions];
        //[self triggerSuccussJSEvent:@"getAdvancedOptions" actionName:@"getAdvancedOptions" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Send file in same room*/
-(void)sendFiles:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"sendFiles"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                BOOL isBroadCase = [argu[@"broadcast"]boolValue];
                if(!isBroadCase){
                    if(argu[@"array"] != nil){
                        NSArray *clientIds = argu[@"array"];
                        NSMutableArray *clientIdsList =[[NSMutableArray alloc] initWithCapacity:0];
                        for(NSDictionary *dict in clientIds){
                            [clientIdsList addObject:dict[@"clientId"]];
                        }
                        [mEnxRoom sendFiles:isBroadCase clientIds:clientIdsList];
                        
                    }
                    else{
                        [self reportErrorToJS:[NSString stringWithFormat:@"Invalid Receipent IDS "]];
                    }
                }
                else{
                   [mEnxRoom sendFiles:isBroadCase clientIds:nil];
                }
                //[self triggerSuccussJSEvent:@"sendUserData" actionName:@"sendUserData" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Download Available file */
-(void)downloadFile:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"downloadFile"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                if(argu[@"isAutoSave"] != nil && argu[@"json"] != nil){
                    BOOL autoSave = [argu[@"isAutoSave"] boolValue];
                    NSDictionary*dict = argu[@"json"];
                    [mEnxRoom downloadFile:dict autoSave:autoSave];
                }
                else{
                    [self reportErrorToJS:[NSString stringWithFormat:@"Invalid input Argument"]];
                }
                //[self triggerSuccussJSEvent:@"sendUserData" actionName:@"sendUserData" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*CAncel upload file in room*/
-(void)cancelUpload:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"cancelUpload"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                if(argu[@"jobId"] != nil){
                    int jobId = [argu[@"jobId"] intValue];
                    [mEnxRoom cancelUpload:jobId];
                }
                else{
                    [self reportErrorToJS:[NSString stringWithFormat:@"Invalid input Argument"]];
                }
                //[self triggerSuccussJSEvent:@"sendUserData" actionName:@"sendUserData" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*cancle Download files in room*/
-(void)cancelDownload:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"cancelDownload"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                if(argu[@"jobId"] != nil){
                    int jobId = [argu[@"jobId"] intValue];
                    [mEnxRoom cancelDownload:jobId];
                }
                else{
                    [self reportErrorToJS:[NSString stringWithFormat:@"Invalid input Argument"]];
                }
                //[self triggerSuccussJSEvent:@"sendUserData" actionName:@"sendUserData" requestData:@"Success"];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Cancel All Upload file in room*/
-(void)cancelAllUploads:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"cancelAllUploads"];
    if(mEnxRoom != nil){
        [mEnxRoom cancelAllUploads];
        //[self triggerSuccussJSEvent:@"getAdvancedOptions" actionName:@"getAdvancedOptions" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Cancel All Download file in room*/
-(void)cancelAllDownloads:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"cancelAllUploads"];
    if(mEnxRoom != nil){
        [mEnxRoom cancelAllDownloads];
        //[self triggerSuccussJSEvent:@"getAdvancedOptions" actionName:@"getAdvancedOptions" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Get list of available files in room*/
-(void)getAvailableFiles:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"getAvailableFiles"];
    if(mEnxRoom != nil){
       NSArray *fileList =  [mEnxRoom getAvailableFiles];
        [self triggerSuccussJSEvent:@"getAvailableFiles" actionName:@"getAvailableFiles" requestData:fileList];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*Handle Screen when screen share started*/
-(void)addScreenShare:(CDVInvokedUrlCommand*)command{
    //TO Do
    [eventListional setObject:command.callbackId forKey:@"addScreenShare"];
    @try {
        NSLog(@"ParentView %@",parentView);
         NSDictionary* phrase = [command.arguments objectAtIndex:0];
        if(phrase[@"viewOptions"] != nil){
            [self createOptionView:phrase[@"viewOptions"]];
            [self triggerSuccussJSEvent:@"addScreenShare" actionName:@"addScreenShare" requestData:@"Success"];

        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Handle Screen when Canvas started*/
-(void)addCanvasScreen:(CDVInvokedUrlCommand*)command{
    //TO Do
    [eventListional setObject:command.callbackId forKey:@"addCanvasScreen"];
    @try {
        NSLog(@"ParentView %@",parentView);
         NSDictionary* phrase = [command.arguments objectAtIndex:0];
        if(phrase[@"viewOptions"] != nil){
            [self createOptionView:phrase[@"viewOptions"]];
            [self triggerSuccussJSEvent:@"addCanvasScreen" actionName:@"addCanvasScreen" requestData:@"Success"];

        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Handle Screen when Annotation started*/
-(void)addAnnotationScreen:(CDVInvokedUrlCommand*)command{
    //TO Do
    [eventListional setObject:command.callbackId forKey:@"addAnnotationScreen"];
    @try {
        NSLog(@"ParentView %@",parentView);
         NSDictionary* phrase = [command.arguments objectAtIndex:0];
        if(phrase[@"viewOptions"] != nil){
            [self createOptionView:phrase[@"viewOptions"]];
            [self triggerSuccussJSEvent:@"addAnnotationScreen" actionName:@"addAnnotationScreen" requestData:@"Success"];

        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Handle Screen when screen share stoped*/
-(void)removeScreenShare:(CDVInvokedUrlCommand*)command{
    //TO Do
    [eventListional setObject:command.callbackId forKey:@"removeScreenShare"];
    [self cleanOptionView];
    [self triggerSuccussJSEvent:@"removeScreenShare" actionName:@"removeScreenShare" requestData:@"Success"];
}
/*Handle Screen when Canvas stoped*/
-(void)removeCanvasScreen:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"removeCanvasScreen"];
    [self cleanOptionView];
    [self triggerSuccussJSEvent:@"removeCanvasScreen" actionName:@"removeCanvasScreen" requestData:@"Success"];
}
/*Handle Screen when Annotation stoped*/
-(void)removeAnnotationScreen:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"removeAnnotationScreen"];
    [self cleanOptionView];
    [self triggerSuccussJSEvent:@"removeAnnotationScreen" actionName:@"removeAnnotationScreen" requestData:@"Success"];
}
/*Hide Annotation Screen*/
-(void)hideAnnotationScreen:(CDVInvokedUrlCommand*)command{
    //TO Do
    [eventListional setObject:command.callbackId forKey:@"hideAnnotationScreen"];
      NSDictionary* argu = [command.arguments objectAtIndex:0];
      @try {
          //To Do
              BOOL flag = [argu[@"hide"] boolValue];
             mOptionView.hidden = flag;
              [self triggerSuccussJSEvent:@"hideAnnotationScreen" actionName:@"hideAnnotationScreen" requestData:@"Success"];
      }@catch (NSException *exception) {
          NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
      }
}
-(void)createOptionStream:(NSDictionary *)dict{
    NSDictionary *remoteStreamDict = mEnxRoom.streamsByStreamId;
    NSString *streamId = [NSString stringWithFormat:@"%@",dict[@"streamId"]];
    mOptionStream =  [remoteStreamDict objectForKey:streamId];
    if(mOptionPlayer == nil){
        mOptionPlayer = [[EnxPlayerView alloc]initRemoteView:CGRectZero];
        mOptionPlayer.delegate = self;
    }
    [mOptionStream attachRenderer:mOptionPlayer];
}
/*Create option View for Screen Share ,Canvas,whiteboard,annotation*/
-(void)createOptionView:(NSDictionary*)options{
    if(mOptionView == nil){
        mOptionView =[[UIView alloc]initWithFrame:CGRectZero];
        [parentView addSubview:mOptionView];
        [mOptionView setBackgroundColor:[UIColor blackColor]];
        [parentView bringSubviewToFront:mOptionView];
        [parentView bringSubviewToFront:mlocalView];
        [self addConstantForOptionsView:options];
        [mOptionView addSubview:mOptionPlayer];
        [self setLayoutOptionPlayerConstant:mOptionPlayer];
    }
}
/*Add Constant for optionView*/
-(void)addConstantForOptionsView:(NSDictionary*)details{
    mOptionView.translatesAutoresizingMaskIntoConstraints = false;
                int height = 0;
                int width = 0;
               NSString *position = @"right";
                int topMargin = 0;
                int leftMargin = 0;
                int rightMargin = 0;
                int bottomMargin = 0;
               if(details[@"height"] != nil){
                   height = [details[@"height"] intValue];
               }
               if(details[@"width"] != nil){
                   width = [details[@"width"] intValue];
               }
                if(details[@"margin_top"] != nil){
                    topMargin = [details[@"margin_top"] intValue];
                }
                if(details[@"margin_left"] != nil){
                    leftMargin = [details[@"margin_left"] intValue];
                }
                if(details[@"margin_right"] != nil){
                    rightMargin = [details[@"margin_right"] intValue];
                }
                if(details[@"margin_bottom"] != nil){
                    bottomMargin = [details[@"margin_bottom"] intValue];
                }
               if(details[@"position"] != nil){
                   position = details[@"position"];
               }
            if(height == 0 || height >= parentView.bounds.size.height){
                    height = parentView.bounds.size.height;
                    height = height - (topMargin + bottomMargin);
            }
            if(width == 0 || width >= parentView.bounds.size.width){
                width = parentView.bounds.size.width;
                width = width - (leftMargin +rightMargin);
            }
    if([position isEqualToString:@"right"] ){
              [mOptionView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              [mOptionView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
                if(leftMargin == 0){
                    leftMargin = parentView.bounds.size.width - width;
                }
            [mOptionView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
            if(bottomMargin == 0){
                bottomMargin = parentView.bounds.size.height - height;
            }
        [mOptionView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
          }
          else if([position isEqualToString:@"left"] ){
              [mOptionView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              [mOptionView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
              if(bottomMargin == 0){
                  bottomMargin = parentView.bounds.size.height - height;
              }
              [mOptionView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
              if(rightMargin == 0){
                  rightMargin = parentView.bounds.size.width - width;
              }
              [mOptionView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
          }
          else if([position isEqualToString:@"top"] ){
              [mOptionView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              [mOptionView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
              if(bottomMargin == 0){
                  bottomMargin = parentView.bounds.size.height - height;
              }
              [mOptionView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
              if(leftMargin == 0){
                  leftMargin = parentView.bounds.size.width - width;
              }
              [mOptionView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
          }
          else if([position isEqualToString:@"bottom"] ){
              [mOptionView.bottomAnchor constraintEqualToAnchor:parentView.bottomAnchor constant:-(bottomMargin)].active = true;
              [mOptionView.trailingAnchor constraintEqualToAnchor:parentView.trailingAnchor constant:-(rightMargin)].active = true;
              if(topMargin == 0){
                  topMargin = parentView.bounds.size.height - height;
              }
              [mOptionView.topAnchor constraintEqualToAnchor:parentView.topAnchor constant:topMargin].active = true;
              if(leftMargin == 0){
                 leftMargin = parentView.bounds.size.width - width;
              }
               [mOptionView.leadingAnchor constraintEqualToAnchor:parentView.leadingAnchor constant:leftMargin].active = true;
          }
}
/*Add constant For OptionPlayer View*/
-(void)setLayoutOptionPlayerConstant:(EnxPlayerView*)view{
    view.translatesAutoresizingMaskIntoConstraints = false;
    [view.leadingAnchor constraintEqualToAnchor:mOptionView.leadingAnchor constant:1.0].active = true;
    [view.bottomAnchor constraintEqualToAnchor:mOptionView.bottomAnchor constant:1.0].active = true;
    
    [view.trailingAnchor constraintEqualToAnchor:mOptionView.trailingAnchor constant:1.0].active = true;
    [view.topAnchor constraintEqualToAnchor:mOptionView.topAnchor constant:1.0].active = true;
}

-(void)cleanOptionView{
    [mOptionStream detachRenderer];
    [mOptionPlayer removeFromSuperview];
    [mOptionView removeFromSuperview];
    mOptionPlayer = nil;
    mOptionView = nil;
}
#pragma -mark Chair Controller Methods
/*This method for participent, Where he/she request for floor access*/
-(void)requestFloor:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"requestFloor"];
    if(mEnxRoom != nil){
        [mEnxRoom requestFloor];
        //[self triggerSuccussJSEvent:@"requestFloor" actionName:@"requestFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*This method for participent, Where he/she can cancle request his request floor*/
-(void)cancelFloor:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"cancelFloor"];
    if(mEnxRoom != nil){
        [mEnxRoom cancelFloor];
        //[self triggerSuccussJSEvent:@"cancelFloor" actionName:@"cancelFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*This method for participent, Where he/she can finished request his Fool access*/
-(void)finishFloor:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"finishFloor"];
    if(mEnxRoom != nil){
        [mEnxRoom finishFloor];
        //[self triggerSuccussJSEvent:@"cancelFloor" actionName:@"cancelFloor" requestData:@"Success"];
    }else{
       [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
    }
}
/*This method for Modaitore, Where he/she can accept any particepnt floor request*/
-(void)grantFloor:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"grantFloor"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSString *clientId = argu[@"clientId"];
                [mEnxRoom grantFloor:clientId];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*This method for Modaitore, Where he/she can denyFloor any particepnt floor request*/
-(void)denyFloor:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"denyFloor"];
     NSDictionary* argu = [command.arguments objectAtIndex:0];
     @try {
         if(argu != nil){
             if(mEnxRoom != nil){
                 NSString *clientId = argu[@"clientId"];
                 [mEnxRoom denyFloor:clientId];
             }else{
                [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
             }
         }else{
            [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
         }
     }@catch (NSException *exception) {
         NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
     }
}
/*This method for Modaitore, Where he/she can releaseFloor any particepnt floor request*/
-(void)releaseFloor:(CDVInvokedUrlCommand*)command{
    [eventListional setObject:command.callbackId forKey:@"denyFloor"];
    NSDictionary* argu = [command.arguments objectAtIndex:0];
    @try {
        if(argu != nil){
            if(mEnxRoom != nil){
                NSString *clientId = argu[@"clientId"];
                [mEnxRoom releaseFloor:clientId];
            }else{
               [self reportErrorToJS:@"Object is not initialize : EnxRoom"];
            }
        }else{
           [self reportErrorToJS:[NSString stringWithFormat:@"Wrong JSON  : %@",argu]];
        }
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}



#pragma -mark Delegates Methods
/*
* Below are the all callbacks which implemented in the plugin class
*/
/*Room Join call back*/
-(void)room:(EnxRoom *)room didConnect:(NSDictionary *)roomMetadata{
    mEnxRoom = room;
    NSDictionary *roomSettingInfo = roomMetadata[@"room"][@"settings"];
    roomMode = roomSettingInfo[@"mode"];
    if(mEnxRoom != nil){
        [mEnxRoom publish:mLocalStream];
    }
    [self triggerSuccussJSEvent:@"onRoomConnected" actionName:@"onRoomConnected" requestData:roomMetadata];
}
//Publish Stream CallBack
- (void)room:(EnxRoom *)room didPublishStream:(EnxStream *)stream {
   //To Do
   [self triggerSuccussJSEvent:@"onPublishStream" actionName:@"onPublishStream" requestData:@"Success"];
}
//Stream Ready To Subscribe
- (void)room:(EnxRoom *)room didAddedStream:(EnxStream *)stream {
    // We subscribe to all streams added.
    [mEnxRoom subscribe:stream];
    [self triggerSuccussJSEvent:@"onAddedStream" actionName:@"onAddedStream" requestData:stream.streamId];
}
//Stream subscribe Call back
- (void)room:(EnxRoom *)room didSubscribeStream:(EnxStream *)stream {
    //To Do
    [self triggerSuccussJSEvent:@"onSubscribeStream" actionName:@"onSubscribeStream" requestData:stream.streamId];
}
/*AT listView call back*/
-(void)room:(EnxRoom *_Nullable)room didActiveTalkerView:(UIView *_Nullable)view{
    view.tag = 10100000112;
    [mRemoteView addSubview:view];
    [self setLayoutConstant:view];
}
/*AT View call back*/
-(void)room:(EnxRoom *)room didActiveTalkerList:(NSArray * _Nullable)Data{
    //[mRemoteView addSubview:view];
    //[self setLayoutConstant:view];
}
/*Self Audio Mute/Unmute callback*/
-(void)didAudioEvents:(NSDictionary *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAudioEvent" actionName:@"onAudioEvent" requestData:data];
}
/*Self Video Mute/Unmute callback*/
-(void)didVideoEvents:(NSDictionary *_Nullable)data{
    [self triggerSuccussJSEvent:@"onVideoEvent" actionName:@"onVideoEvent" requestData:data];
}
/*Add constant For AT View*/
-(void)setLayoutConstant:(UIView*)view{
    view.translatesAutoresizingMaskIntoConstraints = false;
    [view.leadingAnchor constraintEqualToAnchor:mRemoteView.leadingAnchor constant:1.0].active = true;
    [view.bottomAnchor constraintEqualToAnchor:mRemoteView.bottomAnchor constant:1.0].active = true;
    
    [view.trailingAnchor constraintEqualToAnchor:mRemoteView.trailingAnchor constant:1.0].active = true;
    [view.topAnchor constraintEqualToAnchor:mRemoteView.topAnchor constant:1.0].active = true;
}
//UnPublish Stream
- (void)room:(EnxRoom *)room didUnpublishStream:(EnxStream *)stream {
    dispatch_async(dispatch_get_main_queue(), ^{
        // self->localStream = nil;
    });
}
//Room Disconnected
-(void)didRoomDisconnect:(NSArray *)response{
    [self triggerSuccussJSEvent:@"onRoomDisConnected" actionName:@"onRoomDisConnected" requestData:response[0]];
    [self releaseAllResources];
}
//Notify device media change update
-(void)didNotifyDeviceUpdate:(NSString*_Nonnull)updates{
    [self triggerSuccussJSEvent:@"onNotifyDeviceUpdate" actionName:@"onNotifyDeviceUpdate" requestData:updates];
}
/*
This Delegate will notify when any user join the room.
*/
-(void)room:(EnxRoom *_Nullable)room userDidJoined:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onUserConnected" actionName:@"onUserConnected" requestData:Data[0]];
}
/*
 This Delegate will notify when any user leave the room.
 */
-(void)room:(EnxRoom *_Nullable)room userDidDisconnected:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onUserDisConnected" actionName:@"onUserDisConnected" requestData:Data[0]];
}
/*
 This Delegate will notify to User Once he Getting error in joining room
 */
- (void)room:(EnxRoom *_Nullable)room didError:(NSArray *_Nullable)reason {
    [self triggerErrorJSEvent:@"onRoomError" actionName:@"onRoomError" requestData:reason[0]];
}
/**
Get Max Talker Count In room
 */
-(void)room:(EnxRoom *_Nullable)room didGetMaxTalkers:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onMaxTalkerCount" actionName:@"onMaxTalkerCount" requestData:Data[0]];
}
/**
 Get Current Talker Count In room
 */
-(void)room:(EnxRoom *_Nullable)room didGetTalkerCount:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onGetTalkerCount" actionName:@"onGetTalkerCount" requestData:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room didSetTalkerCount:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onSetTalkerCount" actionName:@"onSetTalkerCount" requestData:Data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didAckLockRoom:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAckLockRoom" actionName:@"onAckLockRoom" requestData:data[0]];
}

- (void)room:(EnxRoom *_Nullable)room didAckUnlockRoom:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAckUnLockRoom" actionName:@"onAckUnLockRoom" requestData:data[0]];
}

- (void)room:(EnxRoom *_Nullable)room didLockRoom:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onLockedRoom" actionName:@"onLockedRoom" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didUnlockRoom:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onUnLockedRoom" actionName:@"onUnLockedRoom" requestData:data[0]];
}
//Delegate for drop and destroy
- (void)room:(EnxRoom *_Nullable)room didAckDropUser:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAckDropUser" actionName:@"onAckDropUser" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didAckDestroy:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAckDestroy" actionName:@"onAckDestroy" requestData:data[0]];
}
-(void)didLogUpload:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onLogUploaded" actionName:@"onLogUploaded" requestData:data[0]];
}
- (void)didhardMute:(NSArray *_Nullable)Data{
   [self triggerSuccussJSEvent:@"onHardMuted" actionName:@"onHardMuted" requestData:Data[0]];
}
- (void)didHardMuteReceived:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onReceivedHardMute" actionName:@"onReceivedHardMute" requestData:Data[0]];
}
- (void)didhardUnMute:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onHardUnMuted" actionName:@"onHardUnMuted" requestData:Data[0]];
}
- (void)didHardunMuteReceived:(NSArray *_Nullable)Data{
   [self triggerSuccussJSEvent:@"onReceivedHardUnMute" actionName:@"onReceivedHardUnMute" requestData:Data[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didHardVideoMute:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onHardMutedVideo" actionName:@"onHardMutedVideo" requestData:data[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didHardVideoUnMute:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onHardUnMutedVideo" actionName:@"onHardUnMutedVideo" requestData:data[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didReceivehardMuteVideo:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onReceivedHardMuteVideo" actionName:@"onReceivedHardMuteVideo" requestData:data[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didRecivehardUnmuteVideo:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onReceivedHardUnMuteVideo" actionName:@"onReceivedHardUnMuteVideo" requestData:data[0]];
}
- (void)didhardMuteAudio:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onHardMutedAudio" actionName:@"onHardMutedAudio" requestData:Data[0]];
}
- (void)didhardUnMuteAudio:(NSArray *_Nullable)Data{
   [self triggerSuccussJSEvent:@"onHardUnMutedAudio" actionName:@"onHardUnMutedAudio" requestData:Data[0]];
}
- (void)didRecievedHardMutedAudio:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onReceivedHardMuteAudio" actionName:@"onReceivedHardMuteAudio" requestData:Data[0]];
}
- (void)didRecievedHardUnmutedAudio:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onReceivedHardUnMuteAudio" actionName:@"onReceivedHardUnMuteAudio" requestData:Data[0]];
}

- (void)room:(EnxRoom *_Nullable)room didAcknowledgSendData:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAcknowledgedSendData" actionName:@"onAcknowledgedSendData" requestData:data[0]];
}
/*
 This delegate method called to receive message at room Level.
 */
- (void)room:(EnxRoom *_Nonnull)room didMessageReceived:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onMessageReceived" actionName:@"onMessageReceived" requestData:data[0]];
}
/*
 This delegate method called to receive custom signaling event message at room Level.
 */
- (void)room:(EnxRoom *_Nonnull)room didUserDataReceived:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onUserDataReceived" actionName:@"onUserDataReceived" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didSwitchUserRole:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onSwitchedUserRole" actionName:@"onSwitchedUserRole" requestData:data[0]];
}

- (void)room:(EnxRoom *_Nullable)room didUserRoleChanged:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onUserRoleChanged" actionName:@"onUserRoleChanged" requestData:data[0]];
}
/*
 Confrence Time Alert
 */
- (void)room:(EnxRoom *_Nullable)room didConferenceRemainingDuration:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onConferenceRemainingDuration" actionName:@"onConferenceRemainingDuration" requestData:data[0]];
}
/* Extend Confrence callback*/
- (void)room:(EnxRoom *_Nullable)room didConferencessExtended:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onConferencessExtended" actionName:@"onConferencessExtended" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didReceiveData:(NSDictionary *_Nullable)data
  fromStream:(EnxStream *_Nullable)stream{
     [self triggerSuccussJSEvent:@"onReceivedData" actionName:@"onReceivedData" requestData:data];
}
- (void)room:(EnxRoom *_Nullable)room didAcknowledgementAdvanceOption:(NSDictionary *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAdvancedOptionsUpdate" actionName:@"onAdvancedOptionsUpdate" requestData:data];
}

- (void)room:(EnxRoom *_Nullable)room didBatteryUpdates:(NSDictionary *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAdvancedOptionsUpdate" actionName:@"onAdvancedOptionsUpdate" requestData:data];
}

- (void)room:(EnxRoom *_Nullable)room didAspectRatioUpdates:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAdvancedOptionsUpdate" actionName:@"onAdvancedOptionsUpdate" requestData:data[0]];
}

- (void)room:(EnxRoom *_Nullable)room didVideoResolutionUpdates:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onAdvancedOptionsUpdate" actionName:@"onAdvancedOptionsUpdate" requestData:data[0]];
}

- (void)room:(EnxRoom *_Nullable)room didGetAdvanceOptions:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onGetAdvancedOptions" actionName:@"onGetAdvancedOptions" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didBandWidthUpdated:(NSArray *_Nullable)data{
     [self triggerSuccussJSEvent:@"onBandWidthUpdated" actionName:@"onBandWidthUpdated" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didCanvasStreamEvent:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onCanvasStreamEvent" actionName:@"onCanvasStreamEvent" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didShareStreamEvent:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onShareStreamEvent" actionName:@"onShareStreamEvent" requestData:data[0]];
}
-(void)room:(EnxRoom*_Nonnull)room didConnectionInterrupted:(NSArray*_Nonnull)data{
     [self triggerSuccussJSEvent:@"onConnectionInterrupted" actionName:@"onConnectionInterrupted" requestData:data[0]];
}
-(void)room:(EnxRoom*_Nonnull)room didConnectionLost:(NSArray*_Nonnull)data{
     [self triggerSuccussJSEvent:@"onConnectionLost" actionName:@"onConnectionLost" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didOutBoundCallInitiated:(NSArray *_Nullable)data{
     [self triggerSuccussJSEvent:@"onOutBoundCallInitiated" actionName:@"onOutBoundCallInitiated" requestData:data[0]];
}
- (void)room:(EnxRoom *_Nullable)room didDialStateEvents:(EnxOutBoundCallState)state{
    // [self triggerSuccussJSEvent:@"onDialStateEvents" actionName:@"onDialStateEvents" requestData:state];
}
-(void)didPlayerStats:(NSDictionary * _Nonnull)data{
     [self triggerSuccussJSEvent:@"onPlayerStats" actionName:@"onPlayerStats" requestData:data];
}
- (void)room:(EnxRoom *_Nullable)room didReconnect:(NSString *_Nullable)reason{
     [self triggerSuccussJSEvent:@"onReconnect" actionName:@"onReconnect" requestData:reason];
}
-(void)room:(EnxRoom*_Nonnull)room didUserReconnectSuccess:(NSDictionary*_Nonnull)data{
   [self triggerSuccussJSEvent:@"onUserReconnectSuccess" actionName:@"onUserReconnectSuccess" requestData:data];
}
-(void)startRecordingEvent:(NSArray *_Nullable)response{
     [self triggerSuccussJSEvent:@"onStartRecordingEvent" actionName:@"onStartRecordingEvent" requestData:response[0]];
}
-(void)stopRecordingEvent:(NSArray *_Nullable)response{
     [self triggerSuccussJSEvent:@"onStopRecordingEvent" actionName:@"onStopRecordingEvent" requestData:response[0]];
}
-(void)roomRecordOn:(NSArray *_Nullable)Data{
     [self triggerSuccussJSEvent:@"onRoomRecordingOn" actionName:@"onRoomRecordingOn" requestData:Data[0]];
}
-(void)roomRecordOff:(NSArray *_Nullable)Data{
     [self triggerSuccussJSEvent:@"onRoomRecordingOff" actionName:@"onRoomRecordingOff" requestData:Data[0]];
}
/*
    This method will update once stats enable and update to app user for stats
    @param statsData has all stats information.
 */
-(void)didReceiveStats:(NSArray * _Nonnull)statsData{
     [self triggerSuccussJSEvent:@"onReceivedStats" actionName:@"onReceivedStats" requestData:statsData[0]];
}
/*
 This method will update  stats Subscribe and UnSubscribe
 @param statsData has all stats information.
 */
-(void)didAcknowledgeStats:(NSArray * _Nonnull)subUnSubResponse{
     [self triggerSuccussJSEvent:@"onAcknowledgeStats" actionName:@"onAcknowledgeStats" requestData:subUnSubResponse[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didRemoteStreamAudioMute:(NSArray *_Nullable)data{
     [self triggerSuccussJSEvent:@"onRemoteStreamAudioMute" actionName:@"onRemoteStreamAudioMute" requestData:data[0]];
}

//New 
/*This delegate method called When any of the user in same room will start sharing file.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileUploadStarted:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileUploadStarted" actionName:@"onFileUploadStarted" requestData:data[0]];
}
/*This delegate method called When self user will start sharing file.*/
- (void)room:(EnxRoom *_Nonnull)room
didInitFileUpload:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onInitFileUpload" actionName:@"onInitFileUpload" requestData:data[0]];
}
/*This delegate method called When File available to download.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileAvailable:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileAvailable" actionName:@"onFileAvailable" requestData:data[0]];
}
/*This delegate method called upload file is success.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileUploaded:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileUploaded" actionName:@"onFileUploaded" requestData:data[0]];
}
/*This delegate method called upload file is failed.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileUploadFailed:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileUploadFailed" actionName:@"onFileUploadFailed" requestData:data[0]];
}
/*This delegate method called When download of file success.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileDownloaded:(NSString *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileDownloaded" actionName:@"onFileDownloaded" requestData:data];
}
/*This delegate method called When file download failed.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileDownloadFailed:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileDownloadFailed" actionName:@"onFileDownloadFailed" requestData:data[0]];
}
/*This delegate method called When file download initiated.*/
- (void)room:(EnxRoom *_Nonnull)room
didInitFileDownload:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onInitFileDownload" actionName:@"onInitFileDownload" requestData:data[0]];
}
/*This delegate method called When file download Cancel.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileDownloadCancelled:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onFileDownloadCancelled" actionName:@"onFileDownloadCancelled" requestData:data[0]];
}
/*This delegate method called When file Upload Cancel.*/
- (void)room:(EnxRoom *_Nonnull)room
didFileUploadCancelled:(NSArray *_Nullable)data{
   [self triggerSuccussJSEvent:@"onFileUploadCancelled" actionName:@"onFileUploadCancelled" requestData:data[0]];
}
-(void)room:(EnxRoom *_Nullable)room screenSharedStarted:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onScreenSharedStarted" actionName:@"onScreenSharedStarted" requestData:Data[0]];
    if(Data.count == 0){
        return;
    }
    [self createOptionStream:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room screenShareStopped:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onScreenSharedStopped" actionName:@"onScreenSharedStopped" requestData:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room canvasStarted:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onCanvasStarted" actionName:@"onCanvasStarted" requestData:Data[0]];
    if(Data.count == 0){
        return;
    }
    [self createOptionStream:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room canvasStopped:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onCanvasStopped" actionName:@"onCanvasStopped" requestData:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room didAnnotationStarted:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onAnnotationStarted" actionName:@"onAnnotationStarted" requestData:Data[0]];
    if(Data.count == 0){
        return;
    }
    [self createOptionStream:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room didAnnotationStopped:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onAnnotationStopped" actionName:@"onAnnotationStopped" requestData:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room didStartAnnotationACK:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onStartAnnotationAck" actionName:@"onStartAnnotationAck" requestData:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room didStoppedAnnotationACK:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onStoppedAnnotationAck" actionName:@"onStoppedAnnotationAck" requestData:Data[0]];
}
-(void)room:(EnxRoom *_Nullable)room didStartCanvasACK:(NSArray *_Nullable)Data{
    //TO Do
}
-(void)room:(EnxRoom *_Nullable)room didStoppedCanvasACK:(NSArray *_Nullable)Data{
    //TO Do
}
// called when error on event failure like publish, subscribe etc
- (void)room:(EnxRoom *_Nullable)room didEventError:(NSArray *_Nullable)reason{
    [self triggerErrorJSEvent:@"onEventError" actionName:@"onEventError" requestData:reason[0]];
}
// called pass info related to any event if required.
- (void)room:(EnxRoom *_Nullable)room didEventInfo:(NSDictionary *_Nullable)infoData{
    [self triggerErrorJSEvent:@"onEventInfo" actionName:@"onEventInfo" requestData:infoData];
}
- (void)stream:(EnxStream *_Nullable)stream didRemoteStreamVideoMute:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onRemoteStreamVideoMute" actionName:@"onRemoteStreamVideoMute" requestData:data[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didRemoteStreamVideoUnMute:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onRemoteStreamVideoUnMute" actionName:@"onRemoteStreamVideoUnMute" requestData:data[0]];
}
- (void)stream:(EnxStream *_Nullable)stream didRemoteStreamAudioUnMute:(NSArray *_Nullable)data{
    [self triggerSuccussJSEvent:@"onRemoteStreamAudioUnMute" actionName:@"onRemoteStreamAudioUnMute" requestData:data[0]];
}
-(void)didCapturedView:(UIImage*_Nonnull)snapShot{
    //TO Do
    NSData *imageData = UIImagePNGRepresentation(snapShot);
    NSString *strBase64 = [imageData base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
    [self triggerSuccussJSEvent:@"OnCapturedView" actionName:@"OnCapturedView" requestData:strBase64];
}
#pragma -mark Callback Methods for Chair controler
- (void)didFloorRequested:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onFloorRequested" actionName:@"onFloorRequested" requestData:Data[0]];
}
- (void)didFloorCancelled:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onFloorCancelled" actionName:@"onFloorCancelled" requestData:Data[0]];
}
- (void)didFloorFinished:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onFloorFinished" actionName:@"onFloorFinished" requestData:Data[0]];
}
- (void)didGrantedFloorRequest:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onGrantedFloorRequest" actionName:@"onGrantedFloorRequest" requestData:Data[0]];
}
- (void)didDeniedFloorRequest:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onDeniedFloorRequest" actionName:@"onDeniedFloorRequest" requestData:Data[0]];
}
- (void)didReleasedFloorRequest:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onReleasedFloorRequest" actionName:@"onReleasedFloorRequest" requestData:Data[0]];
}
- (void)didCancelledFloorRequest:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onCancelledFloorRequest" actionName:@"onCancelledFloorRequest" requestData:Data[0]];
}
- (void)didFinishedFloorRequest:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onFinishedFloorRequest" actionName:@"onFinishedFloorRequest" requestData:Data[0]];
}
- (void)didFloorRequestReceived:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onFloorRequestReceived" actionName:@"onFloorRequestReceived" requestData:Data[0]];
}
- (void)didProcessFloorRequested:(NSArray *_Nullable)Data{
    [self triggerSuccussJSEvent:@"onProcessFloorRequested" actionName:@"onProcessFloorRequested" requestData:Data[0]];
}

#pragma -mark Common Methods
/*Common method for All events*/
-(void)triggerSuccussJSEvent:(NSString*)actionType actionName:(NSString*)name requestData:(id)metaData{
    @try {
        NSDictionary *dict = @{@"eventType" : name , @"data" : metaData};
        CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:dict];
        [result setKeepCallback:[NSNumber numberWithBool:YES]];
        [self.commandDelegate sendPluginResult:result callbackId:eventListional[actionType]];
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/* Common Error message for all event*/
-(void)reportErrorToJS:(NSString*)str{
    NSString *eStr = [NSString stringWithFormat:@"Cordova Plugin Error: %@",str];
    @try {
        NSDictionary *dict = @{@"msg" : eStr , @"errorCode" : @0};
        [self eventError:dict];
    }@catch (NSException *exception) {
      NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Preapare Event Error response formate*/
-(void)eventError:(NSDictionary*)dict{
    [self triggerErrorJSEvent:@"onEventError" actionName:@"onEventError" requestData:dict];
}
/*Send Event Error to App*/
-(void)triggerErrorJSEvent:(NSString*)actionType actionName:(NSString*)name requestData:(id)metaData{
    @try {
        NSDictionary *dict = @{@"eventType" : name , @"data" : metaData};
        CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:dict];
        [self.commandDelegate sendPluginResult:result callbackId:eventListional[actionType]];
    }@catch (NSException *exception) {
        NSLog(@"%@", [NSString stringWithFormat:@"%@",exception.description]);
    }
}
/*Clean all object*/
-(void)releaseAllResources{
    if(mlocalView != nil)
    {
        [mlocalView removeFromSuperview];
        mlocalView = nil;
    }
    if(mRemoteView !=nil){
        [mRemoteView removeFromSuperview];
        mRemoteView = nil;
    }
    if(eventListional != nil){
        eventListional = nil;
    }
    if(mEnxRtc != nil){
        mEnxRtc = nil;
    }
    if(mEnxRoom != nil){
        mEnxRoom = nil;
    }
    if(mLocalStream != nil){
        mLocalStream = nil;
    }
    if(mOptionView != nil){
        mOptionView = nil;
    }
    if(mOptionPlayer != nil){
        mOptionPlayer = nil;
    }
}
@end
