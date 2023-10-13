package com.msapp; // replace your-apps-package-name with your app’s package name

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.paysprint.onboardinglib.activities.HostActivity;
import java.util.HashMap;
import java.util.Map;

public class MyNativeModule
  extends ReactContextBaseJavaModule
  implements ActivityEventListener {

  private ReactApplicationContext reactContext;

  MyNativeModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "MyModule";
  }

  @ReactMethod
  public void callNativeModule(String name, String location, Callback cb) {
    Log.d(
      "MyNativeModule",
      "Create event called with name: " + name + " and location: " + location
    );
    String eventId = name + "---" + location;
    cb.invoke(eventId);
    callNewIntent();
  }

  public void callNewIntent() {
    Intent intent = new Intent(reactContext, HostActivity.class);
    intent.putExtra("pId", "PS001133");
    intent.putExtra(
      "pApiKey",
      "UFMwMDExMzNjYTcwNTYzZWQ2MWZjOTJhOTIxODcxODkwZWY3ZDg5Zg=="
    );
    intent.putExtra("mCode", "PQA1000002"); //merchant unique code and should not contain special character
    intent.putExtra("mobile", "6206981828"); // merchant mobile no.
    intent.putExtra("lat", "26.846695");
    intent.putExtra("lng", "80.946167");
    intent.putExtra("firm", "PAYQUICK ESERVICES PRIVATE LIMITED");
    intent.putExtra("email", "shiv.k9031@gmail.com");
    intent.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    reactContext.startActivity(intent);
  }


  @Override
  public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

  }

  @Override
  public void onNewIntent(Intent intent) {
    /* Do nothing */
  }
}
