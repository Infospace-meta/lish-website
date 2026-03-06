import { Component } from '@angular/core';

@Component({
  selector: 'contact-details',
  imports: [],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <p class="mb-2">
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p class="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p class="mb-2"><strong>Email:</strong> info@example.com</p>
        <ul>
          <li class="mb-1">Partnering with over 80 growing companies</li>
          <li class="mb-1">Serving 100+ clients globally</li>
          <li class="mb-1">Over 500 skilled professionals</li>
          <li class="mb-1">Operating in 10+ countries</li>
          <li class="mb-1">100% client satisfaction rate</li>
        </ul>
      </div>
      <div>contact-details works!</div>
    </div>
  `,
})
export class ContactDetails {}
