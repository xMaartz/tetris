
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
    intervalo: 1000, 
            
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
        juego.piezaActual = null;
        juego.piezaSig = null;
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

        juego.resetEspacio();
        
        //prueba
        juego.espacio[prueba["y"]][prueba["x"]] = "x";
        if (prueba["y"] < 23){
        prueba["y"] += 1;
        }

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
        
        
        
        juego.puntuacion = juego.puntuacion + 1;

    },
    
    generaPieza: function () {
        
    },
    
    movPieza: function () {
        
    },
    
    movimiento: function () {
        juego.inicializar();
        inter = setInterval(juego.imprimirEspacio, juego.intervalo);
    }
    
            
};

prueba = new Array();
prueba["y"] = 1;
prueba["x"] = 7;


