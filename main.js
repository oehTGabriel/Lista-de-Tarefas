$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novoItem = $(`<li> </li>`);

        $(`<h2>${novaTarefa}</h2>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $('#tarefa').val('');
    })
})