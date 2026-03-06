import { Component } from '@angular/core';

@Component({
  selector: 'contact-details',
  imports: [],
  template: `
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto max-w-7xl px-5 md:py-14 py-8"
    >
      <div>
        <small class="md:text-[16px] text-sm font-semibold text-accent mb-5">
          Contact
        </small>
        <h2
          class="md:text-[48px] text-[36px] md:leading-12 leading-9 tracking-tight font-semibold md:mb-10 mb-6"
        >
          Let’s develop your business intelligence
          <span class="text-accent">together</span>
        </h2>

        <p class="md:mb-10 mb-4 font-semibold text-[17px]">
          Kenyatta Avenue, Nakuru
        </p>
        <p class="mb-2 underline font-semibold">(123) 456-7890</p>
        <p class="mb-2 underline font-semibold">info@example.com</p>
        <p class="mb-2 underline font-semibold">Linkein</p>
        <ul class="md:my-10 mt-7">
          <li class="mb-1 flex items-center gap-1">
            <div
              class="flex items-center gap-1 mb-1 rounded-full border border-accent w-max"
            >
              <span
                class="material-symbols-outlined text-accent text-[14px] rounded-full"
                >check</span
              >
            </div>
            <p class="mb-1 text-[18px] ml-2">
              Partnering with over 10 growing companies
            </p>
          </li>
          <li class="mb-1 flex items-center gap-1">
            <div
              class="flex items-center gap-1 mb-1 rounded-full border border-accent w-max"
            >
              <span
                class="material-symbols-outlined text-accent text-[14px] rounded-full"
                >check</span
              >
            </div>
            <p class="mb-1 text-[18px] ml-2">Serving 100+ clients globally</p>
          </li>
          <li class="mb-1 flex items-center gap-1">
            <div
              class="flex items-center gap-1 mb-1 rounded-full border border-accent w-max"
            >
              <span
                class="material-symbols-outlined text-accent text-[14px] rounded-full"
                >check</span
              >
            </div>
            <p class="mb-1 text-[18px] ml-2">Over 700 skilled professionals</p>
          </li>
          <li class="mb-1 flex items-center gap-1">
            <div
              class="flex items-center gap-1 mb-1 rounded-full border border-accent w-max"
            >
              <span
                class="material-symbols-outlined text-accent text-[14px] rounded-full"
                >check</span
              >
            </div>
            <p class="mb-1 text-[18px] ml-2">100% client satisfaction rate</p>
          </li>
        </ul>
      </div>
      <div class="bg-accent p-10 rounded-lg">contact-details works!</div>
    </div>
  `,
})
export class ContactDetails {}
