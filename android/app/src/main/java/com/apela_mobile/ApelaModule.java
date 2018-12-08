package com.apela_mobile;

import android.app.Activity;
import android.graphics.Color;
import android.view.Window;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ApelaModule extends ReactContextBaseJavaModule {

    public ApelaModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ApelaModule";
    }

    @ReactMethod
    public void unsetWindowBackground() {
        updateWindowBackground(getCurrentActivity(), false);
    }

    @ReactMethod
    public void setWindowBackground() {
        updateWindowBackground(getCurrentActivity(), true);
    }

    private void updateWindowBackground(final Activity activity, final boolean show) {
        if (activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Window window = activity.getWindow();
                    if (window != null) {
                        if (show) {
                            window.getDecorView().setBackground(activity.getResources().getDrawable(R.drawable.splashscreen));
                        } else {
                            window.getDecorView().setBackgroundColor(Color.WHITE);
                        }
                    }
                }
            });
        }
    }
}
