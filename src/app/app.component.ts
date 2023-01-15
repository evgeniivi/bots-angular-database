import { Component, OnInit } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';

import { UsersService } from './services/usersService';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
	constructor(private usersService: UsersService) {
		UsersService.loaded.subscribe(() => {
  			this.users = UsersService.users;
  		})
	}

	users: any;
	
	ngOnInit(){
		this.usersService.getUsers();
	}
}