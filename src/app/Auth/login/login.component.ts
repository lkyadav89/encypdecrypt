import { Component } from '@angular/core';
import { ManageBlogsComponent } from '../../Admin/manage-blogs/manage-blogs.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ManageBlogsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
