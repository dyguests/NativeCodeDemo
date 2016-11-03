//
//  CalendarManager.m
//  NativeCodeDemo
//
//  Created by apple on 2016/11/3.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import "RCTLog.h"
#import "RCTConvert.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
//}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
  // Date is ready to use!
  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"fdjsa" message:nil delegate:nil cancelButtonTitle:@"confirmwww" otherButtonTitles:nil, nil];
  [alert show];
}

@end
