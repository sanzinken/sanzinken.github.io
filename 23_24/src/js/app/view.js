define(['lib/lodash', 'lib/jquery', 'app/model'], function(_, $, model) {
    return function(model) {
        const self = this;

        function init() {
            const wrapper = _.template($('#todolist-template').html());
            $(body).html(wrapper);
        }

        self.renderList = function(data) {
            self.components = {
                input: $('#todo-input'),
                listContainer: $('.todo-list')
            };

<<<<<<< HEAD
            let list = _template($('todo-task-template').html(), { storage: model.dataStorage });
=======
            let list = _template($('todo-task-template').html());
>>>>>>> 5c97a13b054bf2095b1efcae590bb2256bfd8462
            self.components.listContainer.html(list);

        };

        init();

    }
})