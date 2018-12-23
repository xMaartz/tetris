// Objeto Juego

var juego = {
    
    espacio: new Array(25),
    espacio2: new Array(25),
    estadoEspacio: null,
    puntuacion: 0,
    puntuacionMax: 0,
    contador: 0,
    nivel: 0,
    piezaActual: null,
    piezaSig: null,
    contPieza: [],
    intervalo: 0, 
            
    inicializar: function () {
        
        for (var i = 0; i < juego.espacio.length; i++) {
            juego.espacio[i] = new Array(10);
        }
        
        for (var i = 0; i < juego.espacio.length; i++) {
            if (i === 0 || i === 24) {
                juego.espacio[i] = [1,1,1,1,1,1,1,1,1,1];
            } else {
                juego.espacio[i] = [1,0,0,0,0,0,0,0,0,1];
            }
        }
        
        for (var i = 0; i < juego.espacio2.length; i++) {
            juego.espacio2[i] = new Array(10);
        }
        
        for (var i = 0; i < juego.espacio2.length; i++) {
            if (i === 0 || i === 24) {
                juego.espacio2[i] = [1,1,1,1,1,1,1,1,1,1];
            } else {
                juego.espacio2[i] = [1,0,0,0,0,0,0,0,0,1];
            }
        }
        
        juego.puntuacion = 0;
        juego.puntuacionMax = 0;
        juego.contador = 0;
        juego.nivel = 1;
        var formaN = juego.generaPieza();
        juego.piezaActual = new Pieza(formaN[0],formaN[1],3,1);
        formaN = juego.generaPieza();
        juego.piezaSig = new Pieza(formaN[0],formaN[1],3,1);
        juego.contPieza = new Array ();
            juego.contPieza["i"] = 0;
            juego.contPieza["j"] = 0;
            juego.contPieza["l"] = 0;
            juego.contPieza["o"] = 0;
            juego.contPieza["s"] = 0;
            juego.contPieza["t"] = 0;
            juego.contPieza["z"] = 0;
        juego.intervalo = 1000;
        
        
    },
    
    resetEspacio: function () {
        
        for (var i = 0; i < juego.espacio.length; i++) {
            if (i === 0 || i === 24) {
                juego.espacio[i] = [1,1,1,1,1,1,1,1,1,1];
            } else {
                juego.espacio[i] = [1,0,0,0,0,0,0,0,0,1];
            }
        }
        
    },
    
    imprimirEspacio: function () {
    
        var tabla = "";
        var piezaSig = "";
        

        juego.resetEspacio();
        
        // rellena espacio 2
        for (var i = 0; i < juego.espacio2.length; i++) {
            for (var j = 0; j < juego.espacio2[i].length; j++) {

                            juego.espacio[i][j] = juego.espacio2[i][j];

                        }
        }
        
        // Imprime pieza en espacio 1
        
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (juego.piezaActual.forma[i][j] === 1) {
                    juego.espacio[juego.piezaActual.y+i][juego.piezaActual.x+j] = "x";
                }
            }
        }
        
        // Bajar pieza
        var fin = false;
        for (var i = 3; i >= 0 && fin === false; i--) {
            for (var j = 0; j < 4 && fin === false; j++) {
                if (juego.piezaActual.forma[i][j] === 1) {
                    if (juego.espacio[juego.piezaActual.y+i+1][juego.piezaActual.x+j] === 1) {
                        fin = true;
                    }
                }
            }
        }
        
        if (fin === false) {
            juego.piezaActual.y++;
            
        // Si no puede bajar más    
        } else {
            
            // para los contadores de piezas
            switch (juego.piezaActual.color) {
                case "lila": {juego.contPieza["i"]++;} break;
                case "taronga": {juego.contPieza["j"]++;} break;
                case "blau": {juego.contPieza["l"]++;} break;
                case "groc": {juego.contPieza["o"]++;} break;
                case "verd": {juego.contPieza["s"]++;} break;
                case "morat": {juego.contPieza["t"]++;} break;
                case "roig": {juego.contPieza["z"]++;} break;
            }
            
            // cambia a la pieza siguiente y crea una nueva siguiente
            juego.piezaActual = juego.piezaSig;
            var formaN = juego.generaPieza();
            juego.piezaSig = new Pieza(formaN[0],formaN[1],3,1);
            
            // juego.filas();
            
            // vuelco el contenido del espacio al espacio2 y cambio las "x" de la pieza que cae por 1
            for (var i = 0; i < juego.espacio.length; i++) {
                for (var j = 0; j < juego.espacio[i].length; j++) {

                                juego.espacio2[i][j] = juego.espacio[i][j];

                            }
            }
            
            for (var i = 0; i < juego.espacio2.length; i++) {
                for (var j = 0; j < juego.espacio2[i].length; j++) {

                                if (juego.espacio2[i][j] === "x") {
                                    juego.espacio2[i][j] = 1;
                                }

                            }
            }
            
            // cambio de niveles y puntuación
            juego.contador++;
            juego.puntuacion += 10;
            
            if (juego.contador % 10 === 0) {
                juego.nivel++;
                juego.puntuacion += 20;
                if (juego.intervalo > 300) {
                    inter = setInterval(juego.imprimirEspacio, juego.intervalo - 100);
                }
            }
            
        }
            
        // imprimir tabla y puntuaciones
        for ( var i = 0; i < juego.espacio.length; i++) {

                        tabla=tabla+"<br />";

                        for (j = 0; j < juego.espacio[i].length; j++) {

                            tabla=tabla+juego.espacio[i][j]+" ";

                        }
            }
            
        document.getElementById("puntuacion").innerHTML = "Puntuación: "+juego.puntuacion;
        document.getElementById("puntMax").innerHTML = "Récord: "+juego.puntuacionMax;
        document.getElementById("nivel").innerHTML = "Nivel: "+juego.nivel;
        document.getElementById("tabla").innerHTML = tabla;
        
        for (var i = 0; i < 4; i++) {
                piezaSig = piezaSig+"<br />";
            for (var j = 0; j < 4; j++) {
                    piezaSig = piezaSig+juego.piezaSig.forma[i][j]+" ";
            }
        }
        
        document.getElementById("piezaSig").innerHTML = piezaSig+"   Contador de piezas: I:"+juego.contPieza["i"]+" J:"+juego.contPieza["j"]+" L:"+juego.contPieza["l"]+" O:"+juego.contPieza["o"]+" S:"+juego.contPieza["s"]+" T:"+juego.contPieza["t"]+" Z:"+juego.contPieza["z"];

    },
    
    generaPieza: function () {
        var piezas = [
                 [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"groc"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
                 [[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],"verd"],
                 [[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],"roig"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"blau"],
                 [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"taronga"],
                 [[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],"morat"] ];
           var numeroAleatori = Math.round(Math.random()*6);                      
           return piezas[numeroAleatori]; 
    },
    
    movPieza: function (tecla) {
        
        switch (tecla.key) {
            case "ArrowLeft": {
                    if (juego.piezaActual.movIzq() === true) {
                        juego.piezaActual.x--;
                    }
            } break;
            case "ArrowRight": {
                    if (juego.piezaActual.movDer() === true) {
                        juego.piezaActual.x++;
                    }
            } break;
            case "ArrowUp": {
                    juego.piezaActual.rotarDer();
            } break;
            case "ArrowDown": {
                    if (juego.piezaActual.movAbj() === true) {
                        juego.piezaActual.y++;
                        juego.puntuacion++;
                    }
            } break;
        } 
        
    },
    
    movimiento: function () {
        juego.inicializar();
        inter = setInterval(juego.imprimirEspacio, juego.intervalo);
    },
    
    filas: function () {
        var cont = 0;
        var fin = false;
        for (var i = 23; fin === false; i--) {
            for (var j = 0; j < 10; j++) {
                if (juego.espacio[i][j] === 1) {
                    cont++;
                }
            }
            
            if (cont === 10) {
                for (var p = i; p > 0; p--) {
                    for (var r = 0; r < 10; r++) {
                        juego.espacio[p][r] = juego.espacio[p-1][r];
                    }
                }
                i++;
            } else if (cont === 2) {
                fin = true;
            }
            cont = 0;
        }
    }
    
            
};

