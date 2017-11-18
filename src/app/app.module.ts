import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule, // Required to connect elements to Angular forms
    PolymerModule.forRoot(), // Only import .forRoot() once and at the highest level
 
    // Optional modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
