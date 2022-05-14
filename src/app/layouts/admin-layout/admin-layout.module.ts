import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { AccouuntComponent } from "../../pages/accouunt/accouunt.component";
import { AccountListComponent } from "../../components/account/account-list/account-list.component";
import { AccountFormComponent } from "../../components/account/account-form/account-form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AccountDetailsComponent } from "../../pages/account-details/account-details.component";
import { MovementsComponent } from "app/pages/movements/movements.component";
import { MovementListComponent } from "app/components/movements/movement-list/movement-list.component";
import { CreateMovementComponent } from "app/pages/create-movement/create-movement.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    AccouuntComponent,
    CreateMovementComponent,
    AccountListComponent,
    AccountFormComponent,
    MovementsComponent,
    AccountDetailsComponent,
    MovementListComponent,
    NotificationsComponent,
  ],
})
export class AdminLayoutModule {}
