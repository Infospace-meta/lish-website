import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
})
export class TeamSectionComponent {
  teamMembers = [
    {
      name: 'Amara Okafor',
      role: 'Founding Director',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDdhaepjlv4RUCD3FF83gmWaRaRAEF8pnsY5Vqd6CqooYO1sSKwQg84AeEBTT_Pr10rHEkKE2aW7Phr615-bN6O-baHr4wUPxFJAf_Ib491uLj3GeVjeeIm4Dv7Du9ITkJLDGPSC9VGmNZD9HHji-F4UaaciAsQwPVin8Bwy8uzRtOyWW0GG7nilMQy1szyc8R8yDzWowiwy0mG9LmkhdoUJFK00_PrhDbv9ibn2hNofctjxLpqap22t2pdj550vhePNi7cRL3nhkzP',
      featured: true, 
    },
    {
      name: 'David Chen',
      role: 'Lead Research Engineer',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAtF9wKpjl7Al32MuvLy97IhHfkUx_v7sSveGlEwyKsYhASk8KyLRbfjJkbyyd9uTl36PAsLbKtjTJmyktxyrtvL_FNpK_q9PPVqSqB3LP65H1EdNZj7NA62HyyBl9ixLIP1mRtgCmWQz5tDQoSiJOZE5bAGOZK-PLvZbMiwkSOORIr95QZ8HVlghH7TEH3et3qRlom1hj-IoQ1qPS-LukPXgi1-uALY1lgUUrKRW57Im7w3j6xN9DRiR2CVeWDwyeTMOiACGvIdo0x',
      featured: false,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Strategic Designer — Product',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA1VUG9LJ4w_LQN7JChcOPYZlrDoG8N_ZiZufzk1E6hynvndY-t4V__y_DP3p-Pag_klqineeptv_dP2o6Egd-dRy6uWQPowYmOCkq_pyVzj8HMN1cHLLbDZUpB311gmE0zalAMqveBRxdGG7c_VTzE3eI8CTsF1-Pb5yvKR3AZkdjSrbyysfPDZ1I99-vL3FzKYrQNIDA1Ojd_0QXR2b7qQTAjbFyYAI6iioUr6U9kGlIXy1o-fPoPstZr4HuR5UyXJMw60xMkc9bc',
      featured: false,
    },
    {
      name: 'Marcus Thorne',
      role: 'Data valorization consultant',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCXgsoWWFsMbUHhYp0FWMAjZk4uDKLHLwliupxcZ3hABzfN1jxBWrWRC6cz9x_lcJFe2o3vNEAIrW7rYKdpVdTcgrn2u_JbwMAzJvUWkoZYw2-YBHx_1sJlAimvRXJakRSvxrRW40F_sd_DybTxS3rL7sLbbNSvPCDOFDI7FNv179hjIZ4lVQ6Wlhy1BjNxyfLQbhAVhbkCBAot2pTRuCjwQt0w1FVP_m-1rlOjZay0qhbQPflqKsDxEeR-3kyvgVee0nrn8t93LPUa',
      featured: false,
    },
    {
      name: 'Elena Rodriguez',
      role: 'AI Ethics Lead',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAtF9wKpjl7Al32MuvLy97IhHfkUx_v7sSveGlEwyKsYhASk8KyLRbfjJkbyyd9uTl36PAsLbKtjTJmyktxyrtvL_FNpK_q9PPVqSqB3LP65H1EdNZj7NA62HyyBl9ixLIP1mRtgCmWQz5tDQoSiJOZE5bAGOZK-PLvZbMiwkSOORIr95QZ8HVlghH7TEH3et3qRlom1hj-IoQ1qPS-LukPXgi1-uALY1lgUUrKRW57Im7w3j6xN9DRiR2CVeWDwyeTMOiACGvIdo0x',
      featured: false,
    },
    {
      name: 'Julian Kwesi',
      role: 'Machine Learning Engineer',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA1VUG9LJ4w_LQN7JChcOPYZlrDoG8N_ZiZufzk1E6hynvndY-t4V__y_DP3p-Pag_klqineeptv_dP2o6Egd-dRy6uWQPowYmOCkq_pyVzj8HMN1cHLLbDZUpB311gmE0zalAMqveBRxdGG7c_VTzE3eI8CTsF1-Pb5yvKR3AZkdjSrbyysfPDZ1I99-vL3FzKYrQNIDA1Ojd_0QXR2b7qQTAjbFyYAI6iioUr6U9kGlIXy1o-fPoPstZr4HuR5UyXJMw60xMkc9bc',
      featured: false,
    },
  ];
}
