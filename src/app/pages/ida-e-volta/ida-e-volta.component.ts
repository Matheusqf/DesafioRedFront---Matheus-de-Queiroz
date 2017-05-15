import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ida-e-volta',
  templateUrl: './ida-e-volta.component.html',
  styleUrls: ['./ida-e-volta.component.scss']
})
export class IdaEVoltaComponent implements OnInit {

  constructor() {}

  cities = [
    {name: 'rio', img: "../../../assets/img/RioDeJaneiro.jpg", color: "#3C6995;"},
    {name: 'salvador', img: "../../../assets/img/Salvador.jpg", color: "#2F6575" },
    {name: 'jeri', img: "../../../assets/img/Jericoacoara.jpg", color:"#657930"},
    {name: 'lua', img: "../../../assets/img/Lua.jpg", color: "#39678F"},
    {name: 'BH', img: "../../../assets/img/Minas Gerais.jpg", color: "#2F755E" },
    {name: 'manaus', img: "../../../assets/img/Manaus.jpg", color: "#6C7E31"}
  ]

  ngOnInit() {
  }

  getDestinos(any: string){
    return any;
  }

}
