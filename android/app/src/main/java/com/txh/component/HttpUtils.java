package com.txh.component;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by dianjoy on 2017/1/11.
 */

public class HttpUtils extends ReactContextBaseJavaModule {
    public HttpUtils(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HttpUtils";
    }
    @ReactMethod
    public void requestNetwork(String url,String params){

    }
}
