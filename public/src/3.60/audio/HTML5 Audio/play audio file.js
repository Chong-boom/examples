var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create
    },
    audio: {
        disableWebAudio: true
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.audio('theme', [
        'assets/audio/oedipus_wizball_highscore.ogg',
        'assets/audio/oedipus_wizball_highscore.mp3'
    ]);

    this.load.image('wizball', 'assets/sprites/wizball.png');
}

function create ()
{
    this.add.image(400, 300, 'wizball').setScale(4);

    this.sound.pauseOnBlur = false;

    this.input.once('pointerdown', () => {

        var music = this.sound.add('theme');

        music.play();


    });

}