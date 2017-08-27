/**
 * GITHUB: Bfindlay
 * Minimum adjacency list implementation of a graph
 */


class Graph {

    constructor(){
        this.vertices = {};
        this.edges = [];
    }

    addVertex(vertex){
        if(!this._contains(vertex)){
            this.vertices[vertex] = true;
            this.edges[vertex] = {};
        }else{
            console.error(`Vertex ${vertex} already Exists`);
        }
    }

    addEdge(u, v, w = 1){
        if(!this.edges[u])
            this.addVertex(u);
        if(!this.edges[v])
            this.addVertex(v);
        //Directed graph add weights for both nodes
        this.edges[u][v] = (this.edges[u][v] || 0) + w;
        this.edges[v][u] = (this.edges[v][u] || 0) + w;
    }

    getEdge(u, v){
        return this.edges[u][v];
    }

    getNeighbours(v){
        return Object.keys(this.edges[v]);
    }

    _contains(v){
        return this.vertices.hasOwnProperty(v);
    }
 }

module.exports = Graph;
