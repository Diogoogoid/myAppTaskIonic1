function getTasks(){
    this.items = [];

    this.add = function(item){
        this.items.push(item);
    };

    this.remove = function(item){
        var pos = this.items.indexOf(item);
        this.items.splice(pos, 1);
    };
};