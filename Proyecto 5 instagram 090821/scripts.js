const publish = document.getElementById('publish')

const insertText = document.getElementById('newComment')

function insertComment(e){
    e.preventDefault()
    const insertTextValue = insertText.value
    const commentBox = document.getElementById('commentBox')

    const box = document.createElement('div')
    const userPhoto = document.createElement('img')
    const userName = document.createElement ('h5')
    const userComment = document.createElement ('p')
    const like = document.createElement('img')

    box.className = 'box'
    userPhoto.className = 'perfilDog'
    userPhoto.src = 'img/perfil_foxy.jpg'
    userPhoto.setAttribute ('alt', 'foto de usuario Foxy Red')
    userPhoto.className = 'perfilFoxy'
    userName.className = 'links'
    userName.innerText = 'Foxy Red'
    userComment.innerText = insertTextValue
    userComment.className = 'text'
    like.className = 'likeComment'
    like.src = 'img/Heart_lineal.svg'
    like.setAttribute('alt', 'heart, i like this comment')
    like.className = 'heart'

    commentBox.appendChild(box)
    box.appendChild(userPhoto)
    box.appendChild(userName)
    box.appendChild(userComment)
    box.appendChild(like)

    insertText.value = ''

}

publish.addEventListener('click', insertComment)