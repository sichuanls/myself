$(function(){
    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4"],
		verticalCentered: false,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2}); //侧边点导航居中
			$("header").before("<div id='header' style='opacity:0'></div>"); //作用？	
			$("#home_head").css({"margin-top":"0px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.3"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
										$("#about_info").animate({width:"800px",marginTop:"20px",marginBottom:"0"},700,'easeOutElastic',function(){
											//$("#about_info p").eq(0).animate({bottom:"0"},700,function(){});
										});
							});
						});
					});
				});
			});	
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#exp_content h1").html('实践');
				$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
					
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Others ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4){
				$(".title_en").remove();	
			}
		}
	});
});

//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("fighting!!");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("李山");
		$("#header_p2").html("个人简历");	
	});
//顶部导航取消
	$("header nav a:not(':first')").click(function(){
		//return false;
	});
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	});

// 图片轮播
$("#exp_list_slider").width($(".exp_list").width());
$("#exp_list_content").width($(".exp_list").width()*4);
$("#exp_list_slider_content").mouseenter(function(){
	$("#exp_list_to").stop(true,false).fadeTo(700,1);
}).mouseleave(function(){
	$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
});
var page=1;
$("#exp_list_toleft").click(function()
{
	if(!$("#exp_list_content").is(":animated")){
		if(page==1){
			$("#exp_list_content").animate({left:"+=50"},200,function(){
				$(this).animate({left:"-=50"},200);
			});
			return false;
		}	
		$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
		page--;
	}
});
$("#exp_list_toright").click(function(){
	if(!$("#exp_list_content").is(":animated")){
		if(page==4){
			$("#exp_list_content").animate({left:"-=50"},200,function(){
				$(this).animate({left:"+=50"},200);
			});
			return;
		}
		$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
		page++;
	}
});


//内容适应居中
$(function(){
	$("aside").css({"top":($(".active").height()-$("aside").height())/2});
});