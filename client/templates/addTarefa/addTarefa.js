Template.addTarefa.events({
  'submit #addTarefa, click #addBtn': function(e) {
    e.preventDefault()
    Meteor.call("addTarefa", {
        nome: $('#tarefa').val(),
        status: false
      },
      function(error, result) {
        if (error) {
          Materialize.toast("Erro!!", 3000, 'red')
        }
        if (result) {
          Materialize.toast("Adicionado!", 3000, 'green')
        }
      });
    $('#tarefa').val('')
      //e.target.tarefa.value = ''
  }
})
