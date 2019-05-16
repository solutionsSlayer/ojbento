import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
  MatButtonModule, MatGridListModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './page/product/product.component';
import { MenuComponent } from './page/menu/menu.component';
import { Globals } from './globals';
import { PopComponent } from './page/pop/pop.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent, data : { title: 'Produits JPEG'} },
  { path: 'menu', component: MenuComponent, data : { title: 'Menu JPEG'} },
  { path: 'pop', component: PopComponent, data : { title: 'Pop JPEG'} },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    PopComponent
  ],
  imports: [
    MatGridListModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatListModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
