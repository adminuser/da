import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ZoomableCanvasComponent } from '@durwella/zoomable-canvas';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataCaptureComponent } from './data-capture/data-capture.component';
//import { ZoomablecanvasComponent } from './zoomablecanvas/zoomablecanvas.component';

import { MouseWheelDirective } from './mousewheel.directive';
import { FormsModule } from '@angular/forms';

import { SuperadminComponent } from './superadmin/superadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    DataCaptureComponent,
    //ZoomablecanvasComponent
    MouseWheelDirective,
    SuperadminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
// bootstrap: [SuperadminComponent]
})
export class AppModule { }
