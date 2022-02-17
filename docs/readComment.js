/*---==== Creating a function that read comments: Start ====---*/
const read = (data,value,key) =>{        
        let user     = data.currentUser;
        let username = user.username;
        let image    = user.image;
        let mention = '';
        let point = 0;

        const date = new Date();      
   
        /*Creating elements: Start*/
        const conteiner   = document.createElement('DIV'),
              points      = document.createElement('DIV'),
              plus        = document.createElement('IMG'),
              userPoints  = document.createElement('SPAN'),
              minus       = document.createElement('IMG'),
              userComment = document.createElement('DIV'),
              userHeader  = document.createElement('DIV'),
              userDetails = document.createElement('DIV'),
              userPhoto   = document.createElement('IMG'),
              userName    = document.createElement('B'),
              me          = document.createElement('P'),
              commentDate = document.createElement('P'),
              buttons     = document.createElement('SPAN'),
              btnEdit     = document.createElement('LABEL'),
              btnDelete   = document.createElement('LABEL'),
              saveButton  = document.createElement('LABEL'),
              iconSave    = document.createElement('IMG'),
              iconDelete  = document.createElement('IMG'),
              iconEdit    = document.createElement('IMG'),
              commentText = document.createElement('DIV'),
              text        = document.createElement('P'),
              mentions    = document.createElement('SPAN');
        /*Creating elements: End*/

        /*Adding class: Start*/
        conteiner.classList.add('comment');

        points.classList.add('points');
        plus.classList.add('icon_points');
        plus.classList.add('plus');
        userPoints.classList.add('user_points');
        minus.classList.add('icon_points');
        minus.classList.add('minus');
        plus.setAttribute('src','./images/icon-plus.svg');
        minus.setAttribute('src','./images/icon-minus.svg');

        userComment.classList.add('user_comment');
        userHeader.classList.add('user_header');
        userDetails.classList.add('user_details');
        me.id = 'me';

        btnEdit.classList.add('btn_edit');
        saveButton.classList.add('btn_edit');
        btnDelete.classList.add('btn_delete');

        commentText.classList.add('comment_text');
        mentions.classList.add('mention_user');
        /*Adding class: End*/

        /*Adding content: Start*/
        plus.addEventListener('click',()=> point++);
        minus.addEventListener('click',()=> point--);

        userPoints.textContent = point;
        
        userPhoto.setAttribute('src',image);
        userPhoto.setAttribute('alt','user_photo');
        userName.textContent = username;
        me.textContent       = 'you';
        commentDate.textContent = value.day;

        iconEdit.setAttribute('src','./images/icon-edit.svg');
        iconDelete.setAttribute('src','./images/icon-delete.svg');
        iconSave.setAttribute('src','./images/icon-save.svg');
        saveButton.style.display = 'none';

        btnEdit.textContent    = 'Edit';
        btnDelete.textContent = 'Delete';
        saveButton.textContent   = 'Save';
         
        mentions.textContent = mention;
        text.textContent     = value.content;
        /*Adding content: End*/

        /*Adding childs: Start*/
        points.appendChild(plus);
        points.appendChild(userPoints);
        points.appendChild(minus);
        
        userDetails.appendChild(userPhoto);
        userDetails.appendChild(userName);
        userDetails.appendChild(me);
        userDetails.appendChild(commentDate);
        
        btnEdit.appendChild(iconEdit);
        saveButton.appendChild(iconSave);
        btnDelete.appendChild(iconDelete);

        buttons.appendChild(btnEdit);
        buttons.appendChild(saveButton);    
        buttons.appendChild(btnDelete);  
        
        userHeader.appendChild(userDetails);
        userHeader.appendChild(buttons);
        commentText.appendChild(mentions);
        commentText.appendChild(text);      

        userComment.appendChild(userHeader);
        userComment.appendChild(commentText);     

        conteiner.appendChild(points);
        conteiner.appendChild(userComment);
        /*Adding childs: End*/

        /*---==== Events: Start ====---*/
        btnEdit.addEventListener('click',()=>{
            text.setAttribute('contenteditable','true');
            text.setAttribute('spellcheck','false');
            text.style.outline = 'none';
            saveButton.style.display = 'flex';
            btnEdit.style.display = 'none';            
        });

        saveButton.addEventListener('click',()=>{     
            text.setAttribute('contenteditable','false');
            modifyComment(key,{user: username,content: text.textContent})           
            saveButton.style.display = 'none'; 
            btnEdit.style.display = 'flex';                   
        });     

        btnDelete.addEventListener('click',()=>{
            document.querySelector('.modal_conteiner').style = 'opacity: 1; pointer-events: unset';
            document.querySelector('.modal').style.transform = 'scale(1)';

            document.getElementById('confirm_delete').addEventListener('click',()=>{
                  document.querySelector('.modal_conteiner').style = 'opacity: 0; pointer-events: none';
                  document.querySelector('.modal').style.transform = 'scale(0)';
                  deleteComment(key);
                  document.querySelector('.replies').removeChild(conteiner);        
            });                   
        });

        document.getElementById('cancel_delete').addEventListener('click',()=>{
            document.querySelector('.modal_conteiner').style = 'opacity: 0; pointer-events: none;';
            document.querySelector('.modal').style.transform = 'scale(0)';
        }); 
        /*---==== Events: End ====---*/
      
        return conteiner;
};
/*---==== Creating a function that read comments: End ====---*/