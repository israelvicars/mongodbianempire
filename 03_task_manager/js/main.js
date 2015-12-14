$(document).ready(function(){
	$('#add_category').submit(addCategory)
	$('#edit_category').submit(editCategory)
	$('body').on('click', '.btn-edit-category', setCategory)
	$('body').on('click', '.btn-delete-category', deleteCategory)
})

var api_key = 'iKz773doNzYyKq4huh0F2u4QN2R7zERZ'

// GET REQUEST - Categories
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
