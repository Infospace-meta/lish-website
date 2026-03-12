import { Component, computed } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { DevsCard } from '../../../components/tech/devs-card/devs-card.component';

interface DevJson {
  slug: string;
  name: string;
  role: string;
  image: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  profileUrl: string;
}

@Component({
  selector: 'app-team-page',
  imports: [DevsCard],
  template: `
    <!-- Full-page grayscale wrapper -->
    <div class="bg-white text-black overflow-x-hidden">

      <!-- intro section -->
      <div class="p-[4%] text-black flex flex-col lg:flex-row w-full gap-8 lg:gap-12 items-center">
        
        <!-- content  -->
        <div class="flex flex-col font-bold text-black w-full lg:w-[40%] lg:text-left px-4">
          <p class="text-2xl sm:text-3xl lg:text-4xl">
            We develop innovative AI solutions for <span class="font-bold">people</span>
          </p>
          <div class="mt-6 lg:mt-8">
            <button class="group relative px-4 py-2 md:px-6 md:py-3 bg-black text-white rounded-lg transition-colors duration-300 ease-in hover:bg-blue-700 overflow-hidden">
              <span class="relative block overflow-hidden ">
                <span class="hover:block transition-transform duration-1000 cursor-pointer ease-out translate-y-full group-hover:translate-y-0">
                  Learn More
                </span>
              </span>
            </button>

          </div>
        </div>
        
        <!-- team images section -->
        <div class="bg-gray-500 w-[60%] aspect-square max-w-[600px] min-w-[400px] md:w-full md:h-full rounded-lg">
          <!-- Image content -->
        </div>

      </div>

      <!-- team section -->
      <div class="max-w-6xl bg-gray-500 min-w-screen p-8">
        <h2 class="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <!-- ========== TEAM GRID ========== -->
      <section class="w-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                     gap-x-4 sm:gap-x-5 md:gap-x-6
                     gap-y-8 " 
            >
                      @for (member of teamMembers(); track member.name) {
                <app-user-card
                  [name]="member.name"
                  [role]="member.role"
                  [image]="member.image"
                  [profileUrl]="member.profileUrl"
                />
              }
            </div>
      </section>
      </div>
    </div>
  `,
})
export class TeamPage {
  private devsResource = httpResource<DevJson[]>(() => '/ourTeam/devs.json');

  teamMembers = computed<TeamMember[]>(() =>
    (this.devsResource.value() ?? []).map((d) => ({
      name: d.name,
      role: d.role,
      image: d.image,
      profileUrl: '/tech/team/' + d.slug,
    }))
  );

  loading = this.devsResource.isLoading;
}
