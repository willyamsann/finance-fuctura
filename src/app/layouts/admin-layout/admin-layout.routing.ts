import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { AccouuntComponent } from "app/pages/accouunt/accouunt.component";
import { AccountDetailsComponent } from "../../pages/account-details/account-details.component";
import { MovementsComponent } from "app/pages/movements/movements.component";
import { CreateMovementComponent } from "app/pages/create-movement/create-movement.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "account", component: AccouuntComponent },
  { path: "account-details", component: AccountDetailsComponent },
  { path: "movements", component: MovementsComponent },
  { path: "create-movement", component: CreateMovementComponent },
];
