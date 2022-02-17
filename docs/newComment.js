/*---==== Creating a function that new's comments: Start ====---*/
const newComment = (data) =>{ 
        let user     = data.currentUser;
        let username = user.username;
        let image    = user.image;
        let comment  = document.getElementById('add_comment').value;
        let response = comment.split(' ');
        let mention;
        
        let elements = '';

        if(comment.includes('@')) mention = response.shift();
        else mention = '';  

        const request = new Date();
   
        elements += `<div class="comment">
                        <div class="points">
                            <img src="./images/icon-plus.svg" class='icon_points plus'>
                            <span class="user_points">${1}</span>
                            <img src="./images/icon-minus.svg" class='icon_points minus'>
                        </div>

                        <div class="user_comment">
                            <div class="user_header">
                                <div class="user_details">
                                    <img src="${image}" alt="user_photo">
                                    <b class="user_name">${username}</b>
                                    <p id="me">you</p>
                                    <p class="comment_date">${request.toLocaleDateString()}</p>
                                </div>

                                <span>
                                    <label class="btn_edit" id="edit"><img src="./images/icon-edit.svg">Edit</label>
                                    <label class="btn_edit" id="save" style="display:none"><img src="./images/icon-save.svg">Save</label>
                                    <label class="btn_delete" id="delete"><img src="./images/icon-delete.svg">Delete</label>
                                </span>
                            </div>

                            <p class="comment_text">
                               <span class="mention_user">${mention}</span>
                               ${response.join(' ')}
                            </p>
                        </div>`;
            if(comment != ''){
                document.querySelector('.replies').innerHTML += elements;
                addComment({user: username, content: comment, day: request.toLocaleDateString()});
                document.getElementById('add_comment').value = '';
                alert('reaload the page!');
            }
}
/*---==== Creating a function that new's comments: End ====---*/