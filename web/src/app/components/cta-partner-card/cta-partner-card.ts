import { Component } from '@angular/core';

@Component({
  selector: 'cta-partner-card',
  imports: [],
  template: `
    <div
      class="bg-white rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-16 px-5 max-md:mx-3 py-5 md:py-16 "
    >
      <div class="flex flex-col items-start justify-center gap-6">
        <h3
          class=""
        >
          We
          <span class="text-accent underline underline-offset-3"
            >accelerate</span
          >
          our partners’ growth with the power of business intelligence.
        </h3>
        <button
          class="bg-accent hover:bg-complement text-white py-2 px-4 rounded-full"
        >
          Partner with Us
        </button>
      </div>
      <div class="p-2">
        <img
          src="https://res.cloudinary.com/dpfcle0os/image/upload/v1706975520/samples/Lish-website/aboutlish_mc39qx.jpg"
          alt="Team Photo"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  `,
})
export class CtaPartnerCard {}
