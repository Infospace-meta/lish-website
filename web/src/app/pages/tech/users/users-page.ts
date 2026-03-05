import { Component } from '@angular/core';
import { UserProfile } from '../../../components/tech/user-profile/user-profile.component';

@Component({
  selector: 'app-users',
  imports: [UserProfile],
  template: `
    <div>
      <app-user-profile />  
    </div>
  `,
})
export class UsersPage {

}
