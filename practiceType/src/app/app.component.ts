import { Component, OnInit } from '@angular/core';


class Point{

  x:number;
  y:number;

  //p1

  //name:string;

  constructor(xNumber:number, yNumber:number){
      this.x =  xNumber;
      this.y = yNumber;
    
  }
  add(newPoint:Point){

    return newPoint = new Point(newPoint.x + this.x,newPoint.y + this.y)
  }



}

class Point3D extends Point{
  //x:number;
  z:number;

  constructor(x:number,y:number,z:number){

    super(x,y);
    // this.x=x;
    // this.y=y;
    this.z=z;

  }

  add(new3DPoint:Point3D){

    return new3DPoint = new Point3D(new3DPoint.x + this.x,new3DPoint.y + this.y,new3DPoint.z +this.z)
  }
 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'app';


  ngOnInit(){

    this.livingTesting();
  }

    livingTesting(){
    //onst checking = new Point(5,8);
    const checking = new Point(7,4);
    console.log(checking.x,checking.y);

    let pl= new Point(3,4);
    let p2 = new Point(5,6);

    let p3 = pl.add(p2);

    const p3D1 = new Point3D(4, 7, 88);
    const p3D2 = new Point3D(8, 3, 34);
    const p3D3 = p3D1.add(p3D2);
    console.log(p3);
    console.log(p3D3);
    }



    
    
    
}








