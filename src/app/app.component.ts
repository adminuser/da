import { Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { DataCaptureComponent } from "./data-capture/data-capture.component";

import { MouseWheelDirective } from './mousewheel.directive';

//declare function require(path: any);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Data Automata';
  @ViewChild(DataCaptureComponent) child;
  public imageSrc:any;

  ngAfterViewInit() {
    //this.imageSrc = this.child.imageSrc;
  }

  ngOnInit(){
    //this.imageSrc = this.child.imageSrc;
  }
}


