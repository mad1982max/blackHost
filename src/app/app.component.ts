import { Component, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  floors: string[] = ['1', '2', '3', '4', '5', '6', '7', 'U1', 'U2', 'U3'];
  floor: string;
  objectToHighlight: any;
  inputId: string = "01-X09-B";
  inputColor = "#4000ff";
  inputArea = "zones";

  constructor(private ref: ChangeDetectorRef) {
    let defaultFloor = '1';
    let params = window.location.search.split('=');
    if (params[0].includes('floor') && this.floors.indexOf(params[1]) > -1) {
        this.floor = params[1];
    } else {
      this.floor = defaultFloor;
      console.log(`--Bad params. Default floor: ${defaultFloor} was loaded`);      
    }
  }

  highLight(): void {   
    this.objectToHighlight = {
      id: this.inputId,
      area: this.inputArea,
      color: this.inputColor
    }
  }

  changeFloor(floor: string): void {
    this.objectToHighlight = undefined;
    this.floor = floor;
    console.log('NEW FLOOR: ', this.floor);
  }

  getCurrentCell(cell: string): void {
    this.inputId = cell;
    this.ref.detectChanges();
  }
}
