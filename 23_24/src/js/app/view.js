define(["lib/lodash", "jquery", "app/model"], function(_, $, model) {
    return function(model) {
        var self = this;

        function init() {
            var wrapper = _.template($('#todolist-template').html());
            // $('body').html(wrapper);
            // self.renderList(model.dataStorage);
        }

        self.renderList = function(data) {

            self.components = {
                input: $('#todo-input'),
                listContainer: $('.todo-list')
            };

            var list = _.template($('#todo-task-template').html(), { data: data });
            self.components.listContainer.html(list);
        };

        init();
    }
})