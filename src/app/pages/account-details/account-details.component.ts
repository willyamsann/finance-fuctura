import { Component, OnInit } from "@angular/core";
import { Account } from "app/models/account";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.css"],
})
export class AccountDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  account: Account = {};
  id = 0;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id")) | 0;
    if (this.id != 0) {
      this.getAccount();
    }
    console.log(new Date());
  }

  submit() {
    console.log(this.account);
  }

  getAccount() {
    let account: Account = {
      id: 1,
      name: "BB",
      type: "Corrente",
      value: 1500,
    };
    this.account = account;
  }
}
