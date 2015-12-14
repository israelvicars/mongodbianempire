$(document).ready(function(){
	$('#add_category').submit(addCategory)
	$('#edit_category').submit(editCategory)

	$('#add_task').submit(addTask)
	$('#edit_task').submit(editTask)

	$('body').on('click', '.btn-edit-category', setCategory)
	$('body').on('click', '.btn-delete-category', deleteCategory)

	$('body').on('click', '.btn-edit-task', setTask)
	$('body').on('click', '.btn-delete-task', deleteTask)
})

var api_key = 'iKz773doNzYyKq4huh0F2u4QN2R7zERZ'

// POST REQUEST - Task
function addTask(){
	var task_name = $('#task_name').val()
	var category = $('#category').val()
	var due_date = $('#due_date').val()
	var priority = $('#priority').val()

	$.ajax( {
		url: 'https://api.mongolab.com/api/1/databases/task-manager-project/collections/tasks?apiKey=' + api_key,
	  data: JSON.stringify( {
			'task_name': task_name,
			'category': category,
			'due_date': due_date,
			'priority': priority
		}),
	  type: 'POST',
	  contentType: 'application/json',
		success: function(data){
			window.location.href = 'index.html'
		},
		error: function(xhr, status, err){
			console.log(err)
		}
	})

	return false
}

// GET REQUEST - Tasks
function getTasks(){
	$.get('https://api.mongolab.com/api/1/databases/task-manager-project/collections/tasks?apiKey=' + api_key, function(data){
		var output = '<ul class="list-group">'
		$.each(data, function(key, data){
			output += (
				'<li class="task list-group-item">'+
				data.task_name +
				' <span class="due_date">[Due on ' +
				data.due_date +
				']</span>'
			)
			switch(data.priority){
				case 'urgent':
					output += ' <span class="label label-danger">Urgent</span>'
					break
				case 'short':
					output += ' <span class="label label-warning">Short term</span>'
					break
				case 'long':
					output += ' <span class="label label-success">Long term</span>'
					break
			}
			output += (
				'<div class="pull-right">'+
					'<a class="btn btn-primary btn-edit-task" data-task-id="' +
						data._id.$oid +
						'">Edit</a>' +
					' ' +
					'<a class="btn btn-danger btn-delete-task" data-task-id="' +
						data._id.$oid +
						'">Delete</a>' +
					'</div>' +
				'</li>'
			)
		})
		output += '</ul>'
		$('#tasks').html(output)
	})
}

function setTask(){
	var task_id = $(this).data('task-id')
	sessionStorage.setItem('currentTaskId', task_id)
	window.location.href = "edittask.html"
	return false
}

function getTask(){
	var task_id = sessionStorage.getItem('currentTaskId')
	$.get('https://api.mongolab.com/api/1/databases/task-manager-project/collections/tasks/' + task_id + '?apiKey=' + api_key, function(data){
		$('#task_name').val(data.task_name)
		$('#category').val(data.category)
		$('#due_date').val(data.due_date)
		$('#priority').val(data.priority)
	})
}
// PUT REQUEST - Task
function editTask(){
	var task_id = sessionStorage.getItem('currentTaskId')
	var task_name = $('#task_name').val()
	var category = $('#category').val()
	var due_date = $('#due_date').val()
	var priority = $('#priority').val()

	$.ajax( {
		url: 'https://api.mongolab.com/api/1/databases/task-manager-project/collections/tasks/' + task_id + '?apiKey=' + api_key,
	  data: JSON.stringify( {
			'task_name': task_name,
			'category': category,
			'due_date': due_date,
			'priority': priority
		}),
	  type: 'PUT',
	  contentType: 'application/json',
		success: function(data){
			window.location.href = 'index.html'
		},
		error: function(xhr, status, err){
			console.log(err)
		}
	})

	return false
}

// DELETE REQUEST - Task
function deleteTask(){
	var task_id = $(this).data('task-id')

	$.ajax({
		url: 'https://api.mongolab.com/api/1/databases/task-manager-project/collections/tasks/' + task_id + '?apiKey=' + api_key,
		type: 'DELETE',
		async: true,
		timeout: 300000,
		success: function(data){
			window.location.href = 'index.html'
		},
		error: function(xhr, status, err){
			console.log(err)
		}
	})

	return false
}


// GET REQUEST - Categories (as options)
function getCategoryOptions(){
	$.get('https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories?apiKey=' + api_key, function(data){
		var output = ''
		$.each(data, function(key, data){
			output += (
				'<option value="'+
				data.category_name +
				'">'+
				data.category_name +
				'</option>'
			)
		})
		$('#category').append(output)
	})
}


// GET REQUEST - Categories (as a list)
function getCategories(){
	$.get('https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories?apiKey=' + api_key, function(data){
		var output = '<ul class="list-group">'
		$.each(data, function(key, data){
			output += (
				'<li class="list-group-item category">'+
					data.category_name +
					'<div class="pull-right">'+
						'<a class="btn btn-primary btn-edit-category" data-category-id="' +
							data._id.$oid +
							'">Edit</a>' +
						' ' +
						'<a class="btn btn-danger btn-delete-category" data-category-id="' +
							data._id.$oid +
							'">Delete</a>' +
					'</div>' +
				'</li>'
			)
		})
		output += '</ul>'
		$('#categories').html(output)
	})
}

// POST REQUEST - Category
function addCategory(){
	var category_name = $('#category_name').val()

	$.ajax( {
		url: 'https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories?apiKey=' + api_key,
	  data: JSON.stringify( {
			'category_name': category_name
		}),
	  type: 'POST',
	  contentType: 'application/json',
		success: function(data){
			window.location.href = 'categories.html'
		},
		error: function(xhr, status, err){
			console.log(err)
		}
	})

	return false
}

// PUT REQUEST - Category
function editCategory(){
	var category_id = sessionStorage.getItem('currentCategoryId')
	var category_name = $('#category_name').val()

	$.ajax( {
		url: 'https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories/' + category_id + '?apiKey=' + api_key,
	  data: JSON.stringify( {
			'category_name': category_name
		}),
	  type: 'PUT',
	  contentType: 'application/json',
		success: function(data){
			window.location.href = 'categories.html'
		},
		error: function(xhr, status, err){
			console.log(err)
		}
	})

	return false
}

// SETTER (SESSION) - Category
function setCategory(){
	var category_id = $(this).data('category-id')
	sessionStorage.setItem('currentCategoryId', category_id)
	window.location.href="editcategory.html"

	return false
}

// GET REQUEST + GETTER (SESSION) - Category
function getCategory(){
	var category_id = sessionStorage.getItem('currentCategoryId')

	$.get('https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories/' + category_id + '?apiKey=' + api_key, function(data){
		$('#category_name').val(data.category_name)
	})
}

// DELETE REQUEST
function deleteCategory(){
	var category_id = $(this).data('category-id')

	$.ajax( {
		url: 'https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories/' + category_id + '?apiKey=' + api_key,
	  type: 'DELETE',
		async: true,
		timeout: 300000,
		success: function(data){
			window.location.href = 'categories.html'
		},
		error: function(xhr, status, err){
			console.log(err)
		}
	})

	return false
}
