/*Show replies: Start*/
const replies = data =>{
    let response    = data.comments[1];
    let viewReplies = response.replies;
    let showReplies = '';
    
    for(let i=0; i<viewReplies.length; i++){
          let user     = viewReplies[i].user;
          let image    = user.image;
          let username = user.username;
    
        if(username != 'juliusomo'){
            showReplies += `<div class="comment">
                                <div class="points">
                                    <img src="./images/icon-plus.svg" class='icon_points plus'>
                                    <span class="user_points">${viewReplies[i].score}</span>
                                    <img src="./images/icon-minus.svg" class='icon_points minus'>
                                </div>
    
                                <div class="user_comment">
                                    <div class="user_header">
                                        <div class="user_details">
                                           <img src="${image}">
                                           <b class="user_name">${username}</b>
                                           <p class="comment_date">${viewReplies[i].createdAt}</p>
                                        </div>
    
                                        <label for="add_comment" id="${username}"><i class='bx bxs-share'></i>Reply</label>
                                    </div>
    
                                    <p class="comment_text">
                                       <span class="mention_user">@${viewReplies[i].replyingTo}</span> 
                                       ${viewReplies[i].content}                                
                                    </p>
                                </div>
                           </div>`;
            document.querySelector('.replies').innerHTML = showReplies;
        }else{
            showReplies +=` <div class="comment">
                                <div class="points">
                                   <img src="./images/icon-plus.svg" class='icon_points plus'>
                                   <span class="user_points">${viewReplies[i].score}</span>
                                   <img src="./images/icon-minus.svg" class='icon_points minus'>
                                </div>
    
                                <div class="user_comment">
                                    <div class="user_header">
                                        <div class="user_details">
                                           <img src="${image}" alt="user_photo">
                                           <b class="user_name">${username}</b>
                                           <p id="me">you</p>
                                           <p class="comment_date">${viewReplies[i].createdAt}</p>
                                        </div>
    
                                        <span>
                                           <label class="btn_edit" id="edit"><img src="./images/icon-edit.svg">Edit</label>
                                           <label class="btn_delete" id="delete"><img src="./images/icon-delete.svg">Delete</label>
                                        </span>
                                </div>
    
                                <p class="comment_text">
                                    <span class="mention_user">@${viewReplies[i].replyingTo}</span>
                                    ${viewReplies[i].content}
                                </p>
                            </div>`;
            document.querySelector('.replies').innerHTML = showReplies;
        }
    }
}

/*Show replies: End*/