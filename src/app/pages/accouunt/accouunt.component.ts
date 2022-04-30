import { Component, OnInit } from "@angular/core";
import { Account } from "app/models/account";

@Component({
  selector: "app-accouunt",
  templateUrl: "./accouunt.component.html",
  styleUrls: ["./accouunt.component.css"],
})
export class AccouuntComponent implements OnInit {
  accounts: Account[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getAccounts();
  }
  getAccounts() {
    let account: Account = {
      id: 1,
      name: "BB",
      type: "Corrente",
      value: 1500,
    };
    this.accounts.push(account);
  }
}
