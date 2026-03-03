import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-wrapper',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {}
