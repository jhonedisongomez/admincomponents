/**
 * created by coapps - Jhon Edison Gomez
 * copyright 2018 -
 */

class InputComponent extends AdminComponent {

    constructor(id, label, placeholder, required){
        super(id)
        this._id = id;
        this._html = null;
        this._label = label;
        this._placeholder = placeholder;
        this._required = required;
        this._inputLabel = null;

        this._constructComponent();
    }

    isValid(){

        if(this._required){
            if(this._html.children[1].value == ''){
                this._html.classList.add('has-error');
                this._html.children[1].focus();
                this._html.children[2].innerHTML = 'El valor del campo ' + this._label + ' no puede estar nulo o vacio.';
                return false;
                
            }else{
                this._html.children[2].innerHTML = '';
                this._html.classList.remove('has-error');
                return true;
            }
        }else{
            return true;
        }
        
    }
    _constructComponent(){

        this._html = document.createElement('div');
        this._html.id = this._id;
        this._html.classList.add('form-group');

        this._inputLabel = document.createElement('label');
        this._inputLabel.classList.add('control-label');
        this._inputLabel.innerHTML = this._label;

        var input = document.createElement('input');
        input.classList.add('form-control');
        input.placeholder = this._placeholder;
        input.name = this._id;

        this._message = document.createElement('span');
        this._message.classList.add('help-block');

        this._html.appendChild(this._inputLabel);
        this._html.appendChild(input);
        this._html.appendChild(this._message);

    }


}