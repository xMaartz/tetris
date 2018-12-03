
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
            
    puntuacion: 0,
    puntuacionMax: 0,
    piezaActual: null,
    piezaSig: null,
    contPieza: [],
    intervalo: 1000, 
            
    inicializar: function () {
        for (var i = 0; i < espacio.length; i++) {
            if (i === 0 || i === 49) {
                espacio[i] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
            } else {
                espacio[i] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
            }
        }
    },
    
    imprimirEspacio: function () {
    
        var tabla = "";

        inicializar();

        for ( var i = 0; i < espacio.length; i++) {

                        tabla=tabla+"<br />";

                        for (j = 0; j < espacio[i].length; j++) {

                            tabla=tabla+espacio[i][j]+" ";

                        }
            }

        document.getElementById("tabla").innerHTML = tabla;

    },
    
    generaPieza: function () {
        
    },
    
    movimiento: function () {
        
    }
    
            
};