// Objeto Pieza

var Pieza = function(forma, color, x, y) { 
        this.forma = forma;
        this.color = color;
        this.x = x;  
        this.y = y;

        
        this.movDer = function() { 
            for (var i = 3; i >= 0; i--) {
                for (var j = 0; j < 4; j++) {
                    if (juego.piezaActual.forma[i][j] === 1) {
                        if (juego.espacio[juego.piezaActual.y+i][juego.piezaActual.x+j+1] === 1) {
                            return false;
                        }
                    }
                }
            }
            return true;
        };
           
        this.movIzq = function() {
            for (var i = 3; i >= 0; i--) {
                for (var j = 0; j < 4; j++) {
                    if (juego.piezaActual.forma[i][j] === 1) {
                        if (juego.espacio[juego.piezaActual.y+i][juego.piezaActual.x+j-1] === 1) {
                            return false;
                        }
                    }
                }
            }
            return true;
        };
    
    this.movAbj = function() {
        for (var i = 3; i >= 0; i--) {
            for (var j = 0; j < 4; j++) {
                if (juego.piezaActual.forma[i][j] === 1) {
                    if (juego.espacio[juego.piezaActual.y+i+1][juego.piezaActual.x+j] === 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
       
    this.rotarDer = function () {
        var formaNova = new Array();
        for (var i=0;i<this.forma.length;i++) {
            formaNova[i]=new Array();
            for (var j=0;j<this.forma[i].length;j++) {
                formaNova[i][j]=this.forma[this.forma[i].length-1-j][i];
            }
        }
        this.forma = formaNova;
    };
    
    this.rotarIzq = function () {
        for (var x=0;x<3;x++) {
            var formaNova = new Array();
            for (var i=0;i<this.forma.length;i++) {
                formaNova[i]=new Array();
                for (var j=0;j<this.forma[i].length;j++) {
                    formaNova[i][j]=this.forma[this.forma[i].length-1-j][i];
                }
            }
            this.forma = formaNova;
        }
    };
    
    this.formaIni = function () {
        
    };
    
};


