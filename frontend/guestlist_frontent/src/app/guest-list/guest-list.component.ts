import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.css'
})
export class GuestListComponent implements OnInit {
  guests: any[] = [];

  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.guestService.getGuests().subscribe((data) => {
      this.guests = data;
    });
  }
}
