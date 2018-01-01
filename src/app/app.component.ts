import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();

      var width = self.window.innerWidth;
      var height = self.window.innerHeight;


      var c = <HTMLCanvasElement> document.getElementById("myCanvas");
      c.width = width;
      c.height = height;

      var ctx = c.getContext("2d");

      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.stroke();

      ctx.moveTo(0, height);
      ctx.lineTo(width, 0);
      ctx.stroke();
    });
  }
}
