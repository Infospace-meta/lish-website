import { Component } from '@angular/core';

@Component({
  selector: 'cta-career-card',
  imports: [],
  template: `
    <div
      class="bg-white rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-16 px-5 max-md:mx-3 py-10 md:py-28 md:my-20"
    >
      <div class="space-y-10">
        <h3
          class="md:text-[48px] text-[36px] md:leading-12 leading-9 tracking-tight"
        >
          Let’s develop your business intelligence
          <span class="text-accent">together</span>
        </h3>
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
        <button
          class="bg-accent hover:bg-complement text-white py-2 px-4 rounded-full"
        >
          Join the Team
        </button>
      </div>
      <div class="p-2">
        <img
          src="https://res.cloudinary.com/dpfcle0os/image/upload/v1772716374/samples/Lish-website/IMG_5217_jy2b5d.jpg"
          alt="Team Photo"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  `,
})
export class CtaCareerCard {}
