const msg_send = document.getElementById('send-messages');
const msg_input= document.getElementById('message-input');
const no_msg = document.getElementById('no-msg');

const sendMessage=()=>{

    linode = document.createElement('li');
    textnode =document.createTextNode(msg_input.value);

    linode.appendChild(textnode)
   
    msg_send.appendChild(linode)
   
    msg_input = "";

}