import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { MessageService, ModalService } from '../';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: __moduleName,
  selector: 'ev-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['Dashboard'] },
      { caption: 'Speakers', link: ['Speakers'] },
      { caption: 'Sessions', link: ['Sessions'] }
    ];
  }

  constructor(
    private _messageService: MessageService,
    private _modalService: ModalService) {
  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this._messageService.resetDb();
      }
    });
  }
}
