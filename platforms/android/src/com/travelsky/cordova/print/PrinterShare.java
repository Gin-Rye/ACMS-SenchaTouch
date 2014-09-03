package com.travelsky.cordova.print;

import java.io.File;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.file.FileUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

public class PrinterShare extends CordovaPlugin {
	CallbackContext callbackContext;

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		this.callbackContext = callbackContext;
		Log.i("123", action);

		if (action.equals("print")) {
			// 获取args的第一个参数
			JSONObject file = args.getJSONObject(0);
			String filePath = file.getString("path");
			this.print(filePath);
			return true;
		}
		return false;

	}

	private void print(String filePath) {
		File pdf = new File(filePath);
		Intent intent = new Intent();

		ComponentName comp = new ComponentName(
				"com.dynamixsoftware.printershare",
				"com.dynamixsoftware.printershare.ActivityPrintPDF");
		intent.setComponent(comp);

		intent.setAction("android.intent.action.VIEW");

		intent.setType("application/pdf");
		intent.setData(Uri.fromFile(pdf));

		cordova.startActivityForResult((CordovaPlugin) this, intent, 200);
	}
}
