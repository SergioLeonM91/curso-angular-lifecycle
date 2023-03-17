import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styles: [
  ]
})
export class ShowNameComponent implements OnChanges {
  
  @Input() name!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
