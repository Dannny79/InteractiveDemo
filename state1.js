var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, mc, speed = 4;
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.image('mc', 'assets/sprites/demosprite.png');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD'
        console.log('state1');
        enterKey = game.input.keyboard.addKey(13);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        mc = game.add.sprite(centerX, centerY, 'mc');
        mc.anchor.x = 0.5;
        mc.anchor.y = 0.5;
    },
    update: function(){
        if (enterKey.isDown){
            game.state.start('state2')
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
            mc.x += speed; 
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            mc.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W)){
            mc.y -= speed; 
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.S)){
            mc.y += speed;
        }
    }
};

