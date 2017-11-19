import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MockFirebaseService } from './service/mock-firebase.service';
import { TransferComponent  } from "./transfer/transfer.component";
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'message', component: MessageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    LoginComponent,
    MessageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule, // Required to connect elements to Angular forms
    PolymerModule.forRoot(), // Only import .forRoot() once and at the highest level
 
    // Optional modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule
  ],
  providers: [
    MockFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
