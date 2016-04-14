Template.addTarefa.events({
  'submit #addTarefa, click #addBtn': function(e) {
    e.preventDefault()
    Tarefas.insert({
      nome: $('#tarefa').val(), //e.target.tarefa.value,
      status: false
    })
    Materialize.toast("Adicionado!", 3000, 'green')

    $('#tarefa').val('')
      //e.target.tarefa.value = ''
  }
})
