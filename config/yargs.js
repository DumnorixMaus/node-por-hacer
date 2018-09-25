const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear elemento por hacer', {
        descripcion
    })
    .command('actulizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Lista todas las tarea')
    .help()
    .argv;

module.exports = {
    argv
}