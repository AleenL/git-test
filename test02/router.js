/*
  使用范例




 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据

app.get('/hello', function(req, res) {
	res.send({
		status: 1,
		msg: '<div id="nihao">早上好</div>'
	});
});



 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }

app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }

app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板

app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});
*/

app.get('/getNews',function(req,res){
    var news = [
	{link:'www.baidu.conm',
	 img:'http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	 title:'谁才是你的那个唯一，原谅我怀疑自己',
	 contents:'你要的爱，不只是依赖，像个大男孩，风吹又日晒...'
	},
	{link:'www.baidu.conm',
	 img:'http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	 title:'谁才是你的那个唯一，原谅我怀疑自己',
	 contents:'你要的爱，不只是依赖，像个大男孩，风吹又日晒...'
	},
	{link:'www.baidu.conm',
	 img:'http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	 title:'谁才是你的那个唯一，原谅我怀疑自己',
	 contents:'你要的爱，不只是依赖，像个大男孩，风吹又日晒...'
	},
	{link:'www.baidu.conm',
	 img:'http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	 title:'谁才是你的那个唯一，原谅我怀疑自己',
	 contents:'你要的爱，不只是依赖，像个大男孩，风吹又日晒...'
	},
	{link:'www.baidu.conm',
	 img:'http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	 title:'谁才是你的那个唯一，原谅我怀疑自己',
	 contents:'你要的爱，不只是依赖，像个大男孩，风吹又日晒...'
	},
	{link:'www.baidu.conm',
	 img:'http://upload-images.jianshu.io/upload_images/3257837-c1bbf36b18d98111.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	 title:'谁才是你的那个唯一，原谅我怀疑自己',
	 contents:'你要的爱，不只是依赖，像个大男孩，风吹又日晒...'}
];
	
	/*var pageIndex=req.query.page;
	var len=3;

	var retNews = news.slice(pageIndex*len,len+pageIndex); */

	res.end({
		status:0,
		data:news
	})

})
