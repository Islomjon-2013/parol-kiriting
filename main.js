function ShowHide(){
    let input = document.getElementById(`password`);
let button = document.querySelector(`a`);
if(input.type=='password'){
    input.type = 'text';
    button.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
    
}else{
    input.type = 'password'
    button.innerHTML = '<i class="bi bi-eye-fill"></i>'
}

}