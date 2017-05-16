import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ida-e-volta',
  templateUrl: './ida-e-volta.component.html',
  styleUrls: ['./ida-e-volta.component.scss']
})
export class IdaEVoltaComponent implements OnInit {

  constructor() {}

  cities = [
    {name: 'Rio de Janeiro', img: "../../../assets/img/RioDeJaneiro.jpg", color: "#3C6995;", tag: "#praia"},
    {name: 'Salvador', img: "../../../assets/img/Salvador.jpg", color: "#2F6575" , tag: "#praia"},
    {name: 'Jericoacoara', img: "../../../assets/img/Jericoacoara.jpg", color:"#657930", tag: "#praia"},
    {name: 'Guaramiranga', img: "../../../assets/img/Red_Rocket.jpg", color: "#39678F", tag: "#serra"},
    {name: 'Belo Horizonte', img: "../../../assets/img/Minas Gerais.jpg", color: "#2F755E" , tag: "#serra"},
    {name: 'Manaus', img: "../../../assets/img/Manaus.jpg", color: "#6C7E31", tag: "#floresta"}
  ]

  months= [
    { id: 1, name: 'maio' },
    { id: 2, name: 'junho' },
    { id: 3, name: 'julho' },
    { id: 4, name: 'agosto' },
    { id: 5, name: 'setembro' },
    { id: 6, name: 'outubro' }
  ];

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
  
  wkdays = [
    { id: 11, name: 'Fim de semana'},
    { id: 12, name: '1 semana'},
    { id: 13, name: '2 semanas'}
  ];

  selectedMonth: any;
  selectedOption = 'datas';
  selectedPlace: any;
  selectedTag: any;
  selectedWkDay: any;

  ngOnInit() {
  }

  getDestinos(any: string){
    return any;
  }

  onSelectM(month: any) {
    this.selectedMonth = month;
  }
  
  onSelectO(option:any){
    this.selectedOption = option;
  }

  onSelectPLC(place: any) {
    this.selectedPlace = place;
  }

  onSelectT(tag: any) {
    this.selectedTag = tag;
  }

  onSelectWD(wkday: any) {
    this.selectedWkDay = wkday;
  } 

}