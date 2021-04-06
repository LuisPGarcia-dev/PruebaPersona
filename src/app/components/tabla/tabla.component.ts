import { Component, OnInit } from '@angular/core';
import { TablaService } from 'src/app/services/tabla-service/tabla.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  informationList: any;
  headersList: any;
  informationStorage: any;

  constructor(private tablaService: TablaService) { 
    tablaService.getApiValues().subscribe(result => {
      this.informationStorage = result;
      this.headersList = Object.keys(this.informationStorage[0]);
      console.log(this.informationStorage[0], this.informationStorage);
      console.log(this.informationStorage, this.headersList);
    });
    this.informationList = JSON.parse(localStorage.getItem("result"));
  }

  ngOnInit(): void {
  }

  name: string;


  onSave(){
    // TIENE DETALLES A MEJORAR, PERO SOLO ES PRUEBA RAPIDA YA QUE NO CUENTO CON MUCHO TIEMPO
    console.log("some", this.name);
    const jsonHardCode = {first: this.name, last: 'Hardcode Data1', email: 'Hardcode Data2', address: 'Hardcode Data3', created: 'Hardcode Data4', balance: 'Hardcode data5'};
    this.informationList.push(jsonHardCode);
    localStorage.setItem('result' ,JSON.stringify(this.informationList));
    console.log( localStorage.length, localStorage, this.informationList, localStorage.getItem("result"));
    this.informationList = JSON.parse(localStorage.getItem("result"));
  }

}
