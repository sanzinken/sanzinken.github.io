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

            let list = _template($('todo-task-template').html());
            self.components.listContainer.html(list);

        };

        init();

    }
})