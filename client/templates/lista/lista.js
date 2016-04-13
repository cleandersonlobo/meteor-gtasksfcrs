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
    Tarefas.update(this._id, {
      $set: {
        status: e.currentTarget.checked
      }
    })

  }
})
