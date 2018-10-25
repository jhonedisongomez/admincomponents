/**
 * created by coapps - Jhon Edison Gomez
 * all right reserved 2018
 */

 class FormComponent extends AdminComponent{

    constructor(id){
        super(id);
        this._id = id;
        this._html = null;
        this._constructComponent();
    }

    getForm(){
        return this._form;
    }

    submit(url, type,data, callback){
        
        if(this.isValid()){
            var formdata = $('#'+ this._id ).serialize();
            
            //TODO: send the elements ajax
            $.ajax({

                url: url,
                data : formdata +  data,
                type: type,
                success: callback

            });

        }

    }

    isValid(){

        for(var index = 0; index < this._listComponents.length; index++){

            if(!this._listComponents[index].isValid()){
                index = this._listComponents.length;
                return false;
            }

        return true;
        
    }

}

    _constructComponent(){

        this._html = document.createElement('form');
        this._html.id = this._id;
        this._html.classList.add('form-group');
        
        return this.form;
        
    }

    
 }