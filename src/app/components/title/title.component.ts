import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', { static: true}) trailer: ElementRef<HTMLVideoElement> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    if(this.trailer != undefined){
      this.trailer.nativeElement.play();
    }
  }

  stopVideo(){
    if (this.trailer != undefined){
      this.trailer.nativeElement.currentTime = 0;
      this.trailer.nativeElement.pause();    
    } 
      
  }

  getMuted(): boolean{    
    return this.trailer != undefined? this.trailer.nativeElement.muted : false
  }

  toggleSound(){
    if(this.trailer != undefined) this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }
}
