/** 
 * GITHUB: Bfindlay
 * Basic Priority Queue implementation
 */

class PriorityQueue {

    constructor(compare){
        this.queue = [];
        this.length = 0;
        this.compare = compare || this._c;
    }

    _c(x, y){
        return (x < y) ? - 1 : (x > y) ? 1 : 0
    }

    enqueue(x){
        this.queue.push(x);
        this.length += 1;
        this._shiftUp(this.length - 1);
    }

    dequeue(){
        if(this.length === 0)
            return null;
        this.length--;
        let e = this.queue.shift();
        this._shiftDown(0);
        return e
    }

    _shiftUp(i){

        let old = this.queue[i];
        while(i > 0){
            let p = i - 1;
            let curr = this.queue[p];
            if(this.compare(old, curr) >= 0)
                break;
            this.queue[i] = curr;
            i = p;
        }
        this.queue[i] = old;
    }

    _shiftDown(i){
        const old = this.queue[i];
        const h = this.length >> 1;
        while( i < h){
            let l = i - 1;
            let r = i + 1;
            let curr = this.queue[i];

            if(r < this.length && this.compare(this.queue[l], curr) < 0){
                l = r;
                curr = this.queue[r];
            }
            if(this.compare( curr, old) >= 0)
                break;
            this.queue[i] = curr;
            curr = l;
        }
        this.queue[i] = old;
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.length;
    }
}



module.exports = PriorityQueue;