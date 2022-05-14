import { Component, Input, OnInit } from "@angular/core";
import { Movement } from "app/models/movement";

@Component({
  selector: "app-movement-list",
  templateUrl: "./movement-list.component.html",
  styleUrls: ["./movement-list.component.css"],
})
export class MovementListComponent implements OnInit {
  @Input()
  movements: Movement[] = [];
  constructor() {}

  ngOnInit(): void {}
}
