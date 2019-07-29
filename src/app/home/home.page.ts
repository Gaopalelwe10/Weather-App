import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  info:FormGroup;
  // city:string="London";
  city="";
  ci:string="Pretoria";
  list;
  weatherData=[];
  windlist;
  cities: any[]=[];
  textSearch:'';

  degree;
  Direction;

  constructor(private service: WeatherService, private fb: FormBuilder) {
    this.info=this.fb.group({
      city: ['' ,Validators.required],
      code:['', Validators.required],
    });
  }

  ngOnInit() {
    this.getWeatherData(this.ci);

    this.service.getCities().subscribe(cities=>{
      console.log(cities);
      this.cities=cities;
    });
    
  }

  getWeatherData(city:string){
    this.service.getWeatherData(city).subscribe(data=>{
      this.list=data;
      // this.weatherData=this.list.list;

        // for(let i=0; i< data.list.length; i+=8){
        //   console.log(i);
        //   console.log(data.list[i].dt_txt);
        //   this.weatherData[i]=data.list[i];
        // }
        
      // this.degree=data.list[0].wind.deg;
      //   if (this.degree>337.5 && this.degree<360) {
      //     this.Direction= 'Northerly'
      //   };
      //   if (this.degree>292.5 && this.degree<337.5) {
      //     this.Direction='North Westerly'
      //   };
      //   if(this.degree>247.5 && this.degree<292.5) {
      //     this.Direction=  'Westerly'
      //   };
      //   if(this.degree>202.5 && this.degree<247.5) { 
      //     this.Direction= 'South Westerly'
      //   } ;
      //   if(this.degree>157.5 && this.degree<202.5) {
      //     this.Direction=  'Southerly'
      //   };
      //   if(this.degree>122.5 && this.degree<157.5) {
      //     this.Direction=  'South Easterly'
      //   };
      //   if(this.degree>67.5 && this.degree<112.5) {
      //     this.Direction=  'Easterly'
      //   };
      //   if(this.degree>22.5 && this.degree<67.5 || this.degree>0 && this.degree<22.5){
      //     this.Direction= 'North Easterly';
      //   }
       
       
      console.log(data);
      
    });
  }
 onSubmit(city){      
     if(city===""){
     
     }else{
      this.getWeatherData(city);
      this.city="";
     }
 
 }
    
   onSearch(event){
    // console.log(event);
    this.textSearch=event.detail.value;
  }

  toTextualDescription(d){
   
}
}
