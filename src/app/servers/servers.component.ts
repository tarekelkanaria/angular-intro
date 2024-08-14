import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, FormsModule, NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  createServerStatus = 'No new server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['First test', 'Second test'];
  shownDetails = false;
  allLogs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.createServerStatus = 'New server was created!';
  }
  onUpdateServerName(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onAddUser() {
    this.userName = '';
  }
  onToggleDisplay() {
    const date = new Date();
    // this.allLogs.push(`display is clicked ${date.toISOString()}`);
    this.allLogs.push(date);
    this.shownDetails = !this.shownDetails;
  }
  // changeBackground(log: string) {
  //   const selectedIndex = this.allLogs.findIndex(
  //     (inLog, index) => inLog === log && index >= 4
  //   );
  //   return selectedIndex !== -1
  //     ? { background: 'blue', color: true }
  //     : { background: '', color: false };
  // }
}
