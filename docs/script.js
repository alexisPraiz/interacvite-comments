/*---==== Creating a function that creates the DOM content dynamically using the JSON file: Start ====---*/
addEventListener('DOMContentLoaded',()=>{
    users();
});

const users = async ()=>{
    try{
        const response = await fetch('data.json');
        const data     = await response.json();
        comments(data);
        replies(data);
        document.querySelector('.btn_send-comment').addEventListener('click',()=>{
            newComment(data);
        });
        readComment(data);
    }catch(error){
        console.log(error);
    }
}

const comments = data =>{
    let showComments = '';
    let comment = data.comments;

    /*Show comments: Start*/
    for(let i=0; i<comment.length; i++){
        let user     = comment[i].user;
        let image    = user.image;
        let username = user.username;

    showComments += `<div class="comment">
                        <div class="points">
                           <img src="./images/icon-plus.svg" class='icon_points plus'>
                           <span class="user_points">${comment[i].score}</span>
                           <img src="./images/icon-minus.svg" class='icon_points minus'>
                        </div>

                        <div class="user_comment">
                            <div class="user_header">
                                <div class="user_details">
                                <img src="${image}" alt="user_photo">
                                <b class="user_name">${username}</b>
                                <p class="comment_date">${comment[i].createdAt}</p>
                            </div>

                                <label id="${username}"><i class='bx bxs-share'></i>Reply</label>
                            </div>

                            <p class="comment_text">
                                ${comment[i].content}
                            </p>
                        </div>
                    </div>`;
            document.querySelector('.comments').innerHTML = showComments;
    } 
    /*Show comments: End*/ 
}
/*---==== Creating a function that creates the DOM content dynamically using the JSON file: End ====---*/

/*---==== Events: Start ====---*/
document.getElementById('comments').addEventListener('click',(e)=>{
    if(e.target.tagName == 'IMG'){
        let element = e.target.parentElement;
        
        if(e.target.classList.contains('plus')){       
            let sum = parseInt(element.childNodes[3].textContent) + 1;
            element.childNodes[3].textContent = sum;
        }else{
            if(element.childNodes[3].textContent > 0){
                let subtract = parseInt(element.childNodes[3].textContent) - 1;
                element.childNodes[3].textContent = subtract;
            }     
        }
    }else if(e.target.tagName == 'LABEL') document.getElementById('add_comment').value += `@${e.target.id}`;
})
/*---==== Events: End ====---*/