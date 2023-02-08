class Fibonacci {
    constructor() {
        // Where does your sequence start by default? 
        /*function fib(num){
            let x = 0;
        let y = 1;
        if (num==1){
            return(0);
            
        }
        else if (num==2){
            return(1);
        }
        else {for (i = 3; i <= num; i++){
            let nextTerm = x + y;
            x = y;
            y = nextTerm;
        }}

        }*/
        // initialise fib seeds
        this.previous = 0;
        this.current = 1;
        

        

    }

    
    // Returns the next Fibonacci number in the current sequence
    next() {
        const next = this.previous + this.current;
        this.previous = this.current;
        this.current = next;
        return next;
    }

    // Initializes the sequence with the number to start with
    init(seed) {
        //rest seeds back to the start
        this.previous = 0;
        this.current = 1;
        //loop to find the seed
        while (this.current < seed){
            this.next();
        }
        //check if real fib number
         if (this.current != seed){
            throw new Error('Not a real fib number!');
         }
        }
        // Return the Fibonacci number further on in the sequence
    skip(forward) {
        for (let i = 0; i < forward; i++){
            this.next();
        };
       return this.current;
    }
}
module.exports = Fibonacci;