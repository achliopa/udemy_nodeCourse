var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
	process.env.PORT = 3000;
	process.env.IP = 'localhost';
	process.env.MONGODB_URI = 'mongodb://localhost/TodoApp';
} else if (env=== 'test') {
	process.env.PORT = 3000;
	process.env.IP = 'localhost';
	process.env.MONGODB_URI = 'mongodb://localhost/TodoAppTest';
}