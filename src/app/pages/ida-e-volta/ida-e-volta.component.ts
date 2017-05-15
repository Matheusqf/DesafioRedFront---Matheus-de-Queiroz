import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ida-e-volta',
  templateUrl: './ida-e-volta.component.html',
  styleUrls: ['./ida-e-volta.component.scss']
})
export class IdaEVoltaComponent implements OnInit {

  constructor() {}


  months= [
    { id: 1, name: 'maio' },
    { id: 2, name: 'junho' },
    { id: 3, name: 'julho' },
    { id: 4, name: 'agosto' },
    { id: 5, name: 'setembro' },
    { id: 6, name: 'outubro' }
  ];

  wkdays = [
    { id: 11, name: 'Fim de semana'},
    { id: 12, name: '1 semana'},
    { id: 13, name: '2 semanas'}
  ];


  cities = [
    {name: 'rio', img: "../../../assets/img/RioDeJaneiro.jpg", color: "#3C6995;"},
    {name: 'salvador', img: "../../../assets/img/Salvador.jpg", color: "#2F6575" },
    {name: 'jeri', img: "../../../assets/img/Jericoacoara.jpg", color:"#657930"},
    {name: 'lua', img: "../../../assets/img/Lua.jpg", color: "#39678F"},
    {name: 'BH', img: "../../../assets/img/Minas Gerais.jpg", color: "#2F755E" },
    {name: 'manaus', img: "../../../assets/img/Manaus.jpg", color: "#6C7E31"}
  ]

  places = [
       { id: 1, name: "América do Norte"},
       { id: 2, name: "América do Sul"},
       { id: 3, name: "África"},
       { id: 4, name: "Europa"},
       { id: 5, name: "Ásia"},
       { id: 6, name: "Oceania"}
  ]

  tags = [
       { id: 1, name: "Cultura"},
       { id: 2, name: "Desporto de Inverno"},
       { id: 3, name: "Ecoturismo"},
       { id: 4, name: "Ilha"},
       { id: 5, name: "lua de mel"},
       { id: 6, name: "Praia"},
       { id: 7, name: "Turismo de aventura"},
       { id: 8, name: "Vida selvagem"},
       { id: 9, name: "ao ar livre"},
       { id: 10, name: "Compras"},
  ]

  selectedMonth: any;
  selectedWkDay: any;
  selectedOption = 'datas';
  selectedPlace: any;
  selectedTag: any;

  ngOnInit() {
  }

  getDestinos(any: string){
    return any;
  }
  
  onSelectO(option:any){
    this.selectedOption = option;
  }

  onSelectM(month: any) {
    this.selectedMonth = month;
  }

  onSelectWD(wkday: any) {
    this.selectedWkDay = wkday;
  }

  onSelectPLC(place: any) {
    this.selectedPlace = place;
  }

  onSelectT(tag: any) {
    this.selectedTag = tag;
  }

}
