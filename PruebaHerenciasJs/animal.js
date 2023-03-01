/*-nombre 
-tipo 
-voz

+presentar
+especificar="yo soy de tipo"
+hablar


inheritance
class: */
class Animal{
    constructor(nombre,tipo,voz){
        this.nombre=nombre;
        this.tipo=tipo;
        this.voz=voz;
    }

    presentar(){
        return "Yo soy un "+this.nombre;
    }

    especificar(){
        return "Soy de tipo "+this.tipo;
    }

    hablar(){
        return "mi sonido es "+this.voz;
    }
}

class animal1 extends Animal{
    constructor(nombre,tipo,voz,manchas,velocidad){
        super(nombre, tipo,voz);
        this.manchas=manchas;
        this.velocidad=velocidad;
    }

    piel(){
        return "tengo "+this.manchas;
    }

    rapidez(){
        return " y corro a una velocidad de: "+this.velocidad;
    }

    show(){
        return this.presentar()+", "+this.especificar()+", "+this.hablar()+", "+ this.piel()+this.rapidez();
    }
}

class animal2 extends Animal{
    constructor(nombre,tipo,voz,color,iq){
        super(nombre, tipo,voz);
        this.color=color;
        this.iq=iq;
    }

    piel(){
        return "soy de color "+this.color;
    }

    inteligencia(){
        return " y mi IQ es "+this.iq;
    }

    show(){
        return this.presentar()+", "+this.especificar()+", "+this.hablar()+", "+this.piel()+this.inteligencia();
    }
}

let jaguar=new animal1("jaguar","panthera","raaar",897,"80Km/h");
let delfin=new animal2("delfin","odontoceti","Hiii","rosado","50");
document.getElementById("animal1").innerHTML=jaguar.show();
document.getElementById("animal2").innerHTML=delfin.show();