/**
 * created by coapps - Jhon Edison Gomez
 * copyright 2018 -
 */

 class FormComponent extends AdminElement{

    constructor(id){
        super(id);
        this._id = id;
        this._form = null;
    }

    submit(callback){
        //TODO: validate all de elements 

        //TODO: send the elements ajax
    }

    _constructComponent(){

        this.form = document.createElement('form');
        this.form.classList.add('form-group');

        
        return this.form;
        
    }

    
 }