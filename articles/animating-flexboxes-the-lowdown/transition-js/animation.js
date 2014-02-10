  var articles = document.getElementsByTagName('article');
  
  var toggleFlex = function(articleId) {
    for(j=0;j<=(articles.length-1);j++) {
      if(articles[j].id == articleId) {
        articles[j].focused = true;
        if(articles[j].className == "") {
          if(Modernizr.flexbox) {
            articles[j].className = "flex-out";
            articles[j].style.cssText = "-webkit-flex: 1 500px;-moz-flex: 1 500px;-ms-flex: 1 500px;flex: 1 500px;color: rgba(0,0,0,1);"
          } else if(Modernizr.flexboxlegacy) {
            articles[j].className = "flex-out";
            articles[j].style.cssText = "width: 500px;color: rgba(0,0,0,1);"
          }
        } 
      } else if(articles[j].className == "flex-out") {
          articles[j].className = "";
          articles[j].style.cssText = ""
      }
    }
  }
  
  for(i=0;i<=(articles.length-1);i++) {
    articles[i].onfocus = function() {
      var articleId = this.id;
      toggleFlex(articleId);
    }
  }
