var flag = false
var flag1 = false
$(function () {
  var interval = setInterval(increment, 100)
  var current = 0

  function increment () {
    $('#counter').html(current + '%')
    // console.log(current)
    if (current == 0) {
      $('.load-bar-inner').css('animation-play-state', 'paused')
    } else {
      $('.load-bar-inner').css('animation-play-state', 'running')
    }

    if (current >= 99 && flag && flag1) {
      current = 0
      clearInterval(interval)

      if (chance > 0) {
        $('.load-bar-inner').css('animation-play-state', 'paused')
        $('#load').hide()
        $('#container').show()
        $('#jquery_jplayer_1').jPlayer('pause')
      }

    } else {
      current++
      if (current >= 98) {
        current = 99
        $('.load-bar-inner').css('animation-play-state', 'paused')
      }
    }
  }
})
var img, value, music
var bgwidth = document.documentElement.clientWidth
var bgheight = document.documentElement.clientHeight
var myCanvas = '<canvas id="stage" width="' + bgwidth + '" height="' + bgheight + '"></canvas>'
$('#gamepanel').append(myCanvas)

function getArea () {
  var url = location.search
  var index = url.indexOf('?') + 1
  var index1 = url.indexOf('&') + 1
  var areas = url.slice(index + 5, index1 - 1)
  if (areas == 'huanan') {
    $('.jiazai').text('华南大区游戏加载中...')
    value = $('#huanan').val()
    music = 'huanan'
  } else if (areas == 'huabei') {
    $('.jiazai').text('华北大区游戏加载中...')
    value = $('#huabei').val()
    music = 'huabei'
  } else if (areas == 'huazhong') {
    $('.jiazai').text('华中大区游戏加载中...')
    value = $('#huazhong').val()
    music = 'huazhong'
  } else if (areas == 'dongnan') {
    $('.jiazai').text('东南大区游戏加载中...')
    value = $('#dongnan').val()
    music = 'dongnan'
  } else if (areas == 'dongbei') {
    $('.jiazai').text('东北大区游戏加载中...')
    value = $('#dongbei').val()
    music = 'dongbei'
  } else if (areas == 'xinan') {
    $('.jiazai').text('西南大区游戏加载中...')
    value = $('#xinan').val()
    music = 'xinan'
  } else if (areas == 'xibei') {
    $('.jiazai').text('西北大区游戏加载中...')
    value = $('#xibei').val()
    music = 'xibei'
    console.log(value)
  } else if (areas == 'shanghai') {
    $('.jiazai').text('上海大区游戏加载中...')
    value = $('#shanghai').val()
    music = 'shanghai'
  } else if (areas == 'suwan') {
    $('.jiazai').text('苏皖大区游戏加载中...')
    value = $('#suwan').val()
    music = 'suwan'
  } else if (areas == 'shandong') {
    $('.jiazai').text('山东大区游戏加载中...')
    value = $('#shandong').val()
    music = 'shandong'
  }
  img = areas
  return areas
}

getArea()
$(document).ready(function () {
  $('#jquery_jplayer_1').jPlayer({
    ready: function (event) {
      $(this).jPlayer('setMedia', {
        mp3: 'static/' + music + '.mp3?v=' + Math.random(), //mp3的播放地址
        preload: 'auto',
        volume: 1,
        autoPlay: true
      }).jPlayer('play').jPlayer('repeat')
    },
    timeupdate: function (event) {
      if (event.jPlayer.status.currentTime == 0) {
        time = 0
      } else {
        time = event.jPlayer.status.currentTime
      }
    },
    play: function (event) {
      //点击开始方法调用lrc。start歌词方法 返回时间time
      alert(2)
      $.lrc.start(value, function () {
        return time
      })
    },
    ended: function (event) {
      //			$("#lrc_list").removeAttr("style").html("<li>歌曲播放完毕！</li>");
      flag = true
    },
    swfPath: 'static/js', //存放jplayer.swf的决定路径
    solution: 'html,flash', //支持的页面
    supplied: 'mp3', //支持的音频的格式
    wmode: 'window'
  })

  function autoPlayAudio () {
    wx.config({
      // 配置信息, 即使不正确也能使用 wx.ready
      debug: false,
      appId: '',
      timestamp: 1,
      nonceStr: '',
      signature: '',
      jsApiList: []
    })
    wx.ready(function () {
      $('#jquery_jplayer_1').jPlayer('play').jPlayer('repeat')
    })
  }

// 解决ios音乐不自动播放的问题
  autoPlayAudio()
  $('.back').on('touchend', 'a', function () {
    window.location.href = '/midAutumn/index'
    sessionStorage.setItem('flag', true)
  })
  //自动播放
//	if(sessionStorage.getItem("flag")){
//		sessionStorage.clear();
//
//		window.location.reload(true);
//	}

  window.addEventListener('pageshow', function () {
    if (sessionStorage.getItem('flag')) {
      sessionStorage.clear()
      window.location.reload()
    }
  })
})
pushHistory()

