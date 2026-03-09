import { Component, computed, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { DevsProfile } from '../../../components/tech/devs-profile/devs-profile.component';

interface DevJson {
  slug: string;
  name: string;
  role: string;
  image: string;
  description: string;
  socials: Record<string, string>;
  qualifications: string[];
}

@Component({
  selector: 'app-devs-page',
  imports: [DevsProfile],
  template: `
    @if (dev()) {
      <app-user-profile
        [name]="dev()!.name"
        [role]="dev()!.role"
        [image]="dev()!.image"
        [description]="dev()!.description"
        [socials]="dev()!.socials"
        [qualifications]="dev()!.qualifications"
        [otherMembers]="otherMembers()"
      />
    }
  `,
})
export class DevsPage implements OnInit {
  private route = inject(ActivatedRoute);

  private devsResource = httpResource<DevJson[]>(() => '/ourTeam/devs.json');

  private slug = signal<string | null>(null);

  dev = computed<DevJson | null>(() => {
    const s = this.slug();
    if (!s) return null;
    return (this.devsResource.value() ?? []).find((d) => d.slug === s) ?? null;
  });

  otherMembers = computed(() =>
    (this.devsResource.value() ?? [])
      .filter((d) => d.slug !== this.slug())
      .map((d) => ({ slug: d.slug, name: d.name, role: d.role, image: d.image }))
  );

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug.set(params['slug'] ?? null);
    });
  }
}
