import { Component, OnInit } from "@angular/core";
import { IgxExpansionPanelComponent, IgxIconService } from "igniteui-angular";
import {Card} from "../card.blueprint";

@Component({
  selector: "app-card-styling-sample",
  templateUrl: "./card-styling-sample.component.html",
  styleUrls: ["./card-styling-sample.component.scss"]
})
export class CardStylingSampleComponent {
    public card = new Card({
        buttons: ["read more"],
        content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.`,
        icons: ["favorite", "share"],
        imageUrl: "assets/images/card/media/ny.jpg",
        subtitle: "City in New York",
        title: "New York City"
    });
}
