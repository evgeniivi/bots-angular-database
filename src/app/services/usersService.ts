import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../entities/user';
import { DataService } from '../services/dataService';


@Injectable()
export class UsersService {
  constructor(private dataService: DataService) {
  	this.dataService.getUsers().subscribe((users) => {
      UsersService.setUsers(users);
      UsersService.usersAll = users;
    });
  }

  public static users: User[];
  public static usersAll: User[];
  public static changed: EventEmitter<any> = new EventEmitter<any>();
  public static loaded: EventEmitter<any> = new EventEmitter<any>();

  public static setUsers(users){
  	UsersService.users = users;
  	UsersService.changed.emit();
  }

  public getUsers(){
    this.dataService.getUsers().subscribe((users) => {
      UsersService.loaded.emit();
    });
  }
}