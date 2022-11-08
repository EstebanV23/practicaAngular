import { Component } from "@angular/core";  // IMPORT FROM THE ANGULAR 

@Component({
    //OBLIGATORY
    selector: 'myComponent',//AS WILL BE CALLED IN THE DOCUMENT OR HTML VIEWS
    templateUrl: './myFirtsComponent.component.html'

}/*Keys becasu this is a JSON*/)
export class MyComponent
{
    public title: string;
    public description: string;
    public year: number;

    constructor()
    {
        this.title = "Hello World!, I'm My Component";
        this.description = "It is the firts component that I have created";
        this.year = 2002;
        console.log("My component have loaded...");
    }
}