import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  privacyPolicy: string;

  constructor(private http: HttpClient, private  router: Router) { }

  ngOnInit(): void {
    const googleButtonScript = document.createElement('script');
    googleButtonScript.type = 'text/javascript';
    googleButtonScript.innerText = `
      (() => {
        if (localStorage.getItem('myUserEntity') != null) {
          var userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
          window.location.replace('/home');
        } else {
          gapi.load('auth2', () => {
            auth2 = gapi.auth2.init({
              client_id: '663356946726-ibs27ckiu8pnu9dhpoflmnuvs5bvjkb8.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
            });
            auth2.attachClickHandler(
              document.getElementById('customBtn'), {},
              (googleUser) => {
                var profile = googleUser.getBasicProfile();
                var myUserEntity = {};
                myUserEntity.Id = profile.getId();
                myUserEntity.Name = profile.getName();
                localStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));
                window.location.replace("/home");
              },
              (error) => console.log(JSON.stringify(error, undefined, 2))
            );
          });
        }
      })();
    `;

    document.getElementsByTagName('head')[0].appendChild(googleButtonScript);
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
