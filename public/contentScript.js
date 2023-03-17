(() => {
    let books;

    
 
  
    const newPageLoaded = async () => {
        books = document.querySelectorAll("li.col-xs-6.col-sm-4.col-md-3.col-lg-3");
        var filter = Array.prototype.filter;
        
        var bookElements = filter.call(books, function(book) {
            return book.innerText;
        });
        console.log(bookElements)
    //   const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  
    //   currentVideoBookmarks = await fetchBookmarks();
  
    //   if (!bookmarkBtnExists) {
    //     const bookmarkBtn = document.createElement("img");
  
    //     bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
    //     bookmarkBtn.className = "ytp-button " + "bookmark-btn";
    //     bookmarkBtn.title = "Click to bookmark current timestamp";
  
    //     youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
    //     youtubePlayer = document.getElementsByClassName('video-stream')[0];
  
    //     youtubeLeftControls.appendChild(bookmarkBtn);
    //     bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
    //   }
    };
  
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type } = obj;
  
      if (type === "NEW") {
        // currentVideo = videoId;
        newVideoLoaded();
      } 
    });
  
    newPageLoaded();
  })();
  