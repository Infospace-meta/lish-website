import { Component } from '@angular/core';

@Component({
  selector: 'contact-details',
  imports: [],
  template: `
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto max-w-7xl px-5 md:py-14 py-8 min-h-[75vh] items-center"
    >
      <div class="flex flex-col space-y-10">
        <h5 class="text-complement">Contact</h5>
        <h2
          class="md:text-[48px] text-[36px] md:leading-12 leading-9 tracking-tight"
        >
          Let’s develop your business intelligence
          <span class="text-accent">together</span>
        </h2>

        <h4 class="">Kenyatta Avenue, Nakuru</h4>
        <div>
          <p class="underline ">(123) 456-7890</p>
          <p class="underline ">info@example.com</p>
          <p class="underline ">Linkein</p>
        </div>
        <ul class="flex flex-col">
          <li class="flex gap-1">
            <span class="material-symbols-outlined text-complement rounded-full"
              >check</span
            >
            <p class="">Partnering with over 10 growing companies</p>
          </li>
          <li class=" flex items-center gap-1">
            <span class="material-symbols-outlined text-complement rounded-full"
              >check</span
            >
            <p class="">Serving 100+ clients globally</p>
          </li>
          <li class=" flex items-center gap-1">
            <span class="material-symbols-outlined text-complement rounded-full"
              >check</span
            >
            <p class="">Over 700 skilled professionals</p>
          </li>
          <li class=" flex items-center gap-1">
           <span class="material-symbols-outlined text-complement rounded-full"
              >check</span
            >
            <p class="">100% client satisfaction rate</p>
          </li>
        </ul>
      </div>
      <div class="bg-secondary p-0.5 rounded-lg h-[47vh]">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gibcon%20House,%20Nakuru+(Lish%20AI)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  `,
})
export class ContactDetails {}