function pushHistory () {
  var state = {
    title: 'title',
    url: '#'
  }
  window.history.pushState(state, 'title', '#')
}

window.addEventListener('popstate', function (e) {  //回调函数中实现需要的功能
//  alert("我监听到了浏览器的返回按钮事件啦");
  sessionStorage.setItem('flag', true)
  location.href = '/midAutumn/index'  //在这里指定其返回的地址
}, false)

function Ship (ctx) {
  gameMonitor.im.loadImage(['static/' + img + '/player.png'])
  this.width = 80
  this.height = 112
  this.left = gameMonitor.w / 2 - this.width / 2
  this.top = gameMonitor.h - 2 * this.height
  this.player = gameMonitor.im.createImage('static/' + img + '/player.png')

  this.paint = function () {
    ctx.drawImage(this.player, this.left, this.top, this.width, this.height)
  }

  this.setPosition = function (event) {
    if (gameMonitor.isMobile()) {
      var tarL = event.changedTouches[0].clientX
      var tarT = event.changedTouches[0].clientY
    } else {
      var tarL = event.offsetX
      var tarT = event.offsetY
    }
    this.left = tarL - this.width / 2
    this.top = tarT - this.height / 2
    if (this.left < 0) {
      this.left = 0
    }
    if (this.left > bgwidth - this.width) {
      this.left = bgwidth - this.width
    }
    if (this.top < 0) {
      this.top = 0
    }
    if (this.top > gameMonitor.h - this.height) {
      this.top = gameMonitor.h - this.height
    }
    this.paint()
  }

  this.controll = function () {
    var _this = this
    var stage = $('#gamepanel')
    var currentX = this.left,
      currentY = this.top,
      move = false
    stage.on(gameMonitor.eventType.start, function (event) {
      _this.setPosition(event)
      move = true
    }).on(gameMonitor.eventType.end, function () {
      move = false
    }).on(gameMonitor.eventType.move, function (event) {
      event.preventDefault()
      if (move) {
        _this.setPosition(event)
      }

    })
  }

  this.eat = function (foodlist) {
    for (var i = foodlist.length - 1; i >= 0; i--) {
      var f = foodlist[i]
      if (f) {
        var l1 = this.top + (this.height - 32) / 2 - (f.top + f.height / 2)
        var l2 = this.left + this.width / 2 - (f.left + f.width / 2)
        var l3 = Math.sqrt(l1 * l1 + l2 * l2)
        if (l3 <= (this.height - 32) / 2 + f.height / 2) {
          foodlist[f.id] = null
          if (f.type == 0) {
            gameMonitor.stop()
            $('#gameoverPanel').show()

            setTimeout(function () {
              $('#gameoverPanel').hide()
              $('#gamepanel').hide()
              $('#resultPanel').show()
              gameMonitor.getScore()
            }, 2000)
          } else {
            $('#score').text(++gameMonitor.score)
            $('#sscore').text(gameMonitor.score)
            $('.heart').removeClass('hearthot').addClass('hearthot')
            setTimeout(function () {
              $('.heart').removeClass('hearthot')
            }, 200)
          }
        }
      }

    }
  }
}

function Food (type, left, id) {
  this.speedUpTime = 200
  this.id = id
  this.type = type
  this.width = 50
  this.height = 50
  this.left = left
  this.top = -50
  this.speed = 0.04 * Math.pow(1.2, Math.floor(gameMonitor.time / this.speedUpTime))
  this.loop = 0
  var p = this.type == 0 ? 'static/' + img + '/food1.png' : 'static/' + img + '/food2.png'
  this.pic = gameMonitor.im.createImage(p)
}

Food.prototype.paint = function (ctx) {
  ctx.drawImage(this.pic, this.left, this.top, this.width, this.height)
}
Food.prototype.move = function (ctx) {
  if (gameMonitor.time % this.speedUpTime == 0) {
    this.speed *= 1.2
  }
  this.top += ++this.loop * this.speed
  if (this.top > gameMonitor.h) {
    gameMonitor.foodList[this.id] = null
  } else {
    this.paint(ctx)
  }
}

function ImageMonitor () {
  var imgArray = []
  return {
    createImage: function (src) {
      return typeof imgArray[src] != 'undefined' ? imgArray[src] : (imgArray[src] = new Image(), imgArray[src].src = src, imgArray[src])
    },
    loadImage: function (arr, callback) {
      for (var i = 0, l = arr.length; i < l; i++) {
        var img = arr[i]
        imgArray[img] = new Image()
        imgArray[img].onload = function () {
          if (i == l - 1 && typeof callback == 'function') {
            callback()
          }
          //					flag1=true;
        }
        imgArray[img].src = img
      }
    }
  }
}

