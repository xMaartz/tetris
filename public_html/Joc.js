// Objeto Juego

var juego = {
    
    espacio: [  [1,1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1]
             ],
    
    estadoEspacio: null,
    puntuacion: 0,
    puntuacionMax: 0,
    nivel: 0,
    piezaActual: null,
    piezaSig: null,
    contPieza: [],
    intervalo: 0, 
            
    inicializar: function () {
        
        for (var i = 0; i < juego.espacio.length; i++) {
            if (i === 0 || i === 24) {
                juego.espacio[i] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            } else {
                juego.espacio[i] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
            }
        }
        
        juego.puntuacion = 0;
        juego.puntuacionMax = 0;
        juego.nivel = 1;
        var forma = juego.generaPieza();
        juego.piezaActual = new Pieza(forma[0],forma[1],4,1);
        forma = juego.generaPieza();
        juego.piezaSig = new Pieza(forma[0],forma[1],4,1);
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
                juego.espacio[i] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            } else {
                juego.espacio[i] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
            }
        }
        
    },
    
    imprimirEspacio: function () {
    
        var tabla = "";
        var piezaSig = "";

        juego.resetEspacio();
        
        /*prueba con pieza*/
        
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (juego.piezaActual.forma[i][j] == 1) {
                    juego.espacio[juego.piezaActual.y+i][juego.piezaActual.x+j] = "x";
                }
            }
        }
        
        if (juego.espacio[juego.piezaActual.y+4][juego.piezaActual.x] == 0) {
            juego.piezaActual.y += 1;
        };
       
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
        
        document.getElementById("piezaSig").innerHTML = piezaSig;
        
        
        
        juego.puntuacion = juego.puntuacion + 1;

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
    
    movPieza: function () {
        
    },
    
    movimiento: function () {
        juego.inicializar();
        inter = setInterval(juego.imprimirEspacio, juego.intervalo);
    }
    
            
};

// Objeto Pieza

var Pieza = function(forma, color, x, y) { 
        this.forma = forma;
        this.color = color;
        this.x = x;  
        this.y = y;
};
        
    Pieza.prototype.movDer = function() { 
        if ((x-1)>0) { 
            x--;
            return true;
        } else { 
            return false; 
        }
    };
           
    Pieza.prototype.movIzq = function() {
        if ((x+1)<9) { 
            x++;
            return true;
        } else { 
            return false; 
        }
    };
    
    Pieza.prototype.movAbj = function() {
        if ((y+1)<24) { 
            y++;
            return true;
        } else { 
            return false; 
        }
    };
       
    Pieza.prototype.rotarDer = function () {
        var formaNova = new Array();
        for (var i=0;i<this.forma.length;i++) {
            formaNova[i]=new Array();
            for (var j=0;j<this.forma[i].length;j++) {
                formaNova[i][j]=this.forma[this.forma[i].length-1-j][i];
            }
        }
        this.forma = formaNova;
    };
    
    Pieza.prototype.rotarIzq = function () {
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
    
    Pieza.prototype.formaIni = function () {
        
    };


