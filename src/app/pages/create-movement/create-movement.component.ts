import { CurrencyPipe } from "@angular/common";
import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { Account } from "app/models/account";

@Component({
  selector: "app-create-movement",
  templateUrl: "./create-movement.component.html",
  styleUrls: ["./create-movement.component.css"],
})
export class CreateMovementComponent implements OnInit, PipeTransform {
  constructor() {}

  value: string;
  contas: Account[] = [];
  types: any[] = [
    {
      name: "Saida",
      value: "saida",
    },
    {
      name: "Entrada",
      value: "entrada",
    },
    {
      name: "Investimento",
      value: "investimento",
    },
    {
      name: "Impostos",
      value: "impostos",
    },
  ];

  ngOnInit(): void {
    this.initAccounts();
  }

  initAccounts() {
    let accountOne: Account = {
      id: 1,
      name: "Itau",
      type: "corrente",
    };
    let accountTwo: Account = {
      id: 1,
      name: "Caixa",
      type: "corrente",
    };

    this.contas.push(accountOne);
    this.contas.push(accountTwo);
  }

  transform(
    value: number | string,
    currencyCode: string = "BRL",
    symbolDisplay: boolean = true,
    digits?: string
  ): string {
    if (!value) {
      return "";
    }

    let currencyPipe: CurrencyPipe = new CurrencyPipe("pt-BR");
    let newValue: string = currencyPipe.transform(
      value,
      currencyCode,
      symbolDisplay,
      digits
    );
    console.log(newValue);
    this.value = newValue;
    console.log(this.value);
    return newValue;
  }
}
