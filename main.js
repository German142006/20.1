<script>
  $(document).ready(function() {
    $('#add-task').click(function() {
      var taskText = $('#new-task').val();
      if (taskText) {
        var taskItem = $('<li class="list-group-item"></li>').text(taskText);
        taskItem.click(function() {
          $('#task-details').text($(this).text());
          $('#taskModal').modal('show');
        });
        $('#todo-list').append(taskItem);
        $('#new-task').val('');
      }
    })
  })
</script>
