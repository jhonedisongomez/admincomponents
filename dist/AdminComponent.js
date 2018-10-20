/**
 * created by coapps - Jhon Edison Gomez
 * copyright 2018 -
 */
class AdminComponent {

    constructor(id){
        this._id = id;
        this._html = null;
        this._listComponents = [];


    }

    isDisabled(){

    }

    

    getId(){

        return this._id;
    }

    setId(){

    }

    setDisabled(){

    }

    attachComponent(componentParent, componentChild){
        console.log(componentParent._html);
        
        componentParent._html.appendChild(componentChild._html);

        this._listComponents.push(componentChild);

    }



}