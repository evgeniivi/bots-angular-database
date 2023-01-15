import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UsersService } from '../../services/usersService';
import { MatDatepicker} from '@angular/material';
import { MatFormField} from '@angular/material';
import { MatFormFieldControl} from '@angular/material';
import { MatInput} from '@angular/material';

@Component({
    selector: 'filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit{
	constructor(private usersService: UsersService) {
  		UsersService.loaded.subscribe(() => {
  			this.limit();
  		})
	}

	users: any;
	lastName: string = "";
	dobFrom: string = "";
	dobTo: string = "";
	phone: string = "";
	location: string = "";
	page: number = 0;
	pages: number = 1;
	pagesArray: any;
	pageSize: number = 10;
	pageSizes = [10, 20, 30];



	ngOnInit(){		

	}

	getData(){		
	}


	clickPage(i) {
		this.page = i;
		this.onChange();
	}

	getPageClass(i){
		return i === this.page ? "active": "";
	}



	onChangeLocation($event) {
		this.location = $event.target.value;
		this.onChange();
	}

	onChangeLastName($event) {
		this.lastName = $event.target.value;
		this.onChange();
	}

	onChangePhone($event) {
		this.phone = $event.target.value;
		this.onChange();
	}

	onChangeDob($event) {
		this.onChange();
	}



	onChange(){
		UsersService.setUsers(UsersService.usersAll);
		this.filter();
	}

	filter(){
		this.filterLastName(this.lastName);
		this.filterPhone(this.phone);
		this.filterDob(this.dobFrom, this.dobTo);
		this.filterLocation(this.location);
		this.limit();
	}

	filterLastName(lastName) {
		UsersService.setUsers(UsersService.users.filter((user) => {
			return user.last_name.indexOf(lastName) !== -1
		}));
	}

	filterPhone(phone) {
		UsersService.setUsers(UsersService.users.filter((user) => {
			return user.phone.indexOf(phone) !== -1
		}));
	}

	filterDob(dobFrom, dobTo) {
		UsersService.setUsers(UsersService.users.filter((user) => {
			return (!dobFrom || new Date(user.birth_date) > new Date(dobFrom)) && (!dobTo || new Date(user.birth_date) < new Date(dobTo))
		}));
	}

	filterLocation(city) {
		UsersService.setUsers(UsersService.users.filter((user) => {
			return user.city.indexOf(city) !== -1
		}));
	}

	limit(){
		this.pages = Math.ceil(UsersService.users.length / this.pageSize);
		this.pagesArray = Array.apply(null, {length: this.pages}).map(Number.call, Number)
		UsersService.setUsers(UsersService.users.slice(this.page * this.pageSize, this.page * this.pageSize + this.pageSize));
	}
}