import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  imageUrl =  "https://picsum.photos/200"
  isDisabled = true;
  value :any;

  user={
    name:"Chaitaly",
    age:24,
    profileImage:"https://picsum.photos/200",
  }

  isChecked = true;
  isReadOnly = true;
  isSpecial = true;
}
