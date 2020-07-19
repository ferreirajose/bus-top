import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavBarComponent } from '@shared-components/nav-bar/nav-bar.component';
import { SidebarComponent } from '@shared-components/sidebar/sidebar.component';
import { GoogleMapsComponent } from '@shared-components/google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    NavBarComponent,
    SidebarComponent,
    GoogleMapsComponent
  ],
  exports: [
    NavBarComponent,
    SidebarComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA94OXZPhuL-DB-zxo0MZhS9XK0ZPY70Yw',
      libraries: ['places']
    })
  ]
})
export class SharedModule { }
