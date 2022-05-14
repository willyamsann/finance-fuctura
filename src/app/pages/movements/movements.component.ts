import { Component, OnInit } from "@angular/core";
import { Movement } from "app/models/movement";

@Component({
  selector: "app-movements",
  templateUrl: "./movements.component.html",
  styleUrls: ["./movements.component.css"],
})
export class MovementsComponent implements OnInit {
  constructor() {}
  movements: Movement[] = [];

  ngOnInit(): void {
    this.initMovement();
  }

  initMovement() {
    let newMovement: Movement = {
      name: "Padaria",
      type: "saida",
      value: 12,
      date: "01/01/2022",
      account: {
        name: "Caixa",
        type: "Corrente",
      },
    };
    let newMovementTwo: Movement = {
      name: "Mercadinho",
      type: "saida",
      value: 100,
      date: "01/01/2022",
      account: {
        name: "Caixa",
        type: "Corrente",
      },
    };

    this.movements.push(newMovement);
    this.movements.push(newMovementTwo);
    console.log(this.movements);
  }
}
