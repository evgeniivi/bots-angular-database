import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UsersService } from '../../services/usersService';

@Component({
    selector: 'user-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{
	constructor() {
	}

	users: any;

	ngOnInit(){		
		UsersService.changed.subscribe(() => {			
			this.users = UsersService.users;		
		})
		this.users = UsersService.users;
	}
}