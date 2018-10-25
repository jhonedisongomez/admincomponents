class PanelComponent extends AdminComponent{

    constructor(id, size, title){
        super(id);
        this._id = id;
        this._size = size;
        this._title = title;
        this._html = ''
        this._constructComponent();
    }

    getHtml(){
        return this._html;
    }


    _constructComponent(){

        var div = document.createElement('div');
        div.classList.add(this._size);

        var panel = document.createElement('div');
        panel.classList.add('box');
        panel.classList.add('box-primary');

        var header = document.createElement('div');
        header.classList.add('box-header');
        header.classList.add('with-border');

        var title = document.createElement('h3');
        title.classList.add('box-title');
        title.innerHTML = this._title;

        header.appendChild(title);
        panel.appendChild(header);
        div.appendChild(panel);

        this._html = div;


    }

}