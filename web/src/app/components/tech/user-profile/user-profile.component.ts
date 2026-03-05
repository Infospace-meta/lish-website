import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  template: `
    <div class="bg-white flex-col text-black h-full w-full">
      <!-- user profile  -->
      <div class="w-full  p-[2%] flex flex-col md:flex-row md:gap-12 items-center justify-center">
        <!-- image -->
        <div class="bg-white rounded-2xl max-w-[500px] min-w-[350px] w-[100%]">
          <img src="{{ image() }}" alt="User Image" class="w-full max-h-md object-cover rounded-2xl" >
        </div>
        <!-- content -->
        <div class="p-8 max-w-2xl">
          <h1 class="text-2xl font-bold mb-4">{{ name() }}</h1>
          <p class="text-gray-600 mb-4"> <span class="shrink-0 inline-block w-[5px] h-[5px] bg-gray-500 "></span> {{ role() }}</p>
          <div class="mb-4"> 
            <p class="text-gray-700">{{ blog() }}</p>            
          </div>
        </div>

      </div>

      <!-- other team members section -->
      <div class="bg-gray-500 w-full h-full p-[2%] mt-8">
        <h2 class="text-2xl font-bold mb-4">Other Team Members</h2>
        <div class="flex flex-wrap gap-4">

          
        </div>
      </div>
    </div>
  `,
})
export class UserProfile {
  name = input<string>('Jane Kims');
  role = input<string>('Software Engineer');
  image = input<string>('placeholder.png');
  blog = input<string>(' lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum');
  certifications = input<string[]>([]);

}
