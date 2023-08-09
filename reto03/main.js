// Crear list que guarde todas mis tareas.
let tasks = document.querySelectorAll('.list-group-item');
let user = document.getElementById('nombre')



// Crear Loop para asignar event listener a cada tarea
tasks.forEach(task => {
    var label = task.querySelector('input')
    label.addEventListener('click', () => {
        task.classList.toggle('completed')
        let tarea_completada = task.querySelector('span').innerHTML
        let nombre = user.value;
        alert('¡Bien ahí, ' + nombre +'! Terminaste la tarea: '+ tarea_completada + '.');
    });
});