var gameMonitor = {
  w: bgwidth,
  h: bgheight,
  bgWidth: bgwidth,
  bgHeight: bgwidth * 3.51875,
  time: 0,
  timmer: null,
  bgSpeed: 2,
  bgloop: 0,
  score: 0,
  im: new ImageMonitor(),
  foodList: [],
  bgDistance: 0, //背景位置
  eventType: {
    start: 'touchstart',
    move: 'touchmove',
    end: 'touchend'
  },
  init: function () {
    var _this = this
    var canvas = document.getElementById('stage')
    var ctx = canvas.getContext('2d')
    //绘制背景
    var bg = new Image()
    _this.bg = bg
    bg.onload = function () {
      ctx.drawImage(bg, 0, 0, _this.bgWidth, _this.bgHeight)
      flag1 = true
    }
    bg.src = 'static/' + img + '/bg.jpg'

    _this.initListener(ctx)

  },
  initListener: function (ctx) {
    var _this = this
    var body = $(document.body)
    $(document).on(gameMonitor.eventType.move, function (event) {
      event.preventDefault()
    })
    body.on(gameMonitor.eventType.start, '.replay, .playagain', function () {
      $('#resultPanel').hide()
      var canvas = document.getElementById('stage')
      var ctx = canvas.getContext('2d')
      _this.ship = new Ship(ctx)
      _this.ship.controll()
      _this.reset()
      _this.run(ctx)
    })

    body.on(gameMonitor.eventType.start, '#frontpage', function () {
      $('#frontpage').css('left', '-100%')
    })

    body.on(gameMonitor.eventType.start, '#guidePanel', function () {
      $(this).hide()
      _this.ship = new Ship(ctx)
      _this.ship.paint()
      _this.ship.controll()
      gameMonitor.run(ctx)
    })

    body.on(gameMonitor.eventType.start, '.share', function () {
      $('.weixin-share').show().on(gameMonitor.eventType.start, function () {
        $(this).hide()
      })
    })

  },
  rollBg: function (ctx) {
    if (this.bgDistance >= this.bgHeight) {
      this.bgloop = 0
    }
    this.bgDistance = ++this.bgloop * this.bgSpeed
    ctx.drawImage(this.bg, 0, this.bgDistance - this.bgHeight, this.bgWidth, this.bgHeight)
    ctx.drawImage(this.bg, 0, this.bgDistance, this.bgWidth, this.bgHeight)
  },
  run: function (ctx) {
    var _this = gameMonitor
    ctx.clearRect(0, 0, _this.bgWidth, _this.bgHeight)
    _this.rollBg(ctx)

    //绘制飞船
    _this.ship.paint()
    _this.ship.eat(_this.foodList)

    //产生月饼
    _this.genorateFood()

    //绘制月饼
    for (i = _this.foodList.length - 1; i >= 0; i--) {
      var f = _this.foodList[i]
      if (f) {
        f.paint(ctx)
        f.move(ctx)
      }

    }
    _this.timmer = setTimeout(function () {
      gameMonitor.run(ctx)
    }, Math.round(1000 / 60))

    _this.time++
  },
  stop: function () {
    var _this = this
    $('#stage').off(gameMonitor.eventType.start + ' ' + gameMonitor.eventType.move)
    setTimeout(function () {
      clearTimeout(_this.timmer)
    }, 0)

  },
  genorateFood: function () {
    var genRate = 50 //产生月饼的频率
    var random = Math.random()
    if (random * genRate > genRate - 1) {
      var left = Math.random() * (this.w - 50)
      var type = Math.floor(left) % 2 == 0 ? 0 : 1
      var id = this.foodList.length
      var f = new Food(type, left, id)
      this.foodList.push(f)
    }
  },
  reset: function () {
    this.foodList = []
    this.bgloop = 0
    this.score = 0
    this.timmer = null
    this.time = 0
    $('#sscore').text(this.score)
  },
  getScore: function () {
    var time = Math.floor(this.time / 60)
    var score = this.score
    var user = 1
    if (score == 0) {
      $('#sscore').text('0')
      return
    } else if (score < 10) {
      user = 2
    } else if (score > 10 && score <= 20) {
      user = 10
    } else if (score > 20 && score <= 40) {
      user = 40
    } else if (score > 40 && score <= 60) {
      user = 80
    } else if (score > 60 && score <= 80) {
      user = 92
    } else if (score > 80) {
      user = 99
    }
  },
  isMobile: function () {
    var sUserAgent = navigator.userAgent.toLowerCase(),
      bIsIpad = sUserAgent.match(/ipad/i) === 'ipad',
      bIsIphoneOs = sUserAgent.match(/iphone os/i) === 'iphone os',
      bIsMidp = sUserAgent.match(/midp/i) === 'midp',
      bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === 'rv:1.2.3.4',
      bIsUc = sUserAgent.match(/ucweb/i) === 'ucweb',
      bIsAndroid = sUserAgent.match(/android/i) === 'android',
      bIsCE = sUserAgent.match(/windows ce/i) === 'windows ce',
      bIsWM = sUserAgent.match(/windows mobile/i) === 'windows mobile',
      bIsWebview = sUserAgent.match(/webview/i) === 'webview'
    return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)
  }
}
if (!gameMonitor.isMobile()) {
  gameMonitor.eventType.start = 'mousedown'
  gameMonitor.eventType.move = 'mousemove'
  gameMonitor.eventType.end = 'mouseup'
}

gameMonitor.init()
