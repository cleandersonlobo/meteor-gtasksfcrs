Template.editarLista.helpers({
  tarefaValue: function() {
    return Session.get('tarefaValue').nome
  }
})

Template.editarLista.events({
  'submit #editarTarefa': function(e) {
    e.preventDefault();
    var id = Session.get('tarefaValue')._id;
    Meteor.call('editarTarefa', {
      id: id,
      nome: e.target.editTarefa.value
    }, function(e, r) {
      if (e) {
        Materialize.toast("Erro!",
          3000, 'red')
      }
      if (r) {
        Materialize.toast("Editado!",
          3000, 'green')
      }
    })
    Session.set('submitForm', false)
    MaterializeModal.close()
  }
})
