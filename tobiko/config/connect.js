module.exports = function(grunt){
	return {
		dev: {
			options: {
				port: '<%= port %>',
<<<<<<< HEAD
				base: ['<%= buildPath %>', '.'],
				livereload: '<%= livereload %>'
=======
				base: ['<%= buildPath %>', '.']
>>>>>>> e8d2d69f3d4fb658ccb15a0657f8111af42711de
			}
		},
		prod: {
			options: {
				base: '<%= buildPath %>',
				keepalive: true,
			}
		}
	}
}