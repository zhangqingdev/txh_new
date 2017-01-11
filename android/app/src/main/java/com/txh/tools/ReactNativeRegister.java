package com.txh.tools;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.toast.ToastModule;
import com.facebook.react.uimanager.ViewManager;
import com.txh.component.HttpUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by dianjoy on 2017/1/11.
 */

public class ReactNativeRegister implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return null;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return null;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       List<NativeModule> modules=new ArrayList<>();
        modules.add(new HttpUtils(reactContext));
        return null;
    }
}
