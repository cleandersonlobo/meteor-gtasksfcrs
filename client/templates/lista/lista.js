Template.lista.rendered = function() {

}

Template.lista.helpers({
  tarefas: function() {
    return Tarefas.find()
  },
  isCheck: function() {
    if (this.status) {
      return 'check'
    }
    return ""
  }
})
Template.lista.events({
  'change input[type=checkbox]': function(e) {
    e.preventDefault();
    var id = this._id
    Meteor.call("editarCheckBox", {
        id: id,
        checked: e.currentTarget.checked
      },
      function(error, result) {
        if (error) {
          Materialize.toast("Erro!!", 3000, 'red')
        }
        if (result) {
          //Materialize.toast("Adicionado!", 3000, 'green')
        }
      });

  },
  'click .removerTarefa': function(e) {
    e.preventDefault()
    var id = this._id;
    MaterializeModal.confirm({
      title: 'Atenção',
      message: 'Deseja realmente deletar essa tarefa?',
      closeLabel: 'Cancelar',
      submitLabel: 'Deletar',
      callback: function(error, rtn) {
        if (rtn.submit) {
          Meteor.call('removertarefa', id, function(e, r) {
            if (e) {
              Materialize.toast("Erro!",
                2000, 'red')
            }
            if (result) {
              Materialize.toast("Deletado!",
                2000, 'yellow')
            }
          })
        }
      }
    })

  },
  'click .editarLista': function(e) {
    e.preventDefault();
    Session.set('submitForm', true)
    Session.set('tarefaValue', this)
    var id = this._id
    MaterializeModal.form({
      bodyTemplate: 'editarLista',
      title: '<i class="mdi-editor-mode-edit prefix"></i>Editar Lista',
      closeLabel: 'Cancelar',
      submitLabel: 'OK',
      callback: function(error, rtn) {
        if (rtn.submit) {
          Meteor.call('editarTarefa', {
            id: id,
            nome: $('#editTarefa').val()
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
        } else {
          if (Session.get('submitForm')) {
            Materialize.toast("Cancelado!",
              2000, 'red')
          }

        }
      }
    })
  }
})
