var api_key = 'iKz773doNzYyKq4huh0F2u4QN2R7zERZ'

function getCategories(){
	//GET REQUEST
	$.get('https://api.mongolab.com/api/1/databases/task-manager-project/collections/categories?apiKey=' + api_key, function(data){
		var output = '<ul class="list-group">'
		$.each(data, function(key, data){
			output += (
				'<li class="list-group-item category">'+
				data.category_name +
				'<div class="pull-right"><a class="btn btn-primary btn-edit-category" data-category-id="' +
				data._id.$oid +
				'">Edit</a></div>' +
				'</li>'
			)
		})
		output += '</ul>'
		$('#categories').html(output)
	})
}
