var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'homologaciones',
    user: 'root',
    password: ''
});

conexion.connect(function (error) {
    if(error) {
        throw error;
    }else {
        console.log('conexion success :)');
    }
});

conexion.query('SELECT * FROM registro_estudiante', function(error,results,fields){
    if(error){
        throw error;
    }
    console.log(results[0]);
});
conexion.end();