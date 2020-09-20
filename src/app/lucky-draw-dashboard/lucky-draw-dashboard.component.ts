import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucky-draw-dashboard',
  templateUrl: './lucky-draw-dashboard.component.html',
  styleUrls: ['./lucky-draw-dashboard.component.css']
})
export class LuckyDrawDashboardComponent implements OnInit {
  participationAccepted = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeHeader(event) {
    document.getElementsByClassName('active')[0].className = 'item font-size-3vw table-menu-not-active';
    event.target.className = 'item active font-size-5vw';
  }

  isParticipationAccepted() {
    if (!this.participationAccepted){
      this.participationAccepted = true;
      // @ts-ignore
      $('.ui.modal').modal('show');
    }
  }

}
