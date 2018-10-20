/**
 * created by coapps - Jhon Edison Gomez
 * all right reserved 2018
 */

class SelectComponent extends AdminComponent{

    constructor(id,label, options,required){
        this._id = id;
        this._options = options
        this._label = label;
        this._html = '';
        this._required = required;
        this._constructComponent();


    }

    setErrorMessage(message){

        this._html.classList.add('has-error');
        this._html.children[1].focus();
        this._html.children[2].innerHTML = message;
    }

    setOption(){

    }

    getOption(index){

    }

    getOptions(){

        return this._options;

    }

    setOptions(options){

        this._options = options;

    }

    isValid(){

        if(this._required){
            var select = this._html.children[1];
            var selected = select.options[select.selectedIndex].value;

            if(selected == ''){
                return false;
            }else{
                return true;
            }

        }
    }

    _constructComponent(){

        var divSelect = document.createElement('div');
        divSelect.classList.add('form-group');

        var label = document.createElement('label');
        label.innerHTML = this._label;

        var select = document.createElement('select');
        select.classList.add('form-group');

        var span = document.createElement('span');

        divSelect.appendChild(label);
        divSelect.appendChild(select);
        divSelect.appendChild(span);

        this._html = divSelect;

    }

}