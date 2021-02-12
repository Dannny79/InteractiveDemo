var demo = {};
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD'
        console.log('state1');
        enterKey = game.input.keyboard.addKey(13)
    },
    update: function(){
        if (enterKey.isDown){
            game.state.start('state2')
        }
    }
};

