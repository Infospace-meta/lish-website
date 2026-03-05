import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  template: `
    <a
      [routerLink]="profileUrl()"
      class="group block bg-white overflow-hidden rounded-xl transition-transform duration-300 hover:scale-y-[1.03] cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <!-- Photo container – 3:4 aspect ratio -->
      <div class="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100">
        <img
          [src]="image()"
          [alt]="name()"
          class="absolute inset-0 w-full h-full object-cover object-top ease-in-out transition-transform duration-300"
        />
      </div>

      <!-- Name & role -->
      <div class="mt-2.5 p-4">
        <h3 class="text-[100%] font-semibold text-neutral-900 leading-snug truncate">
          {{ name() }}
        </h3>
        <p class="text-[80%] text-neutral-500 mt-0.5 flex items-center gap-1.5 leading-snug">
          <span class="shrink-0 inline-block w-[5px] h-[5px] bg-red-600"></span>
          <span class="truncate ">{{ role() }}</span>
        </p>
      </div>
    </a>
  `,
})
export class UserCard {
  name = input<string>('');
  role = input<string>('');
  image = input<string>('pic.jpg');
  profileUrl = input<string>('tech/users');
}
