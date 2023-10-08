import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carddesign',
  templateUrl: './carddesign.component.html',
  styleUrls: ['./carddesign.component.css']
})
export class CarddesignComponent {

 @Input() bg:string=''
 @Input() icon:string=''
 @Input() desc:string=''
 @Input() total:string=''
}
