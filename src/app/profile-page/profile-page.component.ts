import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const googleSignOutScript = document.createElement('script');
    googleSignOutScript.type = 'text/javascript';
    googleSignOutScript.innerText = `
      function googleSignOut() {
        gapi.load('auth2', () => {
            auth2 = gapi.auth2.init({
              client_id: '663356946726-ibs27ckiu8pnu9dhpoflmnuvs5bvjkb8.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
            });
          gapi.auth2.getAuthInstance().signOut().then(function () {
            console.log('User signed out.');
          });
        });
        localStorage.clear();
        window.location.replace('/sign-in');
      }
    `;

    document.getElementsByTagName('head')[0].appendChild(googleSignOutScript);
  }

}
