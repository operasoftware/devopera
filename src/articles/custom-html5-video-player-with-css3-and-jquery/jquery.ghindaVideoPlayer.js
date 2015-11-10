/*
 * ghindaVideoPlayer - jQuery plugin 1.0.0
 *
 * Copyright (c) 2010 Cristian-Ionut Colceriu
 *
 * www.ghinda.net
 * contact@ghinda.net
 *
 */

(function($) {
	// plugin definition
	$.fn.gVideo = function(options) {		
		// build main options before element iteration		
		var defaults = {
			theme: 'simpledark',
			childtheme: ''
		};
		var options = $.extend(defaults, options);
		// iterate and reformat each matched element
		return this.each(function() {
			var $gVideo = $(this);
			
			//create html structure
			//main wrapper
			var $video_wrap = $('<div></div>').addClass('ghinda-video-player').addClass(options.theme).addClass(options.childtheme);
			//controls wraper
			var $video_controls = $('<div class="ghinda-video-controls"><a class="ghinda-video-play" title="Play/Pause"></a><div class="ghinda-video-seek"></div><div class="ghinda-video-timer">00:00</div><div class="ghinda-volume-box"><div class="ghinda-volume-slider"></div><a class="ghinda-volume-button" title="Mute/Unmute"></a></div></div>');						
			$gVideo.wrap($video_wrap);
			$gVideo.after($video_controls);
			
			//get new elements
			var $video_container = $gVideo.parent('.ghinda-video-player');
			var $video_controls = $('.ghinda-video-controls', $video_container);
			var $ghinda_play_btn = $('.ghinda-video-play', $video_container);
			var $ghinda_video_seek = $('.ghinda-video-seek', $video_container);
			var $ghinda_video_timer = $('.ghinda-video-timer', $video_container);
			var $ghinda_volume = $('.ghinda-volume-slider', $video_container);
			var $ghinda_volume_btn = $('.ghinda-volume-button', $video_container);
			
			$video_controls.hide(); // keep the controls hidden
						
			var gPlay = function() {
				if($gVideo.attr('paused') == false) {
					$gVideo[0].pause();					
				} else {					
					$gVideo[0].play();				
				}
			};
			
			$ghinda_play_btn.click(gPlay);
			$gVideo.click(gPlay);
			
			$gVideo.bind('play', function() {
				$ghinda_play_btn.addClass('ghinda-paused-button');
			});
			
			$gVideo.bind('pause', function() {
				$ghinda_play_btn.removeClass('ghinda-paused-button');
			});
			
			$gVideo.bind('ended', function() {
				$ghinda_play_btn.removeClass('ghinda-paused-button');
			});
			
			var seeksliding;			
			var createSeek = function() {
				if($gVideo.attr('readyState')) {
					var video_duration = $gVideo.attr('duration');
					$ghinda_video_seek.slider({
						value: 0,
						step: 0.01,
						orientation: "horizontal",
						range: "min",
						max: video_duration,
						animate: true,					
						slide: function(){							
							seeksliding = true;
						},
						stop:function(e,ui){
							seeksliding = false;						
							$gVideo.attr("currentTime",ui.value);
						}
					});
					$video_controls.show();					
				} else {
					setTimeout(createSeek, 150);
				}
			};

			createSeek();
		
			var gTimeFormat=function(seconds){
				var m=Math.floor(seconds/60)<10?"0"+Math.floor(seconds/60):Math.floor(seconds/60);
				var s=Math.floor(seconds-(m*60))<10?"0"+Math.floor(seconds-(m*60)):Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
			var seekUpdate = function() {
				var currenttime = $gVideo.attr('currentTime');
				if(!seeksliding) $ghinda_video_seek.slider('value', currenttime);
				$ghinda_video_timer.text(gTimeFormat(currenttime));							
			};
			
			$gVideo.bind('timeupdate', seekUpdate);	
			
			var video_volume = 1;
			$ghinda_volume.slider({
				value: 1,
				orientation: "vertical",
				range: "min",
				max: 1,
				step: 0.05,
				animate: true,
				slide:function(e,ui){
						$gVideo.attr('muted',false);
						video_volume = ui.value;
						$gVideo.attr('volume',ui.value);
					}
			});
			
			var muteVolume = function() {
				if($gVideo.attr('muted')==true) {
					$gVideo.attr('muted', false);
					$ghinda_volume.slider('value', video_volume);
					
					$ghinda_volume_btn.removeClass('ghinda-volume-mute');					
				} else {
					$gVideo.attr('muted', true);
					$ghinda_volume.slider('value', '0');
					
					$ghinda_volume_btn.addClass('ghinda-volume-mute');
				};
			};
			
			$ghinda_volume_btn.click(muteVolume);
			
			$gVideo.removeAttr('controls');
			
		});
	};

	//
	// plugin defaults
	//
	$.fn.gVideo.defaults = {		
	};

})(jQuery);