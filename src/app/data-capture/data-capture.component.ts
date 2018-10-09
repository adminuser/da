import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { MouseWheelDirective } from '../mousewheel.directive';

@Component({
  selector: 'app-data-capture',
  templateUrl: './data-capture.component.html',
  styleUrls: ['./data-capture.component.css']
})
export class DataCaptureComponent implements OnInit {
public title = 'Data Automata';
  public baseImgUrl = "./assets/dataimages/";
  public imageName = "automated_logo.png";
  public imageSrc: any = this.baseImgUrl+this.imageName;//"./assets/dataimages/img001.jpg";
  @Output() public childEvent = new EventEmitter<any>();
  
  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit(){
  }
  


  renderImageEvent(event, dataImage){
    this.imageSrc = this.baseImgUrl+dataImage;
    //console.log(event);
    //this.childEvent.emit(this.imageSrc);
  }

// Mousewheel zoomin and out - Start

  mouseWheelDir: string = '';
  imgWidth: any = 600;
  imgHeight: any = 500;

  mouseWheelUpFunc() {
    console.log('mouse wheel up');
    this.imgWidth = this.imgWidth+10;
    this.imgHeight = this.imgHeight+10
  }

  mouseWheelDownFunc() {
    console.log('mouse wheel down');
    this.imgWidth = this.imgWidth-10;
    this.imgHeight = this.imgHeight-10
  }

// Mousewheel zoomin and out - Start

  public dataToCapture = [
    {
      "Id": "4331",
      "Image":"img001.jpg",
      "FirstName": "",
      "LastName": "",
      "DateOfBirth": "",
      "Gender": ""
    },
    {
      "Id": "4332",
      "Image":"img002.jpg",
      "FirstName": "",
      "LastName": "",
      "DateOfBirth": "",
      "Gender": ""
    },
    {
      "Id": "4333",
      "Image":"img003.jpg",
      "FirstName": "",
      "LastName": "",
      "DateOfBirth": "",
      "Gender": ""
    },
    
  ];


}
