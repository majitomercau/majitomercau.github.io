// Crear list que guarde todas mis tareas.
let tasks = document.querySelectorAll('.list-group-item');
let nombre = document.getElementById('nombre')

// Crear Loop para asignar event listener a cada tarea
tasks.forEach(task => {
    var label = task.querySelector('input')
    label.addEventListener('click', () => {
        task.classList.toggle('completed')
        let tarea_completada = task.querySelector('span').innerHTML
        alert('¡Bien ahí! Terminaste la tarea: '+ tarea_completada + '.');
    });
});

