name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
      let self = this; 
        return function() {
            return self.name;
        };
    }
};


/*
BEST PRACTICE: 

var name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function(){
    return function(){
        return this.name;
        }.bind(this);
    }
};





*/