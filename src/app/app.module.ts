import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule } from '@angular/material';
import {MatInputModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DataService } from './services/dataService';
import { UsersService } from './services/usersService';

import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
        ListComponent
    ],
    imports: [
        MatInputModule, MatNativeDateModule, MatFormFieldModule, BrowserAnimationsModule, MatDatepickerModule, BrowserModule, HttpClientModule, FormsModule
    ],
    providers: [ DataService, UsersService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { 
}
