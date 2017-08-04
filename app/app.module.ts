import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from 'nativescript-angular';
import { routes } from './app.routes';
import { WordsComponent } from './components/words/words.component';
import { WordComponent } from './components/word/word.component';
import { WordModifyComponent } from './components/word-modify/word-modify.component';

@NgModule({
  declarations: [
      AppComponent,
      WordsComponent,
      WordComponent,
      WordModifyComponent
  ],
  bootstrap: [
      AppComponent
  ],
  imports: [
      NativeScriptModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
  ],
  schemas: [
      NO_ERRORS_SCHEMA
  ],
})
export class AppModule {}
