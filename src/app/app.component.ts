import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  widthImg = 25;
  btnDisable = true;
  name = 'Luz';
  age = 23;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  //Formulario
  register =  {
    name: "",
    email: '00',
    password: ""
  }

  //Objeto persona
  person = {
    name: 'Luz',
    age: 23,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  //arreglo de nombres
  names: string[] = ['Luz', 'María', 'Sebastian'];
  newName='';

  //Objeto del tipo Product[], que es un arreglo de objetos
  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]



  //Metodos
  public toggleButton(){
    this.btnDisable = !this.btnDisable;
    //Vamos a tomar el estado en el que este y lo negamos
  }

  public increaseAge(){
    this.person.age += 1;
  }

  public onScroll(event: Event){
      const element = event.target as HTMLElement;
      console.log(element.scrollTop);
  }

  public changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  public addName(){
    this.names.push(this.newName);
    this.newName = "";
  }

  public deleteName(index:number){
    this.names.splice(index, 1);
  }

}
