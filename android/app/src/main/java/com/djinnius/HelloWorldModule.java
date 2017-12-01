package com.djinnius;

import android.util.Log;


import java.lang.Exception;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class HelloWorldModule extends ReactContextBaseJavaModule {
    
    public HelloWorldModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public String getHelloWorld(){
        return HelloWorld.create().getHelloWorld();
    }

    @ReactMethod
    public void init(Callback errorCallback,Callback successCallback){
       try {
        System.loadLibrary("helloworld_jni");
        successCallback.invoke(HelloWorld.create().getHelloWorld());
      } catch (UnsatisfiedLinkError e) {
        successCallback.invoke(e.getMessage().toString());
      }
    }

    @Override
    public String getName() {
        return "HelloWorld";
    }
}
