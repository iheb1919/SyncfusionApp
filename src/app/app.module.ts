import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './dashbord/main-container/main-container.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { SideBarComponent } from './dashbord/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { AppBarModule, MenuModule, SidebarModule,ToolbarAllModule,AccordionModule   } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartLinearComponent } from './components/chart-linear/chart-linear.component';
import { ChartModule, LineSeriesService,CategoryService } from '@syncfusion/ej2-angular-charts';
import {  LegendService, TooltipService, DataLabelService, } from '@syncfusion/ej2-angular-charts';
import { TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SideBarComponent,
    HomeComponent,
    NavbarComponent,
    ChartLinearComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
    ToolbarAllModule,
    AppBarModule,
    ChartModule,
    AccordionModule ,
    TreeViewAllModule
    
    
    
  ],
  providers: [
    LineSeriesService,
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
    
  
  ]
    
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
