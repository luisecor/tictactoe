class   Game {
    constructor () {
        this.inProgress = true; 
        this.winner = null; //Deberia ser el X o el O
        this.currentTurn = Game.X; //El jugador inicial sera O
        this.movesMade = 0;
        this.squeres = new Array(9).fill().map( S => new Square() );
    }

    restart(){
        this.inProgress = true; 
        this.winner = null; //Deberia ser el X o el O
        this.currentTurn = Game.X; //El jugador inicial sera O
        this.movesMade = 0;
        this.squeres = new Array(9).fill().map( S => new Square() );
    }

    makeMove(i){
        if (i>= 0 && i<= this.squeres.length){
            if (this.inProgress && !this.squeres[i].value){
            this.squeres[i].value = this.currentTurn;
    
            this.movesMade++;
            this.checkForWinner();
            this.currentTurn = (this.currentTurn === Game.O) ? Game.X : Game.O;
            }
        }
       
    }

    checkForWinner(){
        const winningCombinations = [            
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        winningCombinations.forEach((wc) => {
            const [a,b,c] = wc;
            const sqA = this.squeres[a];
            const sqB = this.squeres[b];
            const sqC = this.squeres[c];

            if (sqA.value && sqA.value === sqB.value && sqA.value === sqC.value){
                this.inProgress = false;
                this.winner = sqA.value; 
                sqA.isHighlighted = sqB.isHighlighted = sqC.isHighlighted = true;               
            }
        });

        //Verificar si es un empate
        if(this.movesMade === this.squeres.length){
            this.inProgress = false; //inProgress == false AND winner == null
        }

    }



}

Game.O = "O";
Game.X = "X";