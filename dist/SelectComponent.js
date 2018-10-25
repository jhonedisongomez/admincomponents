/**
 * created by coapps - Jhon Edison Gomez
 * all right reserved 2018
 */

class SelectComponent extends AdminComponent{

    constructor(id,label, options,required){
        super(id);
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

    setOption(value, name, index){
        var select = this._html.children[1];
        select.options[index] = new Option(value, name);

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

    loadOptions(url,data){

        $.ajax({
            url: url,
            data: data,
            succes:function(response){

                if(response.is_error){
                    alert('Error load de options');
                }else{
                    var options = response.options;

                    for(var i = 0; i < options.length; i++){
                        
                        option = new Option(options[i].nombre, options[i].codigo);
                    }
                }

            }
        })
    }

    _constructComponent(){

        var divSelect = document.createElement('div');
        divSelect.classList.add('form-group');

        var label = document.createElement('label');
        label.innerHTML = this._label;

        var select = document.createElement('select');
        select.classList.add('form-control');
        select.name = this._id;

        var span = document.createElement('span');

        divSelect.appendChild(label);
        divSelect.appendChild(select);
        divSelect.appendChild(span);

        this._html = divSelect;

    }

}