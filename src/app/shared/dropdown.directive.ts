// import { Directive, HostBinding, HostListener } from "@angular/core";

// @Directive({
//     selector: '[appDropDown]'
// })
// export class DropDownDirective{

//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') onToggle(){
//         this.isOpen = !this.isOpen;
//     }

// }


import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() {}

  @HostListener('click') toggleManageRecipe() {
    this.isOpen = !this.isOpen;
  }
}
