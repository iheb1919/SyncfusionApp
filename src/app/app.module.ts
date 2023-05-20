import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { ChartAllModule , LineSeriesService,CategoryService } from '@syncfusion/ej2-angular-charts';
import {  LegendService, TooltipService, DataLabelService, } from '@syncfusion/ej2-angular-charts';
import { TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';
import { LoginComponent } from './components/login/login.component';
import { GuardService } from './services/guard.service';
import {HttpClientModule} from '@angular/common/http'
import { GridAllModule,PagerAllModule, PageService,SortService,FilterService } from '@syncfusion/ej2-angular-grids';

import { TableGridComponent } from './components/table-grid/table-grid.component';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AuthServices } from './services/auth.service';
import { HartUulmnComponent } from './components/hart-uulmn/hart-uulmn.component';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';

import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';
import { SparklineComponent, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';
import { LineSparkComponent } from './components/line-spark/line-spark.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ProgressBarAllModule } from '@syncfusion/ej2-angular-progressbar';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SideBarComponent,
    HomeComponent,
    NavbarComponent,
    ChartLinearComponent,
    LoginComponent,
    TableGridComponent,
    HartUulmnComponent,
    LineSparkComponent,
    UpdateDataComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
    ToolbarAllModule,
    AppBarModule,
    ChartAllModule ,
    AccordionModule ,
    TreeViewAllModule,
    HttpClientModule,
    GridAllModule,
    PagerAllModule,
    CarouselModule,
    TextBoxModule,
    DialogModule,
    CheckBoxModule,
    SparklineAllModule,
    SliderModule,  
    ProgressBarAllModule,
    ListViewAllModule,


    
    
],
  providers: [
    LineSeriesService,
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
    GuardService,
    AuthServices,
    PageService,
    SortService,
    FilterService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
