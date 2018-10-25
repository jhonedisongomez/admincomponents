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
        componentParent._html.appendChild(componentChild._html);
        this._listComponents.push(componentChild);

    }

    requestAjax(url, data, callback){
        $.ajax({

            url:url,
            data: data,
            
        }).done(callback);
    }



}