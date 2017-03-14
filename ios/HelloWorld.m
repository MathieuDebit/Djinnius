//
//  HelloWorld.m
//  Djinnius
//
//  Created by Mathieu Débit on 14/03/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "HelloWorld.h"
#import "DJNSHelloWorld.h"

@implementation HelloWorld {
  DJNSHelloWorld *_helloWorldInterface;
}

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(init,
                 initResolver:(RCTPromiseResolveBlock)resolve
                 initRejecter:(RCTPromiseRejectBlock)reject)
{
  _helloWorldInterface = [DJNSHelloWorld create];
  NSString *response = [_helloWorldInterface getHelloWorld];
  
  if (response) {
    resolve(response);
  } else {
    reject(@"get_error", @"Error with init", nil);
  }
}

@end
