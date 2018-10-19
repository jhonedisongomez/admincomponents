/**
 * created by coapps - Jhon Edison Gomez
 * copyright 2018 -
 */

class InputComponent extends AdminComponent {

    constructor(id, label, placeholder, required){
        super(id)
        this._id = id;
        this._component = null;
        this._label = label;
        this._placeholder = placeholder;
        this._required = required;
        this._message = '';
        this._inputLabel = null;

        this._constructComponent();
    }

    getComponent(){
        return this._component;
    }

    isValid(){

        if(this.required){
            if(this.children[1].value == ''){
                return false;
            }else{
                return true;
            }
        }else{
            return true;
        }
        
    }

    setMessage(message){
        this._message.innerHTML = message;
    }


    _constructComponent(){

        this._component = document.createElement('div');
        this._component.id = this._id;
        this._component.classList.add('form-group');

        this._inputLabel = document.createElement('label');
        this._inputLabel.classList.add('control-label');
        this._inputLabel.innerHTML = this._label;

        input = document.createElement('input');
        input.classList.add('form-control');
        input.placeholder = this._placeholder;

        this._message = document.createElement('span');
        this._message.classList.add('help-block');

        this._component.appendChild(this._inputLabel);
        this._component.appendChild(input);
        this._component.appendChild(this._message);

    }


}