import $ from 'jquery';

var Request = {

	read: () => {
		$.ajax({
			url: 'http://localhost:3000/movies',
			type: 'GET',
			contentType: application/json,
			data: JSON.stringify({
			}),
			success: (result) => {
				this.setState({
					movies: result
					})
				console.log(result)
			},
			error: (xhr, err) => { console.log(xhr, err)}
		})
	}, 

	create: (name, ) => {
		$.ajax({
			url: 'http://localhost:3000/movies',
			type: 'POST',
			contentType: application/json,
			data: JSON.stringify({
				username: '',
				name: name
			}),
			success: (result) => {
				this.setState({
					movies: result
				})
				console.log(result)
			},
			error: (xhr, err) => { console.log(xhr, err)}
		})
	}

};	

export default Request;


//ajax request
	//url
	//type
	//[header]
	//[data type]
	//[content type]
	//data
	//success
	//error

