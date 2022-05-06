import { Component, Input, OnInit, Output } from "@angular/core";
import { Account } from "app/models/account";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"],
})
export class AccountListComponent implements OnInit {
  @Input()
  accounts: Account[] = [];
  @Output()
  teste = new EventEmitter();

  @Input()
  testeFamilia;
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  getUpdate(id: number) {
    this.router.navigate(["/account-details", { id: id }]);
  }

  delete(id: number) {
    let index = this.accounts.findIndex((x) => x.id == id);
    console.log(index);
    this.accounts.splice(index, 1);

    this.toastr.success("Deletado com Sucesso");
    this.teste.emit("teste");
  }
}
